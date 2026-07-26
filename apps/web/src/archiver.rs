use js_sys::{Array, Function, Map, Uint8Array};
use serde::Serialize;
use wasm_bindgen::prelude::*;

// Bridge to the vendored Emscripten 7-Zip build. All business logic (temp-FS
// handling, password-retry detection, recursive directory walk, tar
// auto-chain) lives here in Rust; `/shim.js` only exposes raw Emscripten
// runtime primitives.
#[wasm_bindgen(module = "/shim.js")]
extern "C" {
    #[wasm_bindgen(js_name = initSevenZip, catch)]
    async fn init_sz(on_log: Option<Function>) -> Result<JsValue, JsValue>;

    #[wasm_bindgen(js_name = szCallMain, catch)]
    fn sz_call_main(args: Array) -> Result<Array, JsValue>;

    #[wasm_bindgen(js_name = szWriteFile)]
    fn sz_write_file(path: &str, data: &[u8]);

    #[wasm_bindgen(js_name = szReadFile)]
    fn sz_read_file(path: &str) -> Vec<u8>;

    #[wasm_bindgen(js_name = szReadDir)]
    fn sz_read_dir(path: &str) -> Array;

    #[wasm_bindgen(js_name = szMkdirTree)]
    fn sz_mkdir_tree(path: &str);

    #[wasm_bindgen(js_name = szUnlink)]
    fn sz_unlink(path: &str);

    #[wasm_bindgen(js_name = szIsDirPath)]
    fn sz_is_dir_path(path: &str) -> bool;
}

#[derive(Serialize)]
struct ExtractedFile {
    name: String,
    #[serde(with = "serde_bytes")]
    data: Vec<u8>,
}

/// Outcome of interpreting a completed `call_7z`. Based on 7-Zip's documented
/// exit codes: 0 = success, 1 = non-fatal warning, 2 = fatal error (which is
/// NOT inherently password-related — corruption, I/O errors, and unsupported
/// formats also exit 2).
#[derive(Debug, PartialEq)]
enum ExtractOutcome {
    Ok,
    PasswordRequired,
    Failed(i32),
}

/// Classifies a 7z run's result. `password_likely` (direct evidence: a
/// stdin prompt or "password"/"encrypted" mentioned in 7z's own output)
/// always wins. Otherwise, a fatal error (status 2) is only treated as a
/// password problem if a password was already attempted for this call —
/// an unprompted, no-password fatal error is a real failure (corrupt
/// archive, unsupported format, etc.), not evidence of encryption. Status 1
/// is a non-fatal warning and does not block success, even if a password
/// was supplied — rejecting a correct password because of an unrelated
/// warning is exactly the second of the two bugs this function fixes.
fn classify_extract_result(status: i32, password_likely: bool, had_password: bool) -> ExtractOutcome {
    if password_likely {
        return ExtractOutcome::PasswordRequired;
    }
    match status {
        0 | 1 => ExtractOutcome::Ok,
        2 if had_password => ExtractOutcome::PasswordRequired,
        _ => ExtractOutcome::Failed(status),
    }
}

/// Runs a 7z command, returning `(exit_status, password_likely)`.
/// `password_likely` is true if the archive prompted for a password or 7z's
/// own output mentioned "password"/"encrypted" during this specific call.
fn call_7z(args: &[String]) -> Result<(i32, bool), JsValue> {
    let arr = Array::new();
    for a in args {
        arr.push(&JsValue::from_str(a));
    }
    let result = sz_call_main(arr)?;
    let status = result.get(0).as_f64().unwrap_or(0.0) as i32;
    let password_likely = result.get(1).as_f64().unwrap_or(0.0) != 0.0;
    Ok((status, password_likely))
}

fn password_required_error() -> JsValue {
    let err = js_sys::Error::new("PASSWORD_REQUIRED");
    err.set_name("PasswordRequiredError");
    err.into()
}

/// Strips `root/` from `full_path`, returning the path relative to `root`.
/// Falls back to the full path if `full_path` doesn't actually start with
/// `root/` (shouldn't happen given how callers construct these paths, but
/// avoids a panic if it ever does).
fn relative_name(full_path: &str, root: &str) -> String {
    full_path
        .strip_prefix(&format!("{root}/"))
        .unwrap_or(full_path)
        .to_string()
}

/// Recursively walks a virtual-FS directory, returning every regular file
/// found beneath it with a path relative to `root`.
fn get_files_recursively(dir: &str, root: &str) -> Vec<ExtractedFile> {
    let mut results = Vec::new();
    for entry in sz_read_dir(dir).iter() {
        let Some(entry) = entry.as_string() else {
            continue;
        };
        let full_path = format!("{dir}/{entry}");
        if sz_is_dir_path(&full_path) {
            results.extend(get_files_recursively(&full_path, root));
        } else {
            let data = sz_read_file(&full_path);
            let name = relative_name(&full_path, root);
            results.push(ExtractedFile { name, data });
        }
    }
    results
}

/// True if `files` is exactly one entry whose name ends in `.tar`
/// (case-insensitive) — the signal that a further unwrap pass is needed
/// (e.g. `archive.tar.gz` first unwraps its gzip layer, leaving a lone
/// `.tar` still to unpack).
fn is_single_bare_tar(files: &[ExtractedFile]) -> bool {
    files.len() == 1 && files[0].name.to_lowercase().ends_with(".tar")
}

/// Builds the 7z extraction command-line args. `password` (already filtered
/// to non-empty) only appends `-p{pw}` when present.
fn build_extract_args(file_name: &str, extract_dir: &str, password: Option<&str>) -> Vec<String> {
    let mut args = vec![
        "x".to_string(),
        file_name.to_string(),
        format!("-o{extract_dir}"),
        "-y".to_string(),
    ];
    if let Some(pw) = password {
        args.push(format!("-p{pw}"));
    }
    args
}

/// Extracts a 7z/zip/rar/tar(.gz) archive entirely in-browser. Automatically
/// performs a second extraction pass if the result is a single bare `.tar`
/// (e.g. `archive.tar.gz` first unwraps the gzip layer, leaving a `.tar` to
/// unpack). Rejects with a `PasswordRequiredError` (name) if the archive is
/// encrypted and no/incorrect password was supplied — callers should prompt
/// and retry.
#[wasm_bindgen]
pub async fn extract_archive(
    data: Vec<u8>,
    file_name: String,
    password: Option<String>,
    on_log: Option<Function>,
) -> Result<JsValue, JsValue> {
    init_sz(on_log).await?;

    let extract_dir = format!("/extract_{}", js_sys::Date::now() as u64);
    sz_unlink(&file_name);
    sz_mkdir_tree(&extract_dir);
    sz_write_file(&file_name, &data);

    let pw = password.as_deref().filter(|p| !p.is_empty());
    let had_password = pw.is_some();
    let args = build_extract_args(&file_name, &extract_dir, pw);

    // A wrong (as opposed to missing) password is unreliable to detect from
    // the exit status alone: 7-Zip sometimes exits 0 even when a per-file
    // decrypt failed (surfacing only as "Wrong password" in its text report,
    // e.g. for a single-file ZIP), and other times throws an opaque,
    // non-ExitStatus WASM exception instead of a clean exit code. So
    // `password_likely` (from that text report, or the archive prompting for
    // stdin) is checked unconditionally, before looking at `status` at all —
    // see `classify_extract_result` for the full decision.
    let (status, password_likely) = match call_7z(&args) {
        Ok(v) => v,
        Err(e) => {
            sz_unlink(&file_name);
            if had_password {
                return Err(password_required_error());
            }
            return Err(e);
        }
    };
    match classify_extract_result(status, password_likely, had_password) {
        ExtractOutcome::PasswordRequired => {
            sz_unlink(&file_name);
            return Err(password_required_error());
        }
        ExtractOutcome::Failed(status) => {
            sz_unlink(&file_name);
            return Err(JsValue::from_str(&format!(
                "Extraction failed with exit status {status}"
            )));
        }
        ExtractOutcome::Ok => {}
    }

    let mut extracted = get_files_recursively(&extract_dir, &extract_dir);

    if is_single_bare_tar(&extracted) {
        let tar_path = format!("{extract_dir}/{}", extracted[0].name);
        let second_dir = format!("{extract_dir}_final");
        sz_mkdir_tree(&second_dir);
        let second_args = build_extract_args(&tar_path, &second_dir, None);
        let (status2, _) = call_7z(&second_args)?;
        if status2 != 0 {
            return Err(JsValue::from_str(&format!(
                "Extraction failed with exit status {status2}"
            )));
        }
        extracted = get_files_recursively(&second_dir, &second_dir);
    }

    sz_unlink(&file_name);

    serde_wasm_bindgen::to_value(&extracted).map_err(|e| JsValue::from_str(&e.to_string()))
}

/// The parent directory of `name` (as used in a virtual-FS path), or `None`
/// if `name` has no directory component.
fn parent_dir(name: &str) -> Option<&str> {
    let idx = name.rfind('/')?;
    let parent = &name[..idx];
    if parent.is_empty() {
        None
    } else {
        Some(parent)
    }
}

fn ensure_parent_dirs(name: &str) {
    if let Some(parent) = parent_dir(name) {
        sz_mkdir_tree(parent);
    }
}

/// Builds the 7z compression command-line args. `password` (already
/// filtered to non-empty) appends `-p{pw}`, and for `7z` format also enables
/// header encryption (`-mhe=on`, hides filenames) to match native 7-Zip UX.
fn build_compress_args(out_filename: &str, format: &str, password: Option<&str>, names: &[String]) -> Vec<String> {
    let mut args = vec!["a".to_string(), out_filename.to_string()];
    if let Some(pw) = password {
        args.push(format!("-p{pw}"));
        if format == "7z" {
            args.push("-mhe=on".to_string());
        }
    }
    args.extend(names.iter().cloned());
    args
}

/// Compresses a set of in-memory files into a `zip`/`7z`/`tar` archive.
/// `files` is a JS `Map<string, Uint8Array>` of relative path -> file bytes.
/// Password-protects the archive if `password` is set; for `7z`, also
/// enables header encryption (hides filenames) to match native 7-Zip UX.
#[wasm_bindgen]
pub async fn compress_files(
    files: Map,
    format: String,
    password: Option<String>,
    on_log: Option<Function>,
) -> Result<Vec<u8>, JsValue> {
    init_sz(on_log).await?;

    let out_filename = format!("output.{format}");
    sz_unlink(&out_filename);

    let mut written_names: Vec<String> = Vec::new();
    let mut write_err: Option<JsValue> = None;
    files.for_each(&mut |value, key| {
        if write_err.is_some() {
            return;
        }
        let Some(name) = key.as_string() else {
            write_err = Some(JsValue::from_str("File map keys must be strings"));
            return;
        };
        let bytes = Uint8Array::new(&value).to_vec();
        ensure_parent_dirs(&name);
        sz_write_file(&name, &bytes);
        written_names.push(name);
    });
    if let Some(e) = write_err {
        return Err(e);
    }

    let pw = password.as_deref().filter(|p| !p.is_empty());
    let args = build_compress_args(&out_filename, &format, pw, &written_names);

    let result = call_7z(&args);
    if let Err(e) = result {
        for n in &written_names {
            sz_unlink(n);
        }
        return Err(e);
    }
    let (status, _) = result.unwrap();
    if status != 0 {
        for n in &written_names {
            sz_unlink(n);
        }
        return Err(JsValue::from_str(&format!(
            "Compression failed with exit status {status}"
        )));
    }

    let compressed = sz_read_file(&out_filename);
    sz_unlink(&out_filename);
    for n in &written_names {
        sz_unlink(n);
    }

    Ok(compressed)
}

#[cfg(test)]
mod tests {
    use super::*;

    mod classify_extract_result_tests {
        use super::*;

        #[test]
        fn success_with_no_signals() {
            assert_eq!(classify_extract_result(0, false, false), ExtractOutcome::Ok);
        }

        #[test]
        fn warning_status_is_still_ok() {
            // regression test: a non-fatal warning must not be treated as a
            // failure, even if a password was supplied for this attempt.
            assert_eq!(classify_extract_result(1, false, false), ExtractOutcome::Ok);
            assert_eq!(classify_extract_result(1, false, true), ExtractOutcome::Ok);
        }

        #[test]
        fn fatal_error_with_no_password_signal_is_a_real_failure() {
            // regression test: status 2 alone (no password prompt/hint, no
            // password ever attempted) must not be misdiagnosed as
            // "password required" — it's 7-Zip's generic fatal error code
            // and covers corruption, unsupported formats, etc.
            assert_eq!(classify_extract_result(2, false, false), ExtractOutcome::Failed(2));
        }

        #[test]
        fn fatal_error_after_a_password_attempt_is_password_required() {
            assert_eq!(classify_extract_result(2, false, true), ExtractOutcome::PasswordRequired);
        }

        #[test]
        fn password_likely_wins_regardless_of_status() {
            assert_eq!(classify_extract_result(0, true, false), ExtractOutcome::PasswordRequired);
            assert_eq!(classify_extract_result(1, true, false), ExtractOutcome::PasswordRequired);
            assert_eq!(classify_extract_result(2, true, false), ExtractOutcome::PasswordRequired);
        }

        #[test]
        fn other_fatal_statuses_are_failures() {
            assert_eq!(classify_extract_result(7, false, false), ExtractOutcome::Failed(7));
            assert_eq!(classify_extract_result(255, false, true), ExtractOutcome::Failed(255));
        }
    }

    mod relative_name_tests {
        use super::*;

        #[test]
        fn strips_root_prefix() {
            assert_eq!(relative_name("/extract_1/folder/file.txt", "/extract_1"), "folder/file.txt");
        }

        #[test]
        fn top_level_file() {
            assert_eq!(relative_name("/extract_1/file.txt", "/extract_1"), "file.txt");
        }

        #[test]
        fn falls_back_to_full_path_when_prefix_absent() {
            assert_eq!(relative_name("/other/file.txt", "/extract_1"), "/other/file.txt");
        }
    }

    mod is_single_bare_tar_tests {
        use super::*;

        fn file(name: &str) -> ExtractedFile {
            ExtractedFile { name: name.to_string(), data: vec![] }
        }

        #[test]
        fn single_tar_is_true() {
            assert!(is_single_bare_tar(&[file("archive.tar")]));
        }

        #[test]
        fn case_insensitive() {
            assert!(is_single_bare_tar(&[file("ARCHIVE.TAR")]));
        }

        #[test]
        fn single_non_tar_is_false() {
            assert!(!is_single_bare_tar(&[file("file.txt")]));
        }

        #[test]
        fn multiple_files_including_a_tar_is_false() {
            assert!(!is_single_bare_tar(&[file("archive.tar"), file("readme.txt")]));
        }

        #[test]
        fn empty_is_false() {
            assert!(!is_single_bare_tar(&[]));
        }
    }

    mod build_extract_args_tests {
        use super::*;

        #[test]
        fn no_password() {
            assert_eq!(
                build_extract_args("archive.zip", "/extract_1", None),
                vec!["x", "archive.zip", "-o/extract_1", "-y"]
            );
        }

        #[test]
        fn with_password() {
            assert_eq!(
                build_extract_args("archive.zip", "/extract_1", Some("secret")),
                vec!["x", "archive.zip", "-o/extract_1", "-y", "-psecret"]
            );
        }
    }

    mod build_compress_args_tests {
        use super::*;

        #[test]
        fn no_password() {
            let names = vec!["a.txt".to_string(), "b.txt".to_string()];
            assert_eq!(
                build_compress_args("output.zip", "zip", None, &names),
                vec!["a", "output.zip", "a.txt", "b.txt"]
            );
        }

        #[test]
        fn password_without_7z_format_has_no_header_encryption() {
            let names = vec!["a.txt".to_string()];
            assert_eq!(
                build_compress_args("output.zip", "zip", Some("secret"), &names),
                vec!["a", "output.zip", "-psecret", "a.txt"]
            );
        }

        #[test]
        fn password_with_7z_format_enables_header_encryption() {
            let names = vec!["a.txt".to_string()];
            assert_eq!(
                build_compress_args("output.7z", "7z", Some("secret"), &names),
                vec!["a", "output.7z", "-psecret", "-mhe=on", "a.txt"]
            );
        }
    }

    mod parent_dir_tests {
        use super::*;

        #[test]
        fn nested_path() {
            assert_eq!(parent_dir("folder/sub/file.txt"), Some("folder/sub"));
        }

        #[test]
        fn top_level_file_has_no_parent() {
            assert_eq!(parent_dir("file.txt"), None);
        }

        #[test]
        fn leading_slash_only_has_no_parent() {
            assert_eq!(parent_dir("/file.txt"), None);
        }
    }
}

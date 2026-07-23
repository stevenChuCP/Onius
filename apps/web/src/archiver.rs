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
            let name = full_path
                .strip_prefix(&format!("{root}/"))
                .unwrap_or(&full_path)
                .to_string();
            results.push(ExtractedFile { name, data });
        }
    }
    results
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

    let mut args = vec![
        "x".to_string(),
        file_name.clone(),
        format!("-o{extract_dir}"),
        "-y".to_string(),
    ];
    let had_password = password.as_deref().is_some_and(|p| !p.is_empty());
    if let Some(pw) = password.as_deref().filter(|p| !p.is_empty()) {
        args.push(format!("-p{pw}"));
    }

    // A wrong (as opposed to missing) password is unreliable to detect from
    // the exit status alone: 7-Zip sometimes exits 0 even when a per-file
    // decrypt failed (surfacing only as "Wrong password" in its text report,
    // e.g. for a single-file ZIP), and other times throws an opaque,
    // non-ExitStatus WASM exception instead of a clean exit code. So
    // `password_likely` (from that text report, or the archive prompting for
    // stdin) is checked unconditionally, before looking at `status` at all —
    // and if a password was already supplied for this attempt, any failure
    // is treated as "wrong password" regardless, since that's overwhelmingly
    // the likely cause once a password is in play.
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
    if password_likely || status == 2 || (had_password && status != 0) {
        sz_unlink(&file_name);
        return Err(password_required_error());
    }
    if status != 0 {
        sz_unlink(&file_name);
        return Err(JsValue::from_str(&format!(
            "Extraction failed with exit status {status}"
        )));
    }

    let mut extracted = get_files_recursively(&extract_dir, &extract_dir);

    if extracted.len() == 1 && extracted[0].name.to_lowercase().ends_with(".tar") {
        let tar_path = format!("{extract_dir}/{}", extracted[0].name);
        let second_dir = format!("{extract_dir}_final");
        sz_mkdir_tree(&second_dir);
        let second_args = vec![
            "x".to_string(),
            tar_path,
            format!("-o{second_dir}"),
            "-y".to_string(),
        ];
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

fn ensure_parent_dirs(name: &str) {
    if let Some(idx) = name.rfind('/') {
        let parent = &name[..idx];
        if !parent.is_empty() {
            sz_mkdir_tree(parent);
        }
    }
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

    let mut args = vec!["a".to_string(), out_filename.clone()];
    if let Some(pw) = password.as_deref().filter(|p| !p.is_empty()) {
        args.push(format!("-p{pw}"));
        if format == "7z" {
            args.push("-mhe=on".to_string());
        }
    }
    args.extend(written_names.iter().cloned());

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

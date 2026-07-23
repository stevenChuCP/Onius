// Thin bridge between the Rust/WASM archive orchestration (apps/web/src/lib.rs)
// and the vendored Emscripten 7-Zip build (apps/web/7z-wasm/7zz.es6.js). No
// business logic lives here — only Emscripten runtime primitives, translated
// into return values wasm-bindgen can consume directly (Emscripten signals
// exit codes via a thrown `ExitStatus`, which this file normalizes into a
// plain i32 return so Rust doesn't need to duck-type JS exception shapes).
//
// Root-absolute import: wasm-bindgen relocates this file into pkg/snippets/
// at build time, so a path relative to this file's own source location would
// not survive into the built output. `/7z-wasm/...` resolves against the
// project/site root instead (Vite treats root-absolute specifiers this way
// for any file outside `public/`), which is stable in dev, in the Vite
// build, and after deployment.
import SevenZip from '/7z-wasm/7zz.es6.js';
// The `.wasm` binary itself must be resolved through Vite's asset pipeline
// (`?url`), not hardcoded: the production build fingerprints/relocates it
// (e.g. to `/assets/7zz-<hash>.wasm`), so a literal `/7z-wasm/7zz.wasm` path
// only happens to work in dev.
import wasmUrl from '/7z-wasm/7zz.wasm?url';

let sz = null;
let stdinCalled = false;
let passwordHinted = false;
let userOnLog = null;

function checkPasswordHint(text) {
  const low = text.toLowerCase();
  if (low.includes('password') || low.includes('encrypted')) passwordHinted = true;
}

export async function initSevenZip(onLog) {
  userOnLog = onLog || null;
  const print = (text) => { checkPasswordHint(text); if (userOnLog) userOnLog(text + '\n'); };
  const printErr = (text) => { checkPasswordHint(text); if (userOnLog) userOnLog('ERROR: ' + text + '\n'); };

  if (!sz) {
    sz = await SevenZip({
      locateFile: (path) => (path.endsWith('.wasm') ? wasmUrl : path),
      print,
      printErr,
      stdin: () => { stdinCalled = true; return null; }
    });
  } else {
    sz.print = print;
    sz.printErr = printErr;
  }
  stdinCalled = false;
  passwordHinted = false;
}

// Runs a 7z command. Always returns [exitStatus, passwordLikely] rather than
// throwing: Emscripten signals a clean exit via a thrown `ExitStatus`, but a
// wrong (as opposed to missing) password often surfaces as an opaque, raw
// exception instead (a C++ exception value that escaped Emscripten's
// exception handling, not shaped like `ExitStatus`) — status -1 signals that
// case. Either way, passwordLikely (from the archive prompting for stdin, or
// 7z's own output mentioning "password"/"encrypted") must survive the
// exception path too, since it's the most reliable signal callers have.
export function szCallMain(args) {
  stdinCalled = false;
  passwordHinted = false;
  let status = 0;
  try {
    sz.callMain(args);
  } catch (e) {
    if (e && typeof e === 'object' && e.name === 'ExitStatus' && typeof e.status === 'number') {
      status = e.status;
    } else {
      status = -1;
    }
  }
  return [status, (passwordHinted || stdinCalled) ? 1 : 0];
}

export function szWriteFile(path, data) { sz.FS.writeFile(path, data); }
export function szReadFile(path) { return sz.FS.readFile(path); }
export function szReadDir(path) {
  return sz.FS.readdir(path).filter((e) => e !== '.' && e !== '..');
}
export function szMkdirTree(path) { sz.FS.mkdirTree(path); }
export function szUnlink(path) { try { sz.FS.unlink(path); } catch (e) { /* not present */ } }
export function szIsDirPath(path) { return sz.FS.isDir(sz.FS.stat(path).mode); }

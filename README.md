# Onius

A performance-oriented, multi-format conversion toolset implemented in Rust. Onius provides a pure logic core library, a command-line interface, and a web application utilizing WebAssembly.

## Project Structure

- **`onius_core` (`core/`)**: The "Brain" of the project. A pure Rust library containing all conversion logic (Base64, Base64URL, Hex), modularized for performance and maintainability.
- **`apps/cli`**: A command-line application for fast, terminal-based conversions.
- **`apps/web`**: A modern web interface that runs the core logic at near-native speeds via WebAssembly.

## Features

### 1. Base64 Converter
High-speed conversion powered natively by Rust/WASM.
- **Multi-Format Support**: Plain Text, Standard Base64, Base64URL, Hexadecimal.
- **File Drops**: Converts dropped files natively into Base64 formats.
- **Live Conversion**: Real-time logic updates instantly as you type.

### 2. Archive Toolkit
File extraction and compression performed completely client-side in your browser. Implemented in Rust/WASM, driving the vendored `7z-wasm` (Emscripten) engine.
- **Supported Formats**: `7z`, `zip`, `rar`, `tar`, `tar.gz`.
- **Extraction**: Instantly dump archive files into safe browser memory, or save straight to a folder via the File System Access API.
- **Compression**: Bundle multiple files into highly compressed singular `7z` or `zip` archives.
- **Symmetric Encryption**: Protect outputs utilizing 7-Zip's native AES-256 password protection protocols. No data is sent to external servers.

## Setup & Usage

### Development Environment

Onius is designed to be developed inside a consistent Docker environment.

1. **Start Environment**: Run the development script:
   ```bash
   ./run_dev.sh web
   ```
   This builds the `onius-dev` image, starts the container, and launches the Vite development server on `http://localhost:5173`.

2. **Rebuild WASM**: If you modify the core or archive logic, rebuild the WebAssembly package:
   ```bash
   # Inside the container (or via docker exec)
   wasm-pack build apps/web --target web
   ```

## Testing

Rust unit tests (`core/` and `apps/web/src/`):
```bash
cargo test --workspace
```

JS unit tests (Vitest):
```bash
cd apps/web && npm run test:unit
```

End-to-end tests (Playwright, against a real production build):
```bash
cd apps/web && npm run test:e2e
```

Or run the JS suites together:
```bash
cd apps/web && npm test
```

## Building for Production

Onius uses a multi-stage Dockerfile to produce a slim, Nginx-based production image for the web application:

```bash
docker build --target production -t onius-web .
docker run -p 8080:80 onius-web
```

## Licensing

Onius is open-source software licensed under the [MIT License](LICENSE).

However, it incorporates several third-party components with their own licensing terms:

- **Core Logic**: MIT Licensed.
- **Archive Toolkit**: Built using `7z-wasm`, which utilizes 7-Zip (LGPL) and the unRAR utility.
- **unRAR**: Use of the RAR extraction logic is subject to the **unRAR License**, which prohibits using the source code to recreate the RAR compression algorithm. The full license text can be found in [licenses/unRaRLicense.txt](licenses/unRaRLicense.txt).

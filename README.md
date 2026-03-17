# Onius

A performance-oriented, multi-format conversion toolset implemented in Rust. Onius provides a pure logic core library, a command-line interface, and a web application utilizing WebAssembly.

## Project Structure

- **`onius_core` (`core/`)**: The "Brain" of the project. A pure Rust library containing all conversion logic (Base64, Base64URL, Hex), modularized for performance and maintainability.
- **`apps/cli`**: A command-line application for fast, terminal-based conversions.
- **`apps/web`**: A modern web interface that runs the core logic at near-native speeds via WebAssembly.

## Features

- **Multi-Format Support**:
  - Plain Text
  - Standard Base64
  - URL-Safe Base64 (Base64URL)
  - Hexadecimal
- **Live Conversion**: Real-time conversion as you type in the web interface.

## Setup & Usage

### Development Environment

Onius is designed to be developed inside a consistent Docker environment.

1. **Start Environment**: Run the development script:
   ```bash
   ./run_dev.sh
   ```
   This builds the `onius-dev` image, starts the container, and launches the Vite development server on `http://localhost:5173`.

2. **Rebuild WASM**: If you modify the core logic, rebuild the WebAssembly package:
   ```bash
   # Inside the container (or via docker exec)
   wasm-pack build apps/web --target web
   ```

### Command Line Interface (CLI)

Inside the container terminal:

**Encode:**
```bash
cargo run -p onius_cli -- encode "hello"
```

**Decode:**
```bash
cargo run -p onius_cli -- decode "aGVsbG8="
```

## Building for Production

Onius uses a multi-stage Dockerfile to produce a slim, Nginx-based production image for the web application:

```bash
docker build -t onius-web .
docker run -p 8080:80 onius-web
```

## TODO

- [ ] License
- [ ] SEO
- [ ] Ads
# Base64 Tool (Rust)

A Base64 encoding/decoding tool implemented in Rust, designed for CLI usage and development within an isolated Docker environment.

## Project Structure

- **`b64_core` (`core/`)**: A library crate containing the core encoding/decoding logic.
- **`cli` (`cli/`)**: A binary crate providing the command-line interface.
- **Docker Integration**: A `Dockerfile` and `run_dev.sh` script for a consistent development environment.

## Setup & Usage

To start developing or using the tool:

1. **Prerequisites**: Ensure Docker is installed and running.
2. **Start Environment**: Run the development script:
   ```bash
   ./run_dev.sh
   ```
   This builds the Docker image and drops you into a shell inside the container.

3. **Run Commands**: Inside the container, you can run cargo commands:

   **Run Tests:**
   ```bash
   cargo test
   ```

   **Encode:**
   ```bash
   cargo run --bin cli -- encode "hello"
   # Output: aGVsbG8=
   ```

   **Decode:**
   ```bash
   cargo run --bin cli -- decode "aGVsbG8="
   # Output: hello
   ```

## Development Details

### Core Logic (`core/src/lib.rs`)
Exposes `encode` and `decode` functions using the `base64` crate.

### CLI Interface (`cli/src/main.rs`)
Command-line interface built with `clap`, supporting `encode` and `decode` subcommands.

## TODO

- [ ] License
- [ ] SEO
- [ ] Ads
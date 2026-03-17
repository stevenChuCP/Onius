# Development Environment

The development environment for this project **MUST** be run inside the provided development container.

## Reasons
1. **Tooling Consistency**: The project requires specific versions of Rust, Node.js, and WASM-related tools (like `wasm-pack`).
2. **Environment Setup**: The container is pre-configured with all necessary environment variables and system dependencies.
3. **Execution**: Running commands (like `npm install` or `cargo build`) outside the container may fail due to missing dependencies in the host environment.

## Getting Started
To use the development container, you should run the provided script: `./run_dev.sh`.

The script will build the Docker image (if needed) and start the development server within the container, mapping port 5173 to your host.

## Execution
All commands (like `npm install`, `wasm-pack build`, or `npm run dev`) should be executed within this container environment. If you are not in the container, use `docker run` or the `run_dev.sh` script to ensure you have the correct toolchains.

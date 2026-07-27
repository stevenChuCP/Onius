#!/bin/bash
set -e

IMAGE_NAME="onius-dev"
MODE="${1:-shell}"

# Build the image targeting the development stage
docker build --target development -t "$IMAGE_NAME" .

# Run the container synchronously, mounting the current directory
# but shadowing the node_modules so native binaries will not be corrupted
# between docker containers and host's.
RUN_ARGS=(
    -it --rm
    -v "$(pwd)":/app
    -v /app/apps/web/node_modules
    -p 5173:5173
    -p 4173:4173
    --name onius-dev-container
)

if [ "$MODE" = "web" ]; then
    # ./run_dev.sh web — starts the dev server immediately.
    docker run "${RUN_ARGS[@]}" "$IMAGE_NAME"
else
    # ./run_dev.sh (default) — drops into an interactive shell instead of
    # auto-starting the dev server, so you choose what to run first (dev
    # server, tests, preview).
    docker run "${RUN_ARGS[@]}" "$IMAGE_NAME" bash
fi

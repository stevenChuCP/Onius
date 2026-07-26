#!/bin/bash
set -e

IMAGE_NAME="onius-dev"

# Build the image targeting the development stage
docker build --target development -t "$IMAGE_NAME" .

# Run the container synchronously, mounting the current directory
# but shadowing the node_modules so native binaries will not be corrupted
# between docker containers and host's.
docker run -it --rm \
    -v "$(pwd)":/app \
    -v /app/apps/web/node_modules \
    -p 5173:5173 \
    --name onius-dev-container \
    "$IMAGE_NAME"

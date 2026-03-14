#!/bin/bash
set -e

IMAGE_NAME="rust-b64-dev"

# Build the image targeting the development stage
docker build --target development -t "$IMAGE_NAME" .

# Run the container synchronously, mounting the current directory
# We use --rm to clean up after exit
# We run interactively (-it)
docker run -it --rm \
    -v "$(pwd)":/app \
    -p 5173:5173 \
    --name rust-b64-dev-container \
    "$IMAGE_NAME"

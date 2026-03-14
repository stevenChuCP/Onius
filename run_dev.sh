#!/bin/bash
set -e

IMAGE_NAME="onius-dev"

# Build the image targeting the development stage
docker build --target development -t "$IMAGE_NAME" .

# Run the container synchronously, mounting the current directory
# We use --rm to clean up after exit
# We run interactively (-it)
docker run -it --rm \
    -v "$(pwd)":/app \
    -p 5173:5173 \
    --name onius-dev-container \
    "$IMAGE_NAME"

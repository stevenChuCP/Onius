# --- STAGE 1: WASM Builder (Rust) ---
FROM rust:latest AS wasm-builder
WORKDIR /app
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
# Note: These directories will be created in the next steps
COPY ./core ./core
COPY ./wasm ./wasm
RUN wasm-pack build wasm --target web

# --- STAGE 2: Web Builder (Node) ---
FROM node:24 AS web-builder
WORKDIR /app/web
COPY ./web/package*.json ./
RUN npm install
COPY ./web ./
COPY --from=wasm-builder /app/wasm/pkg ../wasm/pkg
RUN npm run build

# --- STAGE 3: Production (Nginx) ---
FROM nginx:stable-alpine AS production
COPY --from=web-builder /app/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# --- STAGE 4: Development Environment (Unified) ---
# We still need a unified image for interactive dev where both toolchains coexist.
FROM rust:latest AS development
WORKDIR /app
RUN apt-get update && apt-get install -y \
    git vim curl \
    && curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
RUN mkdir -p /usr/local/cargo/registry
CMD ["/bin/bash"]

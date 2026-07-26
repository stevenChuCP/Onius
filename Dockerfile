# --- STAGE 1: WASM Builder (Rust) ---
FROM rust:latest AS wasm-builder
WORKDIR /app
COPY core ./core
COPY apps/web ./apps/web
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh && \
    wasm-pack build apps/web --target web

# --- STAGE 2: Web Builder (Node) ---
FROM node:24 AS web-builder
WORKDIR /app
COPY apps/web ./apps/web
COPY --from=wasm-builder /app/apps/web/pkg ./apps/web/pkg
WORKDIR /app/apps/web
RUN npm install && npm run build

# --- STAGE 3: Production (Nginx) ---
FROM nginx:stable-alpine AS production
COPY --from=web-builder /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# --- STAGE 4: Development Environment (Unified) ---
# We still need a unified image for interactive dev where both toolchains coexist.
FROM rust:latest AS development
WORKDIR /app
RUN apt-get update && apt-get install -y git vim curl && \
    curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y nodejs && \
    curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
COPY . .
WORKDIR /app/apps/web
RUN npm install
# Baked in at build time so test runs don't re-download the browser + its
# system libraries (mesa/X11/NSS/etc.) on every fresh container.
RUN npx playwright install --with-deps chromium
CMD ["npm", "run", "dev"]

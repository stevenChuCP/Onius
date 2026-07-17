import { defineConfig } from 'vite';
import { resolve } from 'path';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
    // Root-served (custom domain via CNAME, or nginx at "/" in Docker) — the
    // UI itself references css/js/components/pkg via root-absolute paths
    // (e.g. "/css/style.css"), so the base must be "/".
    base: '/',
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                base64: resolve(__dirname, 'base64.html'),
                archiver: resolve(__dirname, 'archiver.html')
            }
        }
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        fs: {
            allow: ['../..']
        }
    }
});

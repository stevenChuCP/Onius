import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

const { version } = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

export default defineConfig({
    // Root-served (custom domain via CNAME, or nginx at "/" in Docker) — the
    // UI itself references css/js/components/pkg via root-absolute paths
    // (e.g. "/css/style.css"), so the base must be "/".
    base: '/',
    // Only takes effect during `vite build` (Vite intentionally skips `define`
    // substitution for regular client code in dev). That's fine here — the
    // only consumer, sw.js, is never loaded in dev (see js/pwa.js).
    define: {
        __APP_VERSION__: JSON.stringify(version)
    },
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                base64: resolve(__dirname, 'base64.html'),
                archiver: resolve(__dirname, 'archiver.html'),
                // sw.js must be a real build entry (not a public/ passthrough
                // file) so its __APP_VERSION__ reference gets substituted by
                // the `define` above at build time.
                sw: resolve(__dirname, 'sw.js')
            },
            output: {
                entryFileNames: (chunk) => chunk.name === 'sw' ? 'sw.js' : 'assets/[name]-[hash].js'
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

import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
    // Tell Vite where to find the app.
    // If you are deploying to GitHub Pages, vite will set path to '/Onius/',
    // else it will set path to '/'.
    // This is used for both development and production.
    base: process.env.GITHUB_PAGES ? '/Onius/' : '/',
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        fs: {
            allow: ['../..']
        }
    }
});

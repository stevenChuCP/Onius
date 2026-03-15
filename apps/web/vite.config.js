import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
    // Use relative paths so the app works on both custom domains (root) 
    // and GitHub Pages subfolders (/Onius/).
    base: '',
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

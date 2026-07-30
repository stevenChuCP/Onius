import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

// Deliberately separate from vite.config.js: the build config's multi-entry
// rollupOptions and __APP_VERSION__ define aren't relevant to unit tests,
// and mixing them risks the wasm/top-level-await plugins interfering with
// Vitest's own transform pipeline.
export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ['js/**/*.test.js']
    },
    resolve: {
        alias: {
            // /pkg/onius_wasm.js only exists after `wasm-pack build`, which
            // the unit-test job never runs — alias it to an always-present
            // stub so Vite's import resolution succeeds in a fresh checkout,
            // regardless of whether the real pkg/ has been built locally.
            '/pkg/onius_wasm.js': resolve(__dirname, 'tests/mocks/onius_wasm.js')
        }
    }
});

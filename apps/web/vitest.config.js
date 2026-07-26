import { defineConfig } from 'vitest/config';

// Deliberately separate from vite.config.js: the build config's multi-entry
// rollupOptions and __APP_VERSION__ define aren't relevant to unit tests,
// and mixing them risks the wasm/top-level-await plugins interfering with
// Vitest's own transform pipeline.
export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ['js/**/*.test.js']
    }
});

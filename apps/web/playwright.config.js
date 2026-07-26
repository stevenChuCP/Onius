import { defineConfig } from '@playwright/test';

// Always runs against a real production build (`vite preview`), not `vite
// dev`: the service-worker suite specifically requires it (registration is
// skipped in dev, see js/pwa.js), and it exercises the real content-hashed
// pkg/onius_wasm* / assets/* paths rather than dev-server unbundled modules.
export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    reporter: 'list',
    use: {
        baseURL: 'http://localhost:4173',
        trace: 'retain-on-failure'
    },
    webServer: {
        command: 'npm run build && npm run preview -- --port 4173',
        url: 'http://localhost:4173',
        reuseExistingServer: !process.env.CI,
        timeout: 120000
    }
});

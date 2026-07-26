import { test, expect } from '@playwright/test';

// Regression test for the sw.js STATIC_ASSETS bug: it used to list dev-mode
// source paths that Vite's production build content-hashes away, so
// cache.addAll() 404'd on the first one and the whole install() rejected —
// this asserts the service worker actually reaches the "activated" state
// against the real production build, not just that registration resolved.
test('service worker installs and activates against the production build', async ({ page }) => {
  await page.goto('/');

  const result = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.ready;
    const cacheNames = await caches.keys();
    const cache = await caches.open(cacheNames[0]);
    const cachedUrls = (await cache.keys()).map((r) => new URL(r.url).pathname);
    return {
      state: reg.active ? reg.active.state : null,
      cachedUrls: cachedUrls.sort()
    };
  });

  expect(result.state).toBe('activated');
  expect(result.cachedUrls).toEqual(expect.arrayContaining([
    '/',
    '/index.html',
    '/base64.html',
    '/archiver.html',
    '/css/style.css',
    '/js/config.js',
    '/manifest.webmanifest'
  ]));
});

test('visiting a tool page opportunistically caches its hashed JS/WASM chunks', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.goto('/base64.html', { waitUntil: 'networkidle' });

  const hashedAssets = await page.evaluate(async () => {
    const cacheNames = await caches.keys();
    const cache = await caches.open(cacheNames[0]);
    const urls = (await cache.keys()).map((r) => new URL(r.url).pathname);
    return urls.filter((u) => u.includes('/assets/'));
  });

  expect(hashedAssets.length).toBeGreaterThan(0);
});

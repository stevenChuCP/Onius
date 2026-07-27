import { test, expect } from '@playwright/test';

// Real browsers only fire `beforeinstallprompt` based on their own
// engagement heuristics (install/dismissal history, HTTPS, etc.), and
// Firefox/Safari don't implement it at all — so relying on the real event
// firing during a test run would be non-deterministic and browser-specific.
// Dispatching a synthetic event with the same shape (preventDefault-able,
// .prompt(), .userChoice) tests exactly what's actually under our control:
// js/pwa.js's initInstallPrompt() listener and the button's visibility
// toggling in public/components/sidebar.html — not Chrome's own heuristics.
test.describe('install prompt', () => {
  test('install button starts hidden', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#main-sidebar');
    await expect(page.locator('.install-app-btn')).toBeHidden();
  });

  test('becomes visible on beforeinstallprompt, clicking calls prompt() and hides the button again', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#main-sidebar');

    const result = await page.evaluate(() => {
      return new Promise((resolve) => {
        let promptWasCalled = false;
        const fakeEvent = new Event('beforeinstallprompt', { cancelable: true });
        fakeEvent.prompt = () => { promptWasCalled = true; };
        fakeEvent.userChoice = Promise.resolve({ outcome: 'accepted' });
        window.dispatchEvent(fakeEvent);

        setTimeout(() => {
          const btn = document.querySelector('.install-app-btn');
          const visibleAfterEvent = !btn.classList.contains('hidden');
          btn.click();
          setTimeout(() => {
            resolve({
              visibleAfterEvent,
              promptWasCalled,
              hiddenAfterClick: btn.classList.contains('hidden')
            });
          }, 100);
        }, 100);
      });
    });

    expect(result.visibleAfterEvent).toBe(true);
    expect(result.promptWasCalled).toBe(true);
    expect(result.hiddenAfterClick).toBe(true);
  });

  test('appinstalled hides the button', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#main-sidebar');

    const hiddenAfterInstall = await page.evaluate(() => {
      return new Promise((resolve) => {
        const fakeBeforeInstall = new Event('beforeinstallprompt', { cancelable: true });
        fakeBeforeInstall.prompt = () => {};
        fakeBeforeInstall.userChoice = Promise.resolve({ outcome: 'accepted' });
        window.dispatchEvent(fakeBeforeInstall);

        setTimeout(() => {
          window.dispatchEvent(new Event('appinstalled'));
          setTimeout(() => {
            const btn = document.querySelector('.install-app-btn');
            resolve(btn.classList.contains('hidden'));
          }, 100);
        }, 100);
      });
    });

    expect(hiddenAfterInstall).toBe(true);
  });
});

import { test, expect } from '@playwright/test';

test.describe('base64 converter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/base64.html');
    await page.waitForSelector('#input-text');
  });

  test('text to base64', async ({ page }) => {
    await page.fill('#input-text', 'hello world');
    await expect(page.locator('#output-text')).toHaveValue('aGVsbG8gd29ybGQ=');
  });

  test('format pills: text to hex', async ({ page }) => {
    await page.fill('#input-text', 'hello world');
    await page.click('.format-pill[data-group="to"][data-format="hex"]');
    await expect(page.locator('#output-text')).toHaveValue('68656c6c6f20776f726c64');
  });

  test('swap button exchanges from/to format selection and carries the output over as the new input', async ({ page }) => {
    await page.fill('#input-text', 'hello');
    await expect(page.locator('#output-text')).toHaveValue('aGVsbG8=');

    await page.click('#swap-btn');
    await expect(page.locator('.format-pill[data-group="from"].active')).toHaveAttribute('data-format', 'base64');
    await expect(page.locator('.format-pill[data-group="to"].active')).toHaveAttribute('data-format', 'text');
    await expect(page.locator('#input-text')).toHaveValue('aGVsbG8=');
    await expect(page.locator('#output-text')).toHaveValue('hello');
  });

  test('swap button clears the input instead of carrying over an error message', async ({ page }) => {
    await page.click('.format-pill[data-group="from"][data-format="base64"]');
    await page.fill('#input-text', 'not valid base64!!!');
    await expect(page.locator('#output-text')).toHaveValue(/^Error:/);

    await page.click('#swap-btn');
    await expect(page.locator('#input-text')).toHaveValue('');
  });

  test('invalid input shows an error instead of throwing', async ({ page }) => {
    await page.click('.format-pill[data-group="from"][data-format="base64"]');
    await page.fill('#input-text', 'not valid base64!!!');
    await expect(page.locator('#output-text')).toHaveValue(/^Error:/);
  });

  test('dropping a non-image file onto the textarea loads it as hex bytes', async ({ page }) => {
    await page.click('.format-pill[data-group="from"][data-format="hex"]');
    const result = await page.evaluate(async () => {
      const file = new File([new Uint8Array([0xde, 0xad, 0xbe, 0xef])], 'test.bin', { type: 'application/octet-stream' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('input-text');
      const ev = new DragEvent('drop', { bubbles: true, cancelable: true });
      Object.defineProperty(ev, 'dataTransfer', { value: dt });
      input.dispatchEvent(ev);
      await new Promise((r) => setTimeout(r, 300));
      return input.value;
    });
    expect(result).toBe('deadbeef');
  });

  test('dropping a non-image file onto the textarea loads it as plain text for the text format', async ({ page }) => {
    const result = await page.evaluate(async () => {
      const file = new File(['hello from a file'], 'test.txt', { type: 'text/plain' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('input-text');
      const ev = new DragEvent('drop', { bubbles: true, cancelable: true });
      Object.defineProperty(ev, 'dataTransfer', { value: dt });
      input.dispatchEvent(ev);
      await new Promise((r) => setTimeout(r, 300));
      return input.value;
    });
    expect(result).toBe('hello from a file');
  });

  test('dropping an image file onto the textarea switches to image mode', async ({ page }) => {
    await page.evaluate(async () => {
      // 1x1 transparent PNG
      const pngBytes = Uint8Array.from(atob(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
      ), (c) => c.charCodeAt(0));
      const file = new File([pngBytes], 'pixel.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const input = document.getElementById('input-text');
      const ev = new DragEvent('drop', { bubbles: true, cancelable: true });
      Object.defineProperty(ev, 'dataTransfer', { value: dt });
      input.dispatchEvent(ev);
    });
    await expect(page.locator('.format-pill[data-group="from"].active')).toHaveAttribute('data-format', 'image');
    await expect(page.locator('#image-upload-area')).toBeVisible();
  });
});

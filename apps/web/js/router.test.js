import { describe, it, expect } from 'vitest';

// router.js transitively imports js/pages/base64.js and js/pages/archiver.js,
// both of which import /pkg/onius_wasm.js — a real path only produced by
// `wasm-pack build`, not present in a fresh checkout. vitest.config.js
// aliases it to tests/mocks/onius_wasm.js, an always-present stub, so this
// whole module graph evaluates cleanly with no per-test mocking needed here.
const { normalizePath, resolveRoute, isNavigableLink } = await import('./router.js');

describe('normalizePath', () => {
  it('maps the empty string to "/"', () => {
    expect(normalizePath('')).toBe('/');
  });

  it('leaves other paths unchanged', () => {
    expect(normalizePath('/base64.html')).toBe('/base64.html');
    expect(normalizePath('/archiver.html')).toBe('/archiver.html');
  });
});

describe('resolveRoute', () => {
  it('resolves the home route for "/" and ""', () => {
    expect(resolveRoute('/')).not.toBeNull();
    expect(resolveRoute('')).toBe(resolveRoute('/'));
  });

  it('resolves /index.html to the same page module as "/"', () => {
    expect(resolveRoute('/index.html')).toBe(resolveRoute('/'));
  });

  it('resolves /base64.html and /archiver.html to distinct modules', () => {
    const base64 = resolveRoute('/base64.html');
    const archiver = resolveRoute('/archiver.html');
    expect(base64).not.toBeNull();
    expect(archiver).not.toBeNull();
    expect(base64).not.toBe(archiver);
  });

  it('returns null for an unknown path', () => {
    expect(resolveRoute('/does-not-exist.html')).toBeNull();
  });
});

describe('isNavigableLink', () => {
  function link(href, attrs = {}) {
    const a = document.createElement('a');
    a.href = href;
    for (const [k, v] of Object.entries(attrs)) a.setAttribute(k, v);
    return a;
  }

  it('returns false for null', () => {
    expect(isNavigableLink(null)).toBe(false);
  });

  it('returns true for a same-origin, routable link', () => {
    expect(isNavigableLink(link('/base64.html'))).toBe(true);
  });

  it('returns false for a same-origin link to an unroutable path', () => {
    expect(isNavigableLink(link('/does-not-exist.html'))).toBe(false);
  });

  it('returns false for a cross-origin link', () => {
    expect(isNavigableLink(link('https://example.com/base64.html'))).toBe(false);
  });

  it('returns false for target="_blank"', () => {
    expect(isNavigableLink(link('/base64.html', { target: '_blank' }))).toBe(false);
  });

  it('returns true for target="_self"', () => {
    expect(isNavigableLink(link('/base64.html', { target: '_self' }))).toBe(true);
  });

  it('returns false for a download link', () => {
    expect(isNavigableLink(link('/base64.html', { download: '' }))).toBe(false);
  });
});

import { describe, it, expect, afterEach } from 'vitest';
import { t, translateCategory, formatToolsOverlaySubtitle, getLang, setLang } from './i18n.js';

afterEach(() => {
  // module-level currentLang persists across tests in this file — reset so
  // tests don't depend on execution order.
  setLang('en');
});

describe('i18n.js', () => {
  it('t() returns the translation for a known key', () => {
    expect(t('nav.home')).toBe('Home');
  });

  it('t() falls back to the key itself when missing from every language', () => {
    expect(t('this.key.does.not.exist')).toBe('this.key.does.not.exist');
  });

  it('translateCategory prefixes with "category."', () => {
    expect(translateCategory('Archiving')).toBe('Archiving');
  });

  it('getLang defaults to "en" with nothing stored', () => {
    expect(getLang()).toBe('en');
  });

  it('setLang switches the active language and t() reflects it', () => {
    setLang('zh-TW');
    expect(getLang()).toBe('zh-TW');
    expect(t('nav.home')).toBe('首頁');
  });

  it('setLang ignores unsupported language codes', () => {
    setLang('fr');
    expect(getLang()).toBe('en');
  });

  it('formatToolsOverlaySubtitle formats in English by default', () => {
    expect(formatToolsOverlaySubtitle(3, 5)).toBe('3 ready to use · 5 on the way');
  });

  it('formatToolsOverlaySubtitle formats in Chinese after setLang', () => {
    setLang('zh-TW');
    expect(formatToolsOverlaySubtitle(3, 5)).toBe('3 項可立即使用 · 5 項即將推出');
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { trackVisit, getRecentTools, clearRecent } from './recent.js';

beforeEach(() => {
  localStorage.clear();
});

describe('recent.js', () => {
  it('getRecentTools returns [] when nothing stored', () => {
    expect(getRecentTools()).toEqual([]);
  });

  it('trackVisit records a tool and getRecentTools returns it', () => {
    trackVisit('Base64 Converter', 'b64-icon', '/base64.html', 'base64');
    const tools = getRecentTools();
    expect(tools).toHaveLength(1);
    expect(tools[0]).toMatchObject({ name: 'Base64 Converter', icon: 'b64-icon', slug: '/base64.html', key: 'base64' });
  });

  it('re-visiting the same slug dedupes and moves it to the front', () => {
    trackVisit('Base64 Converter', 'b64-icon', '/base64.html', 'base64');
    trackVisit('Archive Manager', 'inventory_2', '/archiver.html', 'archiver');
    trackVisit('Base64 Converter', 'b64-icon', '/base64.html', 'base64');

    const tools = getRecentTools();
    expect(tools).toHaveLength(2);
    expect(tools[0].slug).toBe('/base64.html');
    expect(tools[1].slug).toBe('/archiver.html');
  });

  it('truncates to the 8 most recent items', () => {
    for (let i = 0; i < 10; i++) {
      trackVisit('Tool ' + i, 'icon', '/tool-' + i + '.html', 'tool' + i);
    }
    const tools = getRecentTools();
    expect(tools).toHaveLength(8);
    // most recently tracked (tool9) should be first
    expect(tools[0].slug).toBe('/tool-9.html');
    expect(tools[7].slug).toBe('/tool-2.html');
  });

  it('getRecentTools falls back to [] on corrupt (non-array) JSON', () => {
    localStorage.setItem('onius_recent', JSON.stringify({ not: 'an array' }));
    expect(getRecentTools()).toEqual([]);
  });

  it('getRecentTools falls back to [] on unparsable JSON', () => {
    localStorage.setItem('onius_recent', 'not json at all {{{');
    expect(getRecentTools()).toEqual([]);
  });

  it('clearRecent empties the stored list', () => {
    trackVisit('Base64 Converter', 'b64-icon', '/base64.html', 'base64');
    clearRecent();
    expect(getRecentTools()).toEqual([]);
  });

  it('trackVisit does not throw if localStorage.setItem throws', () => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = () => { throw new Error('quota exceeded'); };
    try {
      expect(() => trackVisit('X', 'icon', '/x.html', 'x')).not.toThrow();
    } finally {
      Storage.prototype.setItem = original;
    }
  });
});

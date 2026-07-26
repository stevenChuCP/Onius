import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockWasmConvert = vi.fn();

vi.mock('/pkg/onius_wasm.js', () => ({
  default: () => Promise.resolve(),
  convert: (...args) => mockWasmConvert(...args)
}));

const base64Module = await import('./base64.js');
const { convert, switchFormat, swapFormats } = base64Module;

beforeEach(() => {
  mockWasmConvert.mockReset();
  switchFormat('from', 'text');
  switchFormat('to', 'base64');
});

describe('switchFormat / swapFormats', () => {
  it('switchFormat updates fromFormat and toFormat independently', () => {
    switchFormat('from', 'hex');
    expect(base64Module.fromFormat).toBe('hex');
    expect(base64Module.toFormat).toBe('base64');
  });

  it('swapFormats exchanges from and to', () => {
    switchFormat('from', 'hex');
    switchFormat('to', 'base64url');
    swapFormats();
    expect(base64Module.fromFormat).toBe('base64url');
    expect(base64Module.toFormat).toBe('hex');
  });
});

describe('convert', () => {
  it('maps UI format names to the wasm-side names ("text" -> "plain")', () => {
    mockWasmConvert.mockReturnValue('result');
    convert('hello', 'text', 'base64');
    expect(mockWasmConvert).toHaveBeenCalledWith('hello', 'plain', 'base64');
  });

  it('passes hex/base64/base64url through unchanged', () => {
    mockWasmConvert.mockReturnValue('result');
    convert('hello', 'hex', 'base64url');
    expect(mockWasmConvert).toHaveBeenCalledWith('hello', 'hex', 'base64url');
  });

  it('returns the wasm result on success', () => {
    mockWasmConvert.mockReturnValue('aGVsbG8=');
    expect(convert('hello', 'text', 'base64')).toBe('aGVsbG8=');
  });

  it('wraps a raw string thrown by wasm into an Error with .message', () => {
    mockWasmConvert.mockImplementation(() => { throw 'Unsupported input format: bogus'; });
    expect(() => convert('x', 'bogus', 'base64')).toThrowError('Unsupported input format: bogus');
  });

  it('passes through an Error-like object thrown by wasm, preserving .message', () => {
    mockWasmConvert.mockImplementation(() => { throw new Error('boom'); });
    expect(() => convert('x', 'text', 'base64')).toThrowError('boom');
  });

  it('falls back to String(e) for a thrown value with no message', () => {
    mockWasmConvert.mockImplementation(() => { throw { weird: 'object' }; });
    expect(() => convert('x', 'text', 'base64')).toThrowError('[object Object]');
  });
});

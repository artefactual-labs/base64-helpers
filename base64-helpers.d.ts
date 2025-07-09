export function encode(str: string): string;
export function decode(str: string): string;

declare const Base64: {
  encode: typeof encode;
  decode: typeof decode;
};

export default Base64;

export as namespace Base64;

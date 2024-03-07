import { expect, test } from 'vitest'
import Base64 from './base64-helpers'

test('encodes utf8', () => {
  expect(Base64.encode("/home/foobar")).toBe("L2hvbWUvZm9vYmFy")
  expect(Base64.encode("/home/Montréal")).toBe("L2hvbWUvTW9udHLDqWFs")
})
test('decodes utf8', () => {
  expect(Base64.decode("L2hvbWUvZm9vYmFy")).toBe("/home/foobar")
  expect(Base64.decode("L2hvbWUvTW9udHLDqWFs")).toBe("/home/Montréal")
})

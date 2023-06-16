const caesarCipher = require('./caesar-cipher');

test('abc to bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('xyz to zab', () => {
  expect(caesarCipher('xyz', 2)).toBe('zab');
});

test('xYZ to zAB', () => {
  expect(caesarCipher('xyz', 2)).toBe('zAB');
});

test('xYZ?!,. to zAB?!,.', () => {
  expect(caesarCipher('xyz', 2)).toBe('zAB?!,.');
});

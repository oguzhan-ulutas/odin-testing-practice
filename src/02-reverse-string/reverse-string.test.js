const reverseString = require('./reverse-string');

test('return the string reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

const reverseString = require('./reverseString');

test('return the string reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

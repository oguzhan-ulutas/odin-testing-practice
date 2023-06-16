const capitalize = require('./capitalize');

test('first character capitilazed', () => {
  expect(capitalize('hello')).toBe('H');
});

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toEqual(3);
});

test('subtracts 4 - 3 to equal 1', () => {
  expect(calculator.subtract(4, 3)).toEqual(1);
});

test('multiples 4 * 3 to equal 12', () => {
  expect(calculator.multiply(4, 3)).toEqual(12);
});

test('divides 4 / 2 to equal 2', () => {
  expect(calculator.multiply(4, 2)).toEqual(2);
});

test('divides 4 / 0 to equal error', () => {
  expect(calculator.multiply(4, 0)).toBe('Error: Division by zero is not allowed.');
});

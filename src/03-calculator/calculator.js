class Calculator {
  // Addition method
  sum(a, b) {
    return a + b;
  }

  // Subtraction method
  subtract(a, b) {
    return a - b;
  }

  // Multiplication method
  multiply(a, b) {
    return a * b;
  }

  // Division method
  divide(a, b) {
    if (b !== 0) {
      return a / b;
    }
    return 'Error: Division by zero is not allowed.';
  }
}

// Create a new instance of the Calculator class
const calculator = new Calculator();

module.exports = calculator;

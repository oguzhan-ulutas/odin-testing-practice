function analyzeArray(arr) {
  arr = arr.sort((a, b) => a - b);
  const { length } = arr;
  const max = arr[length - 1];
  const min = arr[0];
  const average = arr.reduce((accumulator, currentValue) => accumulator + currentValue) / length;
  return {
    length,
    max,
    min,
    average,
  };
}

module.exports = analyzeArray;

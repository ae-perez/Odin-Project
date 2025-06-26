const sumAll = function (num1, num2) {
  if (
    num1 < 1 ||
    !Number.isInteger(num1) ||
    num2 < 1 ||
    !Number.isInteger(num2)
  ) {
    return 'ERROR';
  }

  let sum = 0;
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// takes 2 positive numbers
// returns the sum of every integer between them

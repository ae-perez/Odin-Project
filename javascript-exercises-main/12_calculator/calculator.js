const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  const sumOfNums = nums.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
  return sumOfNums;
};

const multiply = function (nums) {
  const product = nums.reduce((total, num) => {
    return total * num;
  });
  return product;
};

const power = function (num, exponent) {
  // return num1 ** num2;
  // * other solution:
  // * this does not take negative numbers into account
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    // formula here
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

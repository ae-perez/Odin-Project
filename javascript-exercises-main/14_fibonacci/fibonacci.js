const fibonacci = function (num) {
  if (num === 0 || num === '0' || Number(num) === 'NaN') {
    return 0;
  }

  if (num < 0) {
    return 'OOPS';
  }

  let fibArr = [1, 1];
  let nValue = 0;

  for (let i = 2; i < num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  console.log(fibArr);
  return fibArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

// ! probably should redo this one, or look into this one more because
// ! it definitely has come up in interviews

const reverseString = function (string) {
  let reverseString = string.split('');
  let reveresed = '';

  for (let i = reverseString.length - 1; i >= 0; i--) {
    reveresed += reverseString[i];
  }

  return reveresed;
};

// Do not edit below this line
module.exports = reverseString;

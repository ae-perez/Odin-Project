const removeFromArray = function (array, ...arg) {
  let arr = []; // create empty array

  array.forEach((item) => {
    // push every element into new array
    // DON'T PUSH the element, if it is included in the function arguments
    // aka, create an array with every item, BUT don't include those that should be removed
    if (!arg.includes(item)) {
      arr.push(item);
    }
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

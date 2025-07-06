const palindromes = function (phrase) {
  let clean = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let backwards = clean.split('').reduce((reverse, letter) => {
    return letter.concat(reverse);
  });

  return clean === backwards;
};

// Do not edit below this line
module.exports = palindromes;

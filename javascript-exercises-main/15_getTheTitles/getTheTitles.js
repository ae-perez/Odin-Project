const getTheTitles = function (books) {
  let bookTitles = [];

  books.map((book) => bookTitles.push(book.title));

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

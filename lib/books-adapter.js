const books = require("../data/books.json");

const getAllBooks = () => {
  return books;
};

const getBookByCode = (code) => {
  const book = books.filter((x) => x.code == code);
  return book;
};

module.exports = { getAllBooks, getBookByCode };

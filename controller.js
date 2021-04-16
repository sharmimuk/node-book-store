const adapter = require("./lib/books-adapter");

const getAllBooks = () => {
  const books = adapter.getAllBooks();
  return books;
};

const getBookByCode = (code) => {
  const book = adapter.getBookByCode(code);
  return book;
};

module.exports = { getAllBooks, getBookByCode };

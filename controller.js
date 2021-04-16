const adapter = require("./lib/books-adapter");

const getAllBooks = () => {
  const books = adapter.getAllBooks();
  return books;
};

const getBookByCode = (code) => {
  const book = adapter.getBookByCode(code);
  return book;
};

const deleteBookByCode = (code) => {
  const deleteBook = adapter.deleteBookByCode(code);
  return deleteBook;
};

module.exports = { getAllBooks, getBookByCode, deleteBookByCode };

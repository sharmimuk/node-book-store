const adapter = require("./lib/books-adapter");

const getAllBooks = () => {
  const books = adapter.getAllBooks();
  return books;
};

module.exports = { getAllBooks };

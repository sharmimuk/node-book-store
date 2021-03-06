const adapter = require("./lib/books-adapter");

const getAllBooks = async () => {
  const books = await adapter.getAllBooks();
  return books;
};

const getBookByCode = async (code) => {
  const book = await adapter.getBookByCode(code);
  return book;
};

const deleteBookByCode = (code) => {
  const deleteBook = adapter.deleteBookByCode(code);
  return deleteBook;
};

const addNewBook = (newBook) => {
  const out = adapter.addNewBook(newBook);
  return out;
};

module.exports = { getAllBooks, getBookByCode, deleteBookByCode, addNewBook };

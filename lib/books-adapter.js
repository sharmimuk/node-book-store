const books = require("../data/books.json");

const getAllBooks = () => {
  return books;
};

module.exports = { getAllBooks };

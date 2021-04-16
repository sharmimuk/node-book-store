const books = require("../data/books.json");
const fs = require("fs");

const getAllBooks = () => {
  return books;
};

const getBookByCode = (code) => {
  const book = books.filter((x) => x.code == code);
  return book;
};

const deleteBookByCode = (code) => {
  let deleted = books.filter((x) => x.code !== code);
  // update the json file after deleting the book
  fs.writeFileSync("./data/books.json", JSON.stringify(deleted, null, 4));
  return deleted;
};

module.exports = { getAllBooks, getBookByCode, deleteBookByCode };

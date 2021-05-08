// const books = require("../data/books.json");
// const fs = require("fs");
const booksDS = require('./booksDS')

const getAllBooks = async () => {
  //return books;
  return await booksDS.findAll();
};

const getBookByCode = async (code) => {
  // const book = books.filter((x) => x.code == code);
  // return book;
  return await booksDS.findOne(code)
};

const deleteBookByCode = (code) => {
  let deleted = books.filter((x) => x.code !== code);
  // update the json file after deleting the book
  fs.writeFileSync("./data/books.json", JSON.stringify(deleted, null, 4));
  return deleted;
};

const addNewBook = (newBook) => {
  books.push(newBook);
  // update the json file after adding the book
  fs.writeFileSync("./data/books.json", JSON.stringify(books, null, 4));
  return books;
};

module.exports = { getAllBooks, getBookByCode, deleteBookByCode, addNewBook };

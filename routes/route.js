const router = require("express").Router();
const controller = require("../controller");

router.get("/", (req, res) => {
  res.send("Welcome to my Mini Library !!!");
});

router.get("/books", (req, res) => {
  const data = controller.getAllBooks();
  res.send(data);
});

router.get("/book/:code", (req, res) => {
  const code = req.params.code;
  const book = controller.getBookByCode(code);
  res.send(book);
});

module.exports = router;

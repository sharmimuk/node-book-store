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

router.delete("/deleteBook/:code", (req, res) => {
  const code = req.params.code;
  const data = controller.deleteBookByCode(code);
  res.send(data);
});

module.exports = router;

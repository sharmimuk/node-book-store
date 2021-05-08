const router = require("express").Router();
const controller = require("../controller");

router.get("/", (req, res) => {
  res.send("Welcome to my Mini Library !!!");
});

router.get("/books", async (req, res) => {
  const data = await controller.getAllBooks();
  res.send(data);
});

router.get("/book/:code", async (req, res) => {
  const code = req.params.code;
  const book = await controller.getBookByCode(code);
  res.send(book);
});

router.delete("/deleteBook/:code", (req, res) => {
  const code = req.params.code;
  const data = controller.deleteBookByCode(code);
  res.send(data);
});

router.post("/addBook", (req, res) => {
  const newBook = req.body;
  const output = controller.addNewBook(newBook);
  res.send(output);
});

module.exports = router;

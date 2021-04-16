const router = require("express").Router();
const controller = require("../controller");

router.get("/", (req, res) => {
  res.send("Welcome to my Mini Library !!!");
});

router.get("/books", (req, res) => {
  const data = controller.getAllBooks();
  res.send(data);
});

module.exports = router;

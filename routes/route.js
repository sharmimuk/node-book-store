const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to my Mini Library !!!");
});

module.exports = router;

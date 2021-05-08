const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/route");
const booksDS = require('./lib/booksDS')

const app = express();
const port = process.env.PORT || 5000;

booksDS.init()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use("/", routes);
app.listen(port, console.log(`Server started at port: ${port}`));

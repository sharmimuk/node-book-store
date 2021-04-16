const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const routes = require("./routes/route");

app.use("/", routes);
app.listen(port, console.log(`Server started at port: ${port}`));

const express = require("express");
const https = require("https");
const app = express();

const portifolio = require("./src/routers/portifolioRouter")

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());


app.use("/", portifolio)

console.log("Tudo ok")

module.exports = app
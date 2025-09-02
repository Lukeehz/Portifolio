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

app.use("/", portifolio)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

console.log("Tudo ok")
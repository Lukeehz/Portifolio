const express = require("express");
const router = express.Router();
const portifolioController = require("../controllers/portifolioController");

router.get("/", portifolioController.index);

module.exports = router
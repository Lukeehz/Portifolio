const express = require("express");
const router = express.Router();
const portifolioController = require("../controllers/portifolioController");

router.get("/", portifolioController.index);
router.get("/github", portifolioController.github);

module.exports = router
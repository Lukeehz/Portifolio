const express = require("express");
const router = express.Router();
const portifolioController = require("../controllers/portifolioController");

router.get("/", portifolioController.index);
router.get("/github", portifolioController.github);
router.post("/nodemailer", portifolioController.nodemailer);

module.exports = router
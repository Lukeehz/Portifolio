const path = require("path")
const basePath = path.join(__dirname, "../../public");

module.exports = class portifolioController {
    static index (req, res) {
        res.sendFile(`${basePath}/html/index.html`)
    }

}
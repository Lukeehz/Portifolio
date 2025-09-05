const path = require("path")
const axios = require("axios")
const basePath = path.join(__dirname, "../../public");

module.exports = class portifolioController {
    static index (req, res) {
        res.sendFile(`${basePath}/html/index.html`)
    }

    static async github (req,res){
        const username = "Lukeehz"
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = response.data.map(repo => repo.name)
        res.json(repos)
    }
}
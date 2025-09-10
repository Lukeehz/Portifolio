const path = require("path");
const axios = require("axios");
const basePath = path.join(__dirname, "../../public");
const transporter = require("../services/nodemailer");
require("dotenv").config();
const token = process.env.GITHUB_TOKEN;

module.exports = class portifolioController {
  static index(req, res) {
    res.sendFile(`${basePath}/html/index.html`);
  }

  static async github(req, res) {
    const username = "Lukeehz";
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          "User-Agent": "portifolio",
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${token}`,
        },
      }
    );

    const repos = response.data.map((repo) => repo.name);
    res.json(repos);
  }

  static async nodemailer(req, res) {
    const { email, subject, name, msg } = req.body;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER2,
        cc: email,
        subject: subject,
        text: msg,
        html: `<p><strong>Mensagem de: ${name} - ${email}</strong><br>${msg}</p>`,
      });

      // Mostra alert e redireciona para página inicial
      res.send(`
      <script>
        alert("E-mail enviado com sucesso!");
        window.location.href = "/";
      </script>
    `);
    } catch (err) {
      console.error(err);
      res.status(500).send(`
      <script>
        alert("Erro ao enviar e-mail. Tente novamente.");
        window.location.href = "/";
      </script>
    `);
    }
  }
};

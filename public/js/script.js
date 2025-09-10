//API
const reposContainer = document.querySelector("#repos");

function gitApi() {
  fetch("/github")
    .then((res) => res.json())
    .then((git) => {
      reposContainer.innerHTML = ""; 

      git.forEach((repoName) => {
        const div = document.createElement("div");
        div.classList.add("repo-card"); 

        const a = document.createElement("a");
        a.href = `https://github.com/Lukeehz/${repoName}`;
        a.target = "_blank";
        a.textContent = repoName;
        a.classList.add("repo-link", "fontPixel"); 

        div.appendChild(a);
        reposContainer.appendChild(div);
      });
    })
    .catch((err) => console.error(err));
}

gitApi();



/* ANIMACOES */

document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".img-animada");

  foto.addEventListener("click", () => {
    if (foto.src.includes("100373893")) {
      foto.src = "/image/okarum.png";
    } else {
      foto.src = "https://avatars.githubusercontent.com/u/100373893?v=4"; 
    }
  });
});


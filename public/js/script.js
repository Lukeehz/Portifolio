//API

function gitApi() {
  fetch("/github")
    .then((res) => res.json())
    .then((git) => {
      console.log(git);
    });
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


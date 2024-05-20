//Animações
if (window.SimpleAnime) {
  new SimpleAnime();
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const btnMobile = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

//Habilidades

var btnSoftwares = document.querySelector("#softwares");
var btnCompetencias = document.querySelector("#competencias");
var softwares = document.querySelector(".softwares");
var competencias = document.querySelector(".competencias");
// var liSoftwares = document.querySelector("li #softwares");
// var liCompetencias = document.querySelector("li #competencias");

btnSoftwares.addEventListener("click", function () {
  softwares.style.display = "grid"; // Exibe o conteúdo de softwares em grid
  competencias.style.display = "none"; // Esconde o conteúdo de competências

  btnSoftwares.classList.add("active");
  btnCompetencias.classList.remove("active");

  liSoftwares.classList.add("active");
  liCompetencias.classList.remove("active");
});

btnCompetencias.addEventListener("click", function () {
  competencias.style.display = "block"; // Exibe o conteúdo de competências
  softwares.style.display = "none"; // Esconde o conteúdo de softwares

  btnCompetencias.classList.add("active");
  btnSoftwares.classList.remove("active");
});

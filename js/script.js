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

btnSoftwares.addEventListener("click", function () {
  softwares.style.display = "grid";
  competencias.style.display = "none";

  btnSoftwares.classList.add("active");
  btnCompetencias.classList.remove("active");
});

btnCompetencias.addEventListener("click", function () {
  competencias.style.display = "flex";
  softwares.style.display = "none";

  btnCompetencias.classList.add("active");
  btnSoftwares.classList.remove("active");
});

//Experiência

var btnExperiencias = document.querySelector("#experiencias");
var btnFormacao = document.querySelector("#formacao");
var experiencias = document.querySelector(".experiencia-conteudo");
var formacao = document.querySelector(".formacao-conteudo");

btnExperiencias.addEventListener("click", function () {
  experiencias.style.display = "block";
  formacao.style.display = "none";

  btnExperiencias.classList.add("active");
  btnFormacao.classList.remove("active");
});

btnFormacao.addEventListener("click", function () {
  formacao.style.display = "block";
  experiencias.style.display = "none";

  btnFormacao.classList.add("active");
  btnExperiencias.classList.remove("active");
});

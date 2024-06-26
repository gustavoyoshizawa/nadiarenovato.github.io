function initNav() {
  // Botão Nav
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }
  btnMobile.addEventListener("click", toggleMenu);

  // Scroll Nav
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');
  function diminuirNav() {
    nav.classList.remove("active");
  }

  linkInterno.forEach((item) => {
    item.addEventListener("click", diminuirNav);
  });

  function ScrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInterno.forEach((item) => {
    item.addEventListener("click", ScrollSection);
  });
}
initNav();

//Habilidades
function initCompetencias() {
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
}
initCompetencias();

//Experiência
function initExperiencias() {
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
}
initExperiencias();

// Scroll Suave
function initScrollSuave() {
  const sections = document.querySelectorAll(".js-scroll");
  sections[0].classList.add("ativo");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.9;

    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animarScroll);
  }
}
initScrollSuave();

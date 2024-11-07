function initNav() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("ativo");
    menuList.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      menuButton.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });

    function outsideClick(element, events, callback) {
      const html = document.documentElement;
      const outside = "data-outside";
      if (!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
          html.addEventListener(userEvent, handleOutsideClick);
        });
        element.setAttribute(outside, "");
      }
      function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
          element.removeAttribute(outside);
          events.forEach((userEvent) => {
            html.removeEventListener(userEvent, handleOutsideClick);
          });
          callback();
        }
      }
    }
  }

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
initNav();

// Scroll Link Interno
function initScrollLinkInterno() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

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
initScrollLinkInterno();

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

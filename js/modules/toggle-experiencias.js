export default function toggleExperiencias() {
  const experiencias = [
    {
      funcao: "Arquiteta",
      empresa: "Sobrepor",
      texto:
        "Realizar análises de projetos de arquitetura e das demais disciplinas envolvidas, desde a fase inicial até a liberação para execução em obra, através de relatórios, de forma a compatibilizar todas as disciplinas envolvidas. Também elaborar projetos de arquitetura, com suas diversas alterações e definições, servindo de base para os projetos complementares.",
      periodo: "Jan 2023 - Presente",
    },
    {
      funcao: "Estagiária",
      empresa: "Sobrepor",
      texto:
        "Realizar análises de projetos de arquitetura e das demais disciplinas envolvidas, desde a fase inicial até a liberação para execução em obra, através de relatórios, de forma a compatibilizar todas as disciplinas envolvidas. Também elaborar projetos de arquitetura, com suas diversas alterações e definições, servindo de base para os projetos complementares.",
      periodo: "Mai 2023 - Jan 2025",
    },
    {
      funcao: "Projetista",
      empresa: "Mais Revestimentos Cerâmicos",
      texto:
        "Elaborar e detalhar projetos de paginação em 2D de pisos e revestimentos em ambientes como: áreas internas e externas, piscinas e fachadas, utilizando AutoCAD. Realizar projetos em 3D utilizando SketchUp quando solicitado.",
      periodo: "Jan 2022 - Mar 2023",
    },
  ];

  const formacao = [
    {
      nivel: "Bacharel",
      curso: "Arquitetura e Urbanismo",
      local: "Universidade São Judas",
      periodo: "2020 - 2024",
    },
    {
      nivel: "Técnico",
      curso: "Edificações",
      local: "SENAI 'Orlando Laviero Ferraiuolo'",
      periodo: "2018 - 2019",
    },
  ];

  function loadContent(tab) {
    const tabContent = document.querySelector(".experiencia-conteudo");
    tabContent.innerHTML = "";
    let number = 0;

    let contentHTML = "";
    if (tab === "experiencias") {
      contentHTML = experiencias
        .map((experiencia) => {
          return `
        <div class='experiencia'>
        <div class='conteudo'>
          <h1>${experiencia.funcao}</h1>
          <h2>${experiencia.empresa}</h2>
          <p>${experiencia.texto}</p>
          <h3>${experiencia.periodo}</h3>
        </div>
        </div>
        `;
        })
        .join("");
    } else if (tab === "formacao") {
      contentHTML = formacao
        .map((formacao) => {
          return `
        <div class='formacaoo'>
        <div class='conteudo'>
          <h1>${formacao.nivel}</h1>
          <h2>${formacao.curso}</h2>
          <p>${formacao.local}</p>
          <h3>${formacao.periodo}</h3>
        </div>
        </div>

        `;
        })
        .join("");
    }
    tabContent.innerHTML = `<div class="${tab}">${contentHTML}</div>`;
  }

  document.querySelectorAll("[data-tab-2]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-tab-2]")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
      const tab = button.getAttribute("data-tab-2");
      loadContent(tab);
    });
  });
  loadContent("experiencias");
}

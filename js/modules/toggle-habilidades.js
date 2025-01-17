export default function toggleHabilidades() {
  const softwares = [
    { src: "./svg/softwares/autocad.svg", name: "AutoCAD" },
    { src: "./svg/softwares/sketchup.svg", name: "SketchUp" },
    { src: "./svg/softwares/revit.svg", name: "Revit" },
    { src: "./svg/softwares/qgis.svg", name: "QGIS" },
    { src: "./svg/softwares/office.svg", name: "Office" },
    { src: "./svg/softwares/photoshop.svg", name: "Photoshop" },
  ];

  const competencias = [
    { name: "Disciplina", id: "pessoal" },
    { name: "Flexibilidade", id: "pessoal" },
    { name: "Organização", id: "pessoal" },
    { name: "Trabalho em Equipe", id: "pessoal" },
    { name: "Pontualidade", id: "pessoal" },
    { name: "Criação e desenvolvimento de projetos técnicos", id: "autocad" },
    { name: "Criar e editar blocos", id: "autocad" },
    { name: "Configuração de arquivos para impressão", id: "autocad" },
    {
      name: "Criar, editar e transformar imagens usando recursos do programa para fins arquitetônicos.",
      id: "autocad",
    },
    {
      name: "Criar modelos tridimensionais e maquete eletrônica de um projeto, através do AutoCAD.",
      id: "sketchup",
    },
    {
      name: "Edição de texturas e materiais.",
      id: "sketchup",
    },
    {
      name: "Criação, edição e ajuste de blocos e componentes.",
      id: "sketchup",
    },
    {
      name: "Configuração de cenas.",
      id: "sketchup",
    },
    {
      name: "Aplicação da metodologia BIM.",
      id: "revit",
    },
    {
      name: "Modelagem de projeto 3D através de parâmetros.",
      id: "revit",
    },
    {
      name: "Estudos de insolação e topografia.",
      id: "revit",
    },
    {
      name: "Representação gráfica.",
      id: "revit",
    },
    {
      name: "Diagramação de pranchas e renderização no software.",
      id: "revit",
    },
    {
      name: "Modelos e tipos básicos de dados espaciais.",
      id: "qgis",
    },
    {
      name: "Processamento de dados raster e vetoriais.",
      id: "qgis",
    },
    {
      name: "Aprender em detalhes sobre projeção de mapas e seus tipos.",
      id: "qgis",
    },
    {
      name: "Nível intermediário dos softwares: Word, Power Point e Excel.",
      id: "office",
    },
    {
      name: "Criação e edição de imagens.",
      id: "photoshop",
    },
  ];

  function loadContent(tab) {
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = "";

    let contentHTML = "";

    if (tab === "softwares") {
      contentHTML = softwares
        .map(
          (software) => `
        <div>
          <img src="${software.src}" alt="${software.name}" />
          <p>${software.name}</p>
        </div>
      `
        )
        .join("");
    } else if (tab === "competencias") {
      contentHTML = competencias
        .map(
          (competencia) => `
            <div id="${competencia.id}">
              <p>${competencia.name}</p>
            </div>
          `
        )
        .join("");
    }

    tabContent.innerHTML = `<div class="${tab}">${contentHTML}</div>`;
  }

  document.querySelectorAll("[data-button]").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll("[data-button]")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
      const tab = button.getAttribute("data-tab");
      loadContent(tab);
    });
  });

  loadContent("softwares");
}

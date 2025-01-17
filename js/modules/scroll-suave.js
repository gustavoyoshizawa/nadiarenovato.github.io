export default function scrollSuave() {
  const sections = document.querySelectorAll(".js-scroll");
  sections[0].classList.add("ativo");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.93;

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

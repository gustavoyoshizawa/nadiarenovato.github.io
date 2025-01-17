export default function scrollInterno() {
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

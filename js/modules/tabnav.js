export default function initTabNav() {
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

export default function initTabNav() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    event.stopPropagation();
    if (menuButton.classList.contains("ativo")) {
      closeMenu();
    } else {
      menuButton.classList.add("ativo");
      menuList.classList.add("ativo");
      outsideClick(menuList, eventos, closeMenu);
    }
  }

  function closeMenu() {
    menuButton.classList.remove("ativo");
    menuList.classList.remove("ativo");
  }

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
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

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}

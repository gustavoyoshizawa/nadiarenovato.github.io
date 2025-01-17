export default function date() {
  const spanYear = document.querySelector(".copy span");
  const date = new Date();

  spanYear.innerHTML = date.getFullYear();
}

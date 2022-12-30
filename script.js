const button = document.querySelector("#color-picker-button");
const menu = document.querySelector("#color-menu");
const colorName = document.querySelector("#color-name");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.addEventListener("click", (event) => {
  if (event.target.classList.contains("color")) {
    const color = event.target.getAttribute("data-color");
    document.body.style.backgroundColor = color;
    colorName.textContent = `${event.target.textContent}`;
    menu.classList.add("hidden");
  }
});


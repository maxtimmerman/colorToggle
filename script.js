// JavaScript to handle the color selection and menu toggle
const button = document.querySelector("#color-picker-button");
const menu = document.querySelector("#color-menu");
const colorName = document.querySelector("#color-name");

button.addEventListener("click", () => {
  // Toggle the menu visibility
  menu.classList.toggle("hidden");
});

menu.addEventListener("click", (event) => {
  // Check if the clicked element is a color item
  if (event.target.classList.contains("color")) {
    // Get the color value from the data-color attribute
    const color = event.target.getAttribute("data-color");
    // Set the body's background color
    document.body.style.backgroundColor = color;
    // Print the name of the color on webpage
    colorName.textContent = `${event.target.textContent}`;
    // Hide the menu
    menu.classList.add("hidden");
  }
});


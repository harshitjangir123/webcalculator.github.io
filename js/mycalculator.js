const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    if (button.classList.contains("operator")) {
     

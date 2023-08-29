let gradientBoxDiv = document.getElementById("gradient-box");
let colorsInput = document.querySelector("#colors-input");
let childColors = colorsInput.querySelectorAll("input");
let selectionDiv = document.getElementById("selection-box");
let textCodeDiv = document.getElementById("text-code");
let defaultDirection = "top left";

function generateGradient() {
  console.log(defaultDirection);
  const gradient = `linear-gradient(to ${defaultDirection}, ${childColors[0].value}, ${childColors[1].value})`;
  gradientBoxDiv.style.background = gradient;
  textCodeDiv.innerText = `background: ${gradient};`;
}

childColors.forEach((input) => {
  input.addEventListener("input", generateGradient);
});

selectionDiv.addEventListener("change", () => {
  defaultDirection = selectionDiv.value;
  generateGradient();
});

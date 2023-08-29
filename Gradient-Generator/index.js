let gradientBoxDiv = document.getElementById("gradient-box");
let colorsInput = document.querySelector("#colors-input");
let childColors = colorsInput.querySelectorAll("input");
let selectionDiv = document.getElementById("selection-box");
let textCodeDiv = document.getElementById("text-code");
let defaultDirection = "top left";
let copyTextBtn = document.getElementById("copy-text-btn");

function generateGradient() {
  copyTextBtn.innerText = "Copy Code";
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

copyTextBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textCodeDiv.innerText);
  copyTextBtn.innerText = "Code Copied";
});

const btn = document.querySelector(".pick-btn");
const colorDiv = document.querySelector(".color-id");
btn.addEventListener("click", activateEyePicker);
colorDiv.addEventListener("click", copyColor);
let selectedColor = "#fff";
changeContent(selectedColor);

async function activateEyePicker() {
  try {
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open();
    if (result.sRGBHex) {
      changeContent(result.sRGBHex);
    }
  } catch (e) {
    console.log(e);
  }
}
function changeContent(color) {
  colorDiv.textContent = color;
  colorDiv.style.background = color;
  selectedColor = color;
}

function copyColor() {
  navigator.clipboard.writeText(selectedColor);
}

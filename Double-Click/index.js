const imageDiv = document.getElementById("image_");
const iconDiv = document.getElementById("heart-icon");

imageDiv.addEventListener("dblclick", () => {
  if (iconDiv.classList.contains("scale-0")) {
    iconDiv.classList.remove("scale-0");
    iconDiv.classList.add("scale-150");
    setTimeout(() => {
      iconDiv.classList.remove("scale-150");
      iconDiv.classList.add("scale-0");
    }, 400);
  }
});

const contentDiv = document.querySelector("#content");
const btn = document.querySelector("#new-qoute-btn");
const closeBtn = document.querySelector("#close-btn");

btn.addEventListener("click", () => {
  contentDiv.classList.remove("translate-y-[-300px]");
});

closeBtn.addEventListener("click", () => {
  contentDiv.classList.add("translate-y-[-300px]");
});

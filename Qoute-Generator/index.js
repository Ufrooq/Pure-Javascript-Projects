const btn = document.getElementById("new-qoute-btn");
const qoute = document.querySelector("#qoute");
const author = document.querySelector("#author");
const content = document.querySelector("#content");
const loader = document.querySelector("#loader");

const addLoader = () => {
  loader.classList.remove("hidden");
  content.classList.add("hidden");
};

const removeLoader = () => {
  loader.classList.add("hidden");
  content.classList.remove("hidden");
};

let fetchData = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: { "X-Api-Key": "YOUR_API_KEY" },
      "Content-Type": "application/json",
    });
    const data = await response.json();
    if (data) {
      content.classList.remove("hidden");
      loader.setAttribute("class", "hidden");
    }
    return data[0];
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener("load", async () => {
  const data = await fetchData();
  qoute.innerHTML = data.quote;
  author.innerHTML = "-  " + data.author;
});
btn.addEventListener("click", async () => {
  addLoader();
  const data = await fetchData();
  qoute.innerHTML = data.quote;
  author.innerHTML = data.author;
  const id = setTimeout(() => {
    removeLoader();
  }, 3000);
  clearTimeout(id);
});

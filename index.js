const parentDiv = document.querySelector(".week-days");
console.log(parentDiv.firstElementChild.innerHTML);
const childs = parentDiv.children;
const myChildArray = Array.from(childs);
myChildArray.forEach((elem) => (elem.style.color = "red"));

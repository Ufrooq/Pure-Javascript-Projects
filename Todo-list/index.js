let todoArray = [];
function getValue() {
  const value = document.getElementById("input-box").value;
  addTodo(value);
}

function addTodo(value) {
  todoArray.push(value);
  printTodos();
}

function printTodos() {
  todoArray.forEach((todo) => {
    console.log(todo);
  });
}

document.addEventListener("click", () => {
  getValue();
});

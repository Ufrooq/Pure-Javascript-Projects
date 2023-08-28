let todoArray = [];
let addTodoBtn = document.getElementById("add-todo-btn");
let todoItemDiv = document.getElementById("todo-items");

function getValue() {
  let value = document.getElementById("input-box").value;
  insertTodo(value);
  value = document.getElementById("input-box").value = "";
}

function insertTodo(value) {
  todoArray.push(value);
  printTodos();
}

function printTodos() {
  todoArray.forEach((todoData) => {
    const todoItem = document.createElement("div");
    todoItem.innerHTML = `
            <div id="todo" class="flex bg-rose-500 text-white py-2 px-5 rounded-md shadow-md">
                <p>${todoData}</p>
                <button class="ms-6"><i class="fa-solid fa-check"></i></button>
                <button class="ms-3"><i class="fa-solid fa-delete-left"></i></button>
            </div>`;
  });
}

addTodoBtn.addEventListener("click", () => {
  getValue();
});

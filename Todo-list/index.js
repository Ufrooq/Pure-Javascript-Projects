let todoArray = [];
let todoItemDiv = document.getElementById("todo-items");
let addTodoBtn = document.getElementById("add-todo-btn");
let formBtn = document.getElementById("submit-todo");
const colorsArray = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "rose",
  "slate",
];
let colorIndex = 0;

function getValue() {
  let value = document.getElementById("input-box").value;
  insertTodo(value);
  value = document.getElementById("input-box").value = "";
}

function insertTodo(value) {
  todoArray.push({
    _id: Math.floor(Math.random() * 100000),
    todoColor:
      colorsArray[
        colorIndex <= colorsArray.length ? colorIndex++ : colorIndex--
      ],
    text: value,
  });
  printTodos();
}

function printTodos() {
  let todos = "";
  todoArray.forEach((todoData) => {
    todos += `
            <div id="todo" class="flex justify-between bg-${todoData.todoColor}-500 text-white py-2 px-5 mt-4 rounded-md shadow-md">
                <p>${todoData.text}</p>
                <div>
                    <button class='ms-6'><i class="fa-solid fa-check"></i></button>
                    <button class="ms-2"><i class="fa-solid fa-delete-left"></i></button>
                </div>
            </div>`;
  });

  todoItemDiv.innerHTML = todos;
}

formBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  getValue();
});

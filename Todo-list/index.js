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
    todoColor:
      colorsArray[
        colorIndex <= colorsArray.length ? colorIndex++ : colorIndex--
      ],
    text: value,
    isChecked: false,
  });
  printTodos();
}

function printTodos() {
  let todos = "";
  todoArray.forEach((todoData) => {
    todos += `
            <div id="todo" class="flex justify-between 
            bg-${todoData.todoColor}-500
             text-white py-2 px-5 mt-4 rounded-md shadow-md duration-300">
                <p class = ${todoData.isChecked ? "line-through" : ""}>
                ${todoData.text}</p>
                <div>
                    <button class="doneTodo ms-6"><i class="fa-solid fa-check"></i></button>
                    <button class="removeTodo ms-2"><i class="fa-solid fa-delete-left"></i></button>
                </div>
            </div>`;
  });
  todoItemDiv.innerHTML = todos;

  let doneTodo = document.querySelectorAll(".doneTodo");
  let removeTodoBtn = document.querySelectorAll(".removeTodo");
  removeTodoBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      todoArray.splice(index, 1);
      printTodos();
    });
  });

  doneTodo?.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      todoArray[index].isChecked = true;
      printTodos();
    });
  });
}

formBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  getValue();
});

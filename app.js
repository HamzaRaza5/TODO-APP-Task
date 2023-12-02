const todosContainer = document.getElementById("todos");
const deleteAllButton = document.getElementById("deleteAll");
const newTodoInput = document.getElementById("newTodo");
const addTodoButton = document.getElementById("addTodo");

function updateUI() {
  todosContainer.innerHTML = "";
  deleteAllButton.style.display = todos.length <= 1 ? "none" : "block";

  todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    const todoText = document.createElement("span");
    todoText.innerText = todo;

    const btnContainer = document.createElement("div");
    btnContainer.className = "button-container";

    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.className = "green";
    editbtn.onclick = () => editTodo(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "red";
    deleteBtn.onclick = () => deleteTodo(index);

    btnContainer.appendChild(editbtn);
    btnContainer.appendChild(deleteBtn);

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(btnContainer);
    todosContainer.appendChild(todoDiv);
  });
}

function addTodo() {
  const newTodo = newTodoInput.value.trim();
  if (newTodo !== "") {
    todos.push(newTodo);
    newTodoInput.value = "";
    updateUI();
  }
}

function editTodo(index) {
  const todoDiv = todosContainer.children[index];
  const btnContainer = todoDiv.querySelector(".button-container");

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.className = "green";
  saveButton.onclick = () => saveEdit(index);

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "red";
  cancelButton.onclick = () => cancleEdit(index);

  btnContainer.innerHTML = "";
  btnContainer.appendChild(saveButton);
  btnContainer.appendChild(cancelButton);

  const todoText = todoDiv.querySelector("span");
  const currentText = todoText.innerText;

  todoText.innerHTML = "";
  const editInput = document.createElement("input");
  editInput.type = "test";
  editInput.value = currentText;
  todoText.appendChild(editInput);
}

function saveEdit(index) {
  const todoDiv = todosContainer.children[index];
  const todoText = todoDiv.querySelector("span");
  const editInput = todoText.querySelector("input");
  const updateText = editInput.value.trim();

  if (updateText !== "") {
    todos[index] = updateText;
    updateUI();
  }
}

function cancleEdit(index) {
  updateUI();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  updateUI();
}

function deleteAll() {
  todos = [];
  updateUI();
}

addTodoButton.addEventListener("click", addTodo);
deleteAllButton.addEventListener("click", deleteAll);

let todos = [];
updateUI();

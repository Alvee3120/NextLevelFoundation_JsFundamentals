console.log("my todo Js File Connected");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

console.log(taskInput, addBtn, taskList);

function addItem(InputValue) {
  let item = document.createElement("li");
  item.textContent = InputValue;
  taskList.appendChild(item)
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem(taskInput.value);
  }
});

addBtn.addEventListener("click", () => addItem(taskInput.value));

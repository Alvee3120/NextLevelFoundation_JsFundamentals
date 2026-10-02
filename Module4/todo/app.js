console.log("my todo Js File Connected");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

console.log(taskInput, addBtn, taskList);

function addItem(InputValue) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let btnWrapper = document.createElement("span");
  let completeBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  span.textContent = InputValue;
  completeBtn.textContent = "COMPLETE";
  deleteBtn.textContent = "DELETE";

  btnWrapper.appendChild(completeBtn);
  btnWrapper.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnWrapper);

  taskList.appendChild(li);
  taskInput.value = "";
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem(taskInput.value);
  }
});

addBtn.addEventListener("click", () => addItem(taskInput.value));

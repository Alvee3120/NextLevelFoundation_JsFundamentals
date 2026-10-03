let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = [];
let taskCounter = 1;

function render() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("task-item");
    console.log(task);

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text;

    let btnWrapper = document.createElement("span");
    btnWrapper.classList.add("task-button");

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "complete";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnWrapper);

    taskList.appendChild(li);
  });
}

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText == "") {
    return;
  }

  let newTask = {
    id: taskCounter++,
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";

  render();
}

addBtn.addEventListener("click", addTask);

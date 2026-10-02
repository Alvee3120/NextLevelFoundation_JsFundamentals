console.log("my todo Js File Connected");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

console.log(taskInput, addBtn, taskList);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter Pressed", taskInput.value);
  }
});

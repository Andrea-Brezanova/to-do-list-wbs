const dim = document.querySelector("#dimmer-button");
const main = document.querySelector("#main");
const submit = document.querySelector("#add");
console.log(submit);

dim.addEventListener("click", () => {
  main.classList.toggle("dark");
});

submit.addEventListener("click", () => {
  const main = document.querySelector("#main-container");
  const input = document.querySelector("#new_task_input");

  const container = document.createElement("div");
  container.id = "todo";
  container.className = "new-todo";

  const toDoString = document.createElement("p");
  toDoString.id = "string";
  toDoString.innerText = input.value;

  const checkButton = document.createElement("button");
  checkButton.id = "check-box";
  checkButton.innerHTML = "&#10004";
  checkButton.addEventListener("click", () => {
    console.log("clicked");
    container.classList.toggle("green1");
  });

  const progressButton = document.createElement("button");
  progressButton.id = "progressButton";
  progressButton.innerHTML = "&#x272A";
  progressButton.addEventListener("click", () => {
    console.log("clicked");
    container.classList.toggle("yellow1");
  });

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.innerHTML = "DEL";
  deleteButton.addEventListener("click", () => {
    container.remove();
  });

  main.append(container);
  container.append(checkButton);
  container.append(progressButton);
  container.append(toDoString);
  container.append(deleteButton);

  input.value = "";
});

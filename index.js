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

  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.addEventListener("click", () => {
    if (checkButton.checked) {
      container.classList = "new-todo green1";
    } else {
      container.classList = "new-todo";
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {
    container.remove();
  });

  main.append(container);
  container.append(checkButton);
  container.append(toDoString);
  container.append(deleteButton);

  input.value = "";
});

import "./styles.css";
import { createToDo } from "./todo.js";
import { renderTodo } from "./renderTodo.js";
const content = document.getElementById("content");
const submit__button = document.getElementById("submit__button");
submit__button.addEventListener("click", () => {
  const inputName = document.getElementById("name").value;
  const textareaescription = document.getElementById("description").value;
  const read = createToDo(
    inputName,
    textareaescription,
    "Today",
    "Mandatory",
    "It should be completed at 9PM",
    false,
  );
  renderTodo(read);
  console.log(read);
});
content.appendChild(template__button);

export { content };

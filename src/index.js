import "./styles.css";
import { createToDo } from "./todo.js";
import { renderTodo } from "./renderTodo.js";
const content = document.getElementById("content");
const template__button = document.createElement("button");
template__button.className = "template__button";
template__button.textContent = "Button";
template__button.addEventListener("click", () => {
  const read = createToDo(
    "Read",
    "Read a book",
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

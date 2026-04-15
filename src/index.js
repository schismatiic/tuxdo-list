import "./styles.css";
import { createToDo } from "./todo.js";
import { renderTodo } from "./renderTodo.js";
const content = document.getElementById("content");
const template__button = document.getElementById("add__task");
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

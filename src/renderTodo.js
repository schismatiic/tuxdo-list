import "./styles.css";
import { content } from "./index.js";
const renderTodo = (array) => {
  array.forEach((todo) => {
    // ===============================================================================================
    // Create element
    const todo__container = document.createElement("div");
    const todo__title = document.createElement("h4");
    const todo__date = document.createElement("p");
    // ===============================================================================================
    // Class name
    todo__container.className = "todo__container";
    // ===============================================================================================
    // Text content
    todo__container.textContent = "";
    todo__title.textContent = `${todo.title}`;
    todo__date.textContent = `Due: ${todo.dueDate}`;
    // ===============================================================================================
    // Append child
    todo__container.appendChild(todo__title);
    todo__container.appendChild(todo__date);
    content.appendChild(todo__container);
  });
};
export { renderTodo };

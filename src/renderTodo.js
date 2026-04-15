import "./styles.css";
import { content } from "./index.js";
const renderTodo = (todo) => {
  // ===============================================================================================
  // Create element
  const todo__container = document.createElement("div");
  const todo__title = document.createElement("h4");
  // ===============================================================================================
  // Class name
  todo__container.className = "todo__container";
  // ===============================================================================================
  // Text content
  todo__title.textContent = `${todo.title}`;

  // ===============================================================================================
  // Append child
  todo__container.appendChild(todo__title);
  content.appendChild(todo__container);
};
export { renderTodo };

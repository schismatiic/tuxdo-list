import "./styles.css";
import { content } from "./index.js";
import { removeTodo } from "./removeTodo.js";
import { myTasks } from "./index.js";
const renderTodo = (array) => {
  array.forEach((todo) => {
    if (todo.isShown !== true) {
      // ===============================================================================================
      // Create element
      const todo__container = document.createElement("div");
      const left = document.createElement("div");
      const right = document.createElement("div");
      const todo__title = document.createElement("h4");
      const todo__date = document.createElement("p");
      const remove__btn = document.createElement("button");
      // ===============================================================================================
      // Class name
      todo__container.className = "todo__container";
      remove__btn.className = "remove__btn";
      // ===============================================================================================
      // Text content
      todo__container.textContent = "";
      todo__title.textContent = `${todo.title}`;
      todo__date.textContent = `Due: ${todo.dueDate}`;
      remove__btn.textContent = "X";
      // ===============================================================================================
      // Set id
      todo__container.setAttribute("data-taskId", todo.id);
      // ===============================================================================================
      // Append child
      left.appendChild(todo__title);
      left.appendChild(todo__date);
      right.appendChild(remove__btn);
      todo__container.appendChild(left);
      todo__container.appendChild(right);
      content.appendChild(todo__container);
      // ===============================================================================================
      // Remove child
      remove__btn.addEventListener("click", () => {
        const taskId = todo__container.getAttribute("data-taskId");
        console.log(taskId);

        left.removeChild(todo__title);
        left.removeChild(todo__date);
        right.removeChild(remove__btn);
        todo__container.removeChild(left);
        todo__container.removeChild(right);
        content.removeChild(todo__container);
        removeTodo(myTasks, taskId);
        console.log(myTasks);
      });
    }
  });
};
export { renderTodo };

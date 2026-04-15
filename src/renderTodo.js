import "./styles.css";
import { content } from "./index.js";
import { removeTodo } from "./removeTodo.js";
const todo__box = document.createElement("div");
const renderTodo = (array) => {
  array.forEach((todo) => {
    if (todo.isShown !== true) {
      // ===============================================================================================
      // Variables
      let toggleDetails = false;
      // ===============================================================================================
      // Create element
      const todo__container = document.createElement("div");
      const left = document.createElement("div");
      const right = document.createElement("div");
      const todo__title = document.createElement("h4");
      const todo__date = document.createElement("p");
      const description = document.createElement("p");
      const priority = document.createElement("p");
      const edit__btn = document.createElement("button");
      const remove__btn = document.createElement("button");
      // ===============================================================================================
      // Class name
      todo__container.className = "todo__container";
      edit__btn.className = "edit__btn";
      remove__btn.className = "remove__btn";
      // ===============================================================================================
      // Text content
      todo__container.textContent = "";
      todo__title.textContent = `${todo.title}`;
      todo__date.textContent = `Due: ${todo.dueDate}`;
      description.textContent = `Description: ${todo.description}`;
      priority.textContent = `Priority: ${todo.priority}`;
      edit__btn.textContent = "Edit";
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
        const newArray = removeTodo(myTasks, taskId);
        myTasks = newArray;
        left.removeChild(todo__title);
        left.removeChild(todo__date);
        right.removeChild(remove__btn);
        todo__container.removeChild(left);
        todo__container.removeChild(right);
        content.removeChild(todo__container);
        if (toggleDetails === true) {
          left.removeChild(description);
          left.removeChild(priority);
          left.removeChild(edit__btn);
        }
        console.log(myTasks);
      });
      // ===============================================================================================
      // More details
      todo__container.addEventListener("click", () => {
        if (toggleDetails === false) {
          toggleDetails = true;
          left.appendChild(description);
          left.appendChild(priority);
          left.appendChild(edit__btn);
        } else if (toggleDetails === true) {
          toggleDetails = false;
          left.removeChild(description);
          left.removeChild(priority);
          left.removeChild(edit__btn);
        }
      });
    }
  });
};
export { renderTodo, myTasks };

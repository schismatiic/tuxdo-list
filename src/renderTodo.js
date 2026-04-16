import "./styles.css";
import { content } from "./index.js";
import { myTasks } from "./index.js";
import { editTask } from "./editTask.js";
const todo__box = document.createElement("div");
todo__box.className = "todo__box";
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
      left.className = "left__todo";
      todo__title.className = "todo__title";
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
      remove__btn.setAttribute("data-taskId", todo.id);
      todo__title.setAttribute("data-taskId", todo.id);
      // ===============================================================================================
      // Append child
      left.appendChild(todo__title);
      left.appendChild(todo__date);
      right.appendChild(remove__btn);
      todo__container.appendChild(left);
      todo__container.appendChild(right);
      todo__box.appendChild(todo__container);
      content.appendChild(todo__box);
      // ===============================================================================================
      // Edit
      edit__btn.addEventListener("click", () => {
        editTask(left);
        // let getSave = getSaveBtn();
        // let new__name = getEditInput();
        // getSave.forEach((element) => {
        //   element.addEventListener("click", () => {
        //     let input__value1 = element;
        //   });
        // });
      });

      // ===============================================================================================
      // Remove child
      remove__btn.addEventListener("click", () => {
        left.removeChild(todo__title);
        left.removeChild(todo__date);
        right.removeChild(remove__btn);
        todo__container.removeChild(left);
        todo__container.removeChild(right);
        todo__box.removeChild(todo__container);
        if (toggleDetails === true) {
          left.removeChild(description);
          left.removeChild(priority);
          left.removeChild(edit__btn);
        }
      });
      // ===============================================================================================
      // More details
      todo__title.addEventListener("click", () => {
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
export { renderTodo, todo__box };

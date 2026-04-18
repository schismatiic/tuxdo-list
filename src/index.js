import "./styles.css";
import { createToDo } from "./todo.js";
import { renderTodo, todo__box } from "./renderTodo.js";
import { compareAsc, format } from "date-fns";
import { removeTodo } from "./removeTodo.js";
import { getRemoveBtn } from "./getRemoveBtn.js";
import { editTaskArray } from "./editTask.js";
import { createProject } from "./project.js";
import { renderNewProject } from "./renderNewProject.js";
const content = document.getElementById("content");
const submit__button = document.getElementById("submit__button");
const new__project = document.getElementById("project__new");

let myTasks = [];
let project__name = "Default";
renderNewProject("Default");
// ===============================================================================================
// Default
const date1 = format(new Date(11, 11, 2000), "dd MMMM yyyy");
const defaultTask = createToDo(
  crypto.randomUUID(),
  "default",
  "jsdhsdjkfhdskjfhdskjhfdsjkhfkjdshfkds",
  date1,
  "medium",
  false,
  "Default",
);
const defaultTask1 = createToDo(
  crypto.randomUUID(),
  "default",
  "jsdhsdjkfhdskjfhdskjhfdsjkhfkjdshfkds",
  date1,
  "medium",
  false,
  "Default",
);
myTasks.push(defaultTask);
myTasks.push(defaultTask1);
renderTodo(myTasks);
defaultTask.isShown = true;
defaultTask1.isShown = true;
console.log(myTasks);

// ===============================================================================================
// Submit listener
submit__button.addEventListener("click", (event) => {
  const inputName = document.getElementById("name").value;
  const textareaescription = document.getElementById("description").value;
  const date = format(
    new Date(document.getElementById("dueDate").value),
    "dd MMMM yyyy",
  );
  const priority = document.getElementById("priority").value;
  const task = createToDo(
    crypto.randomUUID(),
    inputName,
    textareaescription,
    date,
    priority,
    false,
    project__name,
  );
  myTasks.push(task);
  console.log(myTasks);
  renderTodo(myTasks);
  task.isShown = true;
  let delete__button = getRemoveBtn();
  delete__button.forEach((element) => {
    element.addEventListener("click", () => {
      const taskId = element.getAttribute("data-taskId");
      const newArray = removeTodo(myTasks, taskId);
      myTasks = newArray;
      console.log(myTasks);
    });
  });
});
new__project.addEventListener("click", () => {
  renderNewProject();
  const create__btn = document.querySelector(".create__button");
  create__btn.addEventListener("click", () => {
    const projects = document.querySelectorAll(".render__name__project");
    projects.forEach((element) => {
      element.addEventListener("click", () => {
        project__name = element.textContent;
        renderTodo(myTasks);
      });
    });
  });
});
export { content, myTasks, new__project, project__name };

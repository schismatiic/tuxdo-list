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
const save = document.querySelectorAll(".save__btn");

let myTasks = [];
// ===============================================================================================
// Default
const default__project = createProject("Default", myTasks);
const date1 = format(new Date(11, 11, 2000), "dd MMMM yyyy");
const defaultTask = createToDo(
  crypto.randomUUID(),
  "default",
  "jsdhsdjkfhdskjfhdskjhfdsjkhfkjdshfkds",
  date1,
  "medium",
  false,
);
const defaultTask1 = createToDo(
  crypto.randomUUID(),
  "default",
  "jsdhsdjkfhdskjfhdskjhfdsjkhfkjdshfkds",
  date1,
  "medium",
  false,
);
myTasks.push(defaultTask);
myTasks.push(defaultTask1);
renderTodo(myTasks);
defaultTask.isShown = true;
defaultTask1.isShown = true;
// ===============================================================================================
// Submit listener
submit__button.addEventListener("click", (event) => {
  console.log(editTaskArray);

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
  );
  myTasks.push(task);
  renderTodo(myTasks);
  task.isShown = true;
  let delete__button = getRemoveBtn();
  console.log(delete__button);
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
});
document.addEventListener("DOMContentLoaded", () => {});
export { content, myTasks, new__project };

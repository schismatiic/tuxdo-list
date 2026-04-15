import "./styles.css";
import { createToDo } from "./todo.js";
import { renderTodo, myTasks } from "./renderTodo.js";
import { compareAsc, format } from "date-fns";

const content = document.getElementById("content");
const submit__button = document.getElementById("submit__button");
const parent = document.querySelectorAll("content");
parent.forEach((element) => {
  element.addEventListener("click", () => {
    const taskId = element.getAttribute("data-taskId");
    console.log(taskId);
  });
});
let hello = "hello";
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
  );
  myTasks.push(task);
  renderTodo(myTasks);
  task.isShown = true;
  console.log(myTasks);
});
export { content, myTasks, hello };

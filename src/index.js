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
const project__screen = document.getElementById("project__screen");

let myTaskLocalStorage = JSON.parse(localStorage.getItem("list"));
let project__name = "Default";
project__screen.textContent = `Project name: ${project__name}`;
myTaskLocalStorage.forEach((element) => {
  if (element.project === project__name) {
    element.isShown = false;
  }
});
renderNewProject("Default");
// ===============================================================================================
// Default
renderTodo(myTaskLocalStorage, true);
console.log(myTaskLocalStorage);

// defaultTask.isShown = true;
// defaultTask1.isShown = true;
localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
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
  myTaskLocalStorage.push(task);
  localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
  renderTodo(myTaskLocalStorage, true);
});
let delete__button = getRemoveBtn();
delete__button.forEach((element) => {
  element.addEventListener("click", () => {
    renderTodo(myTaskLocalStorage, false);
    const taskId = element.getAttribute("data-taskId");
    let findIndexById = (element) => element.id === taskId;
    myTaskLocalStorage.splice(findIndexById, 1);
    localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
    console.log(myTaskLocalStorage);
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
        project__screen.textContent = `Project name: ${project__name}`;
        myTaskLocalStorage.forEach((element) => {
          element.isShown = false;
        });
        renderTodo(myTaskLocalStorage, false);
        let delete__button = getRemoveBtn();
        delete__button.forEach((element) => {
          element.addEventListener("click", () => {
            renderTodo(myTaskLocalStorage, false);
            const taskId = element.getAttribute("data-taskId");
            let findIndexById = (element) => element.id === taskId;
            myTaskLocalStorage.splice(findIndexById, 1);
            localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
            myTaskLocalStorage = newArray;
            console.log(myTaskLocalStorage);
          });
        });
        myTaskLocalStorage.forEach((element) => {
          console.log(`${element.project} === ${project__name}`);
          if (element.project === project__name) {
            element.isShown === true;
          }
        });

        console.log(myTaskLocalStorage);
      });
    });
  });
});
const projects = document.querySelectorAll(".render__name__project");
projects.forEach((element) => {
  element.addEventListener("click", () => {
    project__name = element.textContent;
    project__screen.textContent = `Project name: ${project__name}`;
    myTaskLocalStorage.forEach((element) => {
      element.isShown = false;
    });
    renderTodo(myTaskLocalStorage, false);
    let delete__button = getRemoveBtn();
    delete__button.forEach((element) => {
      element.addEventListener("click", () => {
        renderTodo(myTaskLocalStorage, false);
        const taskId = element.getAttribute("data-taskId");
        let findIndexById = (element) => element.id === taskId;
        myTaskLocalStorage.splice(findIndexById, 1);
        localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
        console.log(myTaskLocalStorage);
      });
    });
    myTaskLocalStorage.forEach((element) => {
      console.log(`${element.project} === ${project__name}`);
      if (element.project === project__name) {
        element.isShown === true;
      }
    });
    console.log(myTaskLocalStorage);
  });
});
export { content, myTaskLocalStorage, new__project, project__name };

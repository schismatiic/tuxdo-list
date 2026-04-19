import "./styles.css";
import { content, myTaskLocalStorage } from "./index.js";
import { renderChange } from "./renderChange.js";
import { compareAsc, format } from "date-fns";
import { createEditTask } from "./editArray.js";
import { createToDo } from "./todo.js";
import { project__name } from "./index.js";
import { removeTodo } from "./removeTodo.js";
import { getIndex } from "./getIndex.js";
let editTaskArray = [];
const editTask = (container, id, left, edit) => {
  // ===============================================================================================
  // Create element
  const edit__container = document.createElement("div");
  const h3 = document.createElement("h3");
  const name__input = document.createElement("input");
  const description__textarea = document.createElement("textarea");
  const due__input = document.createElement("input");
  const priority__select = document.createElement("select");
  const option__1 = document.createElement("option");
  const option__2 = document.createElement("option");
  const option__3 = document.createElement("option");
  const save__btn = document.createElement("button");
  // ===============================================================================================
  // Type
  name__input.type = "text";
  due__input.type = "date";
  // ===============================================================================================
  // Name
  priority__select.name = "priority";
  // ===============================================================================================
  // Value
  option__1.value = "high";
  option__2.value = "medium";
  option__3.value = "low";
  // ===============================================================================================
  // Class name
  edit__container.className = "edit__container";
  name__input.className = "name__input";
  description__textarea.className = "description__textarea";
  priority__select.className = "priority__select";
  due__input.className = "due__input";
  save__btn.className = "save__btn";
  // ===============================================================================================
  // Text content
  h3.textContent = "Edit task";
  option__1.textContent = "High";
  option__2.textContent = "Medium";
  option__3.textContent = "Low";
  save__btn.textContent = "Save";
  // ===============================================================================================
  // Placeholder
  name__input.placeholder = "Name";
  description__textarea.placeholder = "Description";
  // ===============================================================================================
  // Append child
  edit__container.appendChild(h3);
  edit__container.appendChild(name__input);
  edit__container.appendChild(description__textarea);
  priority__select.appendChild(option__1);
  priority__select.appendChild(option__2);
  priority__select.appendChild(option__3);
  edit__container.appendChild(due__input);
  edit__container.appendChild(priority__select);
  edit__container.appendChild(save__btn);
  container.appendChild(edit__container);

  save__btn.addEventListener("click", () => {
    left.appendChild(edit);
    let changeTask__id = id;
    let name__value = name__input.value;
    let description__value = description__textarea.value;
    let due__value = format(new Date(due__input.value), "dd MMMM yyyy");
    let priority__value = priority__select.value;
    const newTask = createToDo(
      changeTask__id,
      name__value,
      description__value,
      due__value,
      priority__value,
      false,
      project__name,
    );
    const index = getIndex(myTaskLocalStorage, changeTask__id);
    console.log(`index: ${index}`);
    console.log(myTaskLocalStorage);
    myTaskLocalStorage.splice(index, 1, newTask);
    localStorage.setItem("list", JSON.stringify(myTaskLocalStorage));
    renderChange(
      changeTask__id,
      name__value,
      description__value,
      due__value,
      priority__value,
    );
    edit__container.removeChild(h3);
    edit__container.removeChild(name__input);
    edit__container.removeChild(description__textarea);
    priority__select.removeChild(option__1);
    priority__select.removeChild(option__2);
    priority__select.removeChild(option__3);
    edit__container.removeChild(due__input);
    edit__container.removeChild(priority__select);
    edit__container.removeChild(save__btn);
    container.removeChild(edit__container);
  });
};
export { editTask };

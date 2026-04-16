import "./styles.css";
import { content } from "./index.js";
const editTask = (container) => {
  // ===============================================================================================
  // Create element
  const edit__container = document.createElement("div");
  const h3 = document.createElement("h3");
  const name__input = document.createElement("input");
  const save__btn = document.createElement("button");
  // ===============================================================================================
  // Type
  name__input.type = "text";
  // ===============================================================================================
  // Class name
  edit__container.className = "edit__container";
  name__input.className = "name__input";
  save__btn.className = "save__btn";
  // ===============================================================================================
  // Text content
  h3.textContent = "Edit task";
  save__btn.textContent = "Save";
  // ===============================================================================================
  // Placeholder
  name__input.placeholder = "Name";
  // ===============================================================================================
  // Append child
  edit__container.appendChild(h3);
  edit__container.appendChild(name__input);
  edit__container.appendChild(save__btn);
  container.appendChild(edit__container);

  save__btn.addEventListener("click", () => {
    let name__value = name__input.value;
    edit__container.removeChild(h3);
    edit__container.removeChild(name__input);
    edit__container.removeChild(save__btn);
    container.removeChild(edit__container);
  });
};
export { editTask };

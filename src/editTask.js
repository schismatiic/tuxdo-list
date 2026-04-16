import { content } from "./index.js";
const editTask = (container) => {
  // ===============================================================================================
  // Create element
  const edit__container = document.createElement("div");
  const h3 = document.createElement("h3");
  const section = document.createElement("section");
  // ===============================================================================================
  // Text content
  h3.textContent = "Edit task";
  // ===============================================================================================
  // Append child
  edit__container.appendChild(h3);
  container.appendChild(edit__container);
  console.log("a");
};
export { editTask };

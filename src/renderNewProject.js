import "./styles.css";
import { new__project } from "./index.js";
import { createProject } from "./project.js";
import { todo__box } from "./renderTodo.js";
const project = document.getElementById("project");
const project__container = document.getElementById("projects");
const content = document.getElementById("content");
const new__project__container = document.getElementById(
  "new__project__container",
);

const renderNewProject = (name) => {
  if (name === undefined) {
    // ===============================================================================================
    // Toggle
    new__project__container.removeChild(new__project);
    // ===============================================================================================
    // Create element
    const project__input = document.createElement("input");
    const create__button = document.createElement("button");
    // ===============================================================================================
    // Class name
    project__input.className = "project__input";
    create__button.className = "create__button";
    // ===============================================================================================
    // Placeholder
    project__input.placeholder = "Name";
    // ===============================================================================================
    // Text content
    create__button.textContent = "Create";
    // ===============================================================================================
    // Append child
    new__project__container.appendChild(project__input);
    new__project__container.appendChild(create__button);
    // ===============================================================================================
    // Create listener
    create__button.addEventListener("click", () => {
      // ===============================================================================================
      // Toggle
      new__project__container.appendChild(new__project);
      // ===============================================================================================
      // Set project name and create
      const project__name = project__input.value;
      // ===============================================================================================
      // Create element
      const render__project = document.createElement("div");
      const render__name = document.createElement("p");
      const render__delete = document.createElement("button");
      // ===============================================================================================
      // Class name
      render__name.className = "render__name__project";
      // ===============================================================================================
      // Text content
      render__name.textContent = project__name;
      render__delete.textContent = "X";
      new__project__container.removeChild(project__input);
      new__project__container.removeChild(create__button);
      render__project.className = "render__project";
      // ===============================================================================================
      // Append child
      render__project.appendChild(render__name);
      render__project.appendChild(render__delete);
      project__container.appendChild(render__project);
      // ===============================================================================================
      // Delete listener
      render__delete.addEventListener("click", () => {
        console.log(`Project deleted: ${project__name}`);
        project__container.removeChild(render__project);
      });
    });
  } else if (name !== undefined) {
    // ===============================================================================================
    // Set project name and create
    const project__name = name;
    // ===============================================================================================
    // Create element
    const render__project = document.createElement("div");
    const render__name = document.createElement("p");
    const render__delete = document.createElement("button");
    // ===============================================================================================
    // Class name
    render__name.className = "render__name__project";
    // ===============================================================================================
    // Text content
    render__name.textContent = project__name;
    render__delete.textContent = "X";
    render__project.className = "render__project";
    // ===============================================================================================
    // Append child
    render__project.appendChild(render__name);
    render__project.appendChild(render__delete);
    project__container.appendChild(render__project);
    // ===============================================================================================
    // Delete listener
    render__delete.addEventListener("click", () => {
      console.log(`Project deleted: ${project__name}`);
      project__container.removeChild(render__project);
    });
  }
};
export { renderNewProject };

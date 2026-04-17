import "./styles.css";
import { new__project } from "./index.js";
import { createProject } from "./project.js";
const project = document.getElementById("project");
const project__container = document.getElementById("projects");
const new__project__container = document.getElementById(
  "new__project__container",
);

const renderNewProject = () => {
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
  new__project__container.appendChild(project__input);
  new__project__container.appendChild(create__button);
  create__button.addEventListener("click", () => {
    const project__name = project__input.value;
    console.log(project__name);

    createProject(project__name);
    new__project__container.appendChild(new__project);

    const render__project = document.createElement("button");
    new__project__container.removeChild(project__input);
    new__project__container.removeChild(create__button);
    render__project.textContent = project__name;
    render__project.className = "render__project";
    project__container.appendChild(render__project);
  });
};
export { renderNewProject };

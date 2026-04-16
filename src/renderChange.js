const renderChange = (id, name, description, due, priority) => {
  const title__change = document.querySelectorAll(".todo__title");
  const description__change = document.querySelectorAll(".todo__description");
  const todo__date = document.querySelectorAll(".todo__date");
  const todo__priority = document.querySelectorAll(".todo__priority");
  title__change.forEach((element) => {
    const changeId = element.getAttribute("data-taskId");
    if (changeId === id) {
      element.textContent = name;
    }
  });
  description__change.forEach((element) => {
    const changeId = element.getAttribute("data-taskId");
    if (changeId === id) {
      element.textContent = `Description: ${description}`;
    }
  });
  todo__date.forEach((element) => {
    const changeId = element.getAttribute("data-taskId");
    if (changeId === id) {
      element.textContent = `Due: ${due}`;
    }
  });
  todo__priority.forEach((element) => {
    const changeId = element.getAttribute("data-taskId");
    if (changeId === id) {
      element.textContent = `Priority: ${priority}`;
    }
  });
};
export { renderChange };

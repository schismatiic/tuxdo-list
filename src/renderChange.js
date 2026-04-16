const renderChange = (id, name, description) => {
  const title__change = document.querySelectorAll(".todo__title");
  const description__change = document.querySelectorAll(".todo__description");
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
};
export { renderChange };

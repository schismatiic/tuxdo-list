function createToDo(id, title, description, dueDate, priority, isShown) {
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    isShown,
  };
}
export { createToDo };

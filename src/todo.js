function createToDo(
  id,
  title,
  description,
  dueDate,
  priority,
  isShown,
  project,
) {
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    isShown,
    project,
  };
}
export { createToDo };

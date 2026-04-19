function createToDo(
  id,
  title,
  description,
  dueDate,
  priority,
  isShown,
  project,
  projectId,
) {
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    isShown,
    project,
    projectId,
  };
}
export { createToDo };

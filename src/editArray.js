const createEditTask = (id, title, description, dueDate, priority, wasUsed) => {
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    wasUsed,
  };
};
export { createEditTask };

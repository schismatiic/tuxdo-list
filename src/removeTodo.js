const removeTodo = (array, taskId) => {
  const newArray = array.filter((task) => task.id !== taskId);
  return newArray;
};
export { removeTodo };

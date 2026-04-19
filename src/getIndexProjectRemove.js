const getIndexProjectRemove = (array, id) => {
  let arrayIndex = [];
  array.forEach((task, index) => {
    if (task.projectId === id) {
      console.log("aaaaaaaaaaaaaaaaaa");

      arrayIndex.push(index);
    }
  });
  return arrayIndex;
};
export { getIndexProjectRemove };

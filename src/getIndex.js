const getIndex = (array, taskId) => {
  let newIndex;
  array.forEach((element, index) => {
    if (element.id === taskId) {
      newIndex = index;
    }
  });
  return newIndex;
};
export { getIndex };

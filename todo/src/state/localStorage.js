export const loadState = () => {
  try {
    const persistedTodos = localStorage.getItem("todos");

    if (persistedTodos === null) return undefined;

    return JSON.parse(persistedTodos);
  } catch (e) {
    return undefined;
  }
};

export const saveState = store => {
  try {
    localStorage.setItem("todos", JSON.stringify(store));
  } catch (e) {
    //
  }
};

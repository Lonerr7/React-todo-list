export const filterTodos = (state, localTodos, filterProp) => {
  return {
    ...state,
    todos: localTodos.filter((t) => t.isCompleted === filterProp),
  };
};

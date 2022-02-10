const DELETE_TASK = 'DELETE_TASK';

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Task 2',
      isCompleted: true,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      };
    default:
      return state;
  }
};

export const deleteTaskAC = (id) => ({
  type: DELETE_TASK,
  id,
});

export default todoReducer;

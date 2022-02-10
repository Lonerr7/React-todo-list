const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Task 1',
      isCompleted: true,
    },
    {
      id: 2,
      task: 'Task 2',
      isCompleted: false,
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
    case TOGGLE_TASK_COMPLETION:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.id) {
            t.isCompleted = action.isCompleted;
            return t;
          } else {
            return t;
          }
        }),
      };
    default:
      return state;
  }
};

export const deleteTaskAC = (id) => ({
  type: DELETE_TASK,
  id,
});

export const toggleTaskCompletionAC = (id, isCompleted) => {
  return {
    type: TOGGLE_TASK_COMPLETION,
    id,
    isCompleted,
  };
};

export default todoReducer;

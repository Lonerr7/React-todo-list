import { nanoid } from 'nanoid';

const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';
const ADD_TASK = 'ADD_TASK';
const GET_LOCAL_TODOS = 'GET_LOCAL_TODOS';

const initialState = {
  todos: [],
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
    case ADD_TASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            task: action.taskText,
            isCompleted: false,
          },
        ],
      };
    case GET_LOCAL_TODOS:
      return {
        ...state,
        todos: [...action.todos],
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

export const addTaskAC = (taskText) => ({
  type: ADD_TASK,
  taskText,
});

export const getLocalTodosAC = (todos) => ({
  type: GET_LOCAL_TODOS,
  todos,
});

export const deleteTaskTC = (id) => (dispatch) => {
  dispatch(deleteTaskAC(id));
  const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  localStorage.setItem(
    'todos',
    JSON.stringify(localStorageTodos.filter((t) => t.id !== id))
  );
};

export const toggleTaskCompletionTC = (id, isCompleted) => (dispatch) => {
  dispatch(toggleTaskCompletionAC(id, isCompleted));
  const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  localStorage.setItem(
    'todos',
    JSON.stringify(
      localStorageTodos.map((t) => {
        if (t.id === id) {
          t.isCompleted = isCompleted;
          return t;
        } else {
          return t;
        }
      })
    )
  );
};

export const addTaskTC = (taskText) => (dispatch, getState) => {
  if (taskText.length > 0) dispatch(addTaskAC(taskText));
  localStorage.setItem('todos', JSON.stringify(getState().todo.todos));
};

export default todoReducer;

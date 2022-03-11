import { nanoid } from 'nanoid';
import { filterTodos } from '../helpers/reducerHelper';

const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';
const ADD_TASK = 'ADD_TASK';
const GET_LOCAL_TODOS = 'GET_LOCAL_TODOS';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
const EDIT_TASK_INFO = 'EDIT_TASK_INFO';
const FILTER_TODOS = 'FILTER_TODOS';
const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

const initialState = {
  todos: [],
  isInitialized: false,
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
    case DELETE_ALL_TASKS:
      return {
        ...state,
        todos: [],
      };
    case EDIT_TASK_INFO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.id) {
            t.task = action.newTaskText;
            return t;
          } else {
            return t;
          }
        }),
      };
    case FILTER_TODOS:
      const localTodos = JSON.parse(localStorage.getItem('todos'));
      if (action.filterProp === false) {
        return filterTodos(state, localTodos, action.filterProp);
      } else {
        return filterTodos(state, localTodos, action.filterProp);
      }
    case SET_IS_INITIALIZED:
      return {
        ...state,
        isInitialized: action.isInitialized,
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

export const getLocalTodosAC = (todos) => {
  return {
    type: GET_LOCAL_TODOS,
    todos,
  };
};

const deleteAllTasksAC = () => ({
  type: DELETE_ALL_TASKS,
});

const editTaskInfoAC = (id, newTaskText) => ({
  type: EDIT_TASK_INFO,
  id,
  newTaskText,
});

export const filterTodosAC = (filterProp) => ({
  type: FILTER_TODOS,
  filterProp,
});

export const setIsInitializedAC = (isInitialized) => ({
  type: SET_IS_INITIALIZED,
  isInitialized,
});

export const deleteTaskTC = (id) => (dispatch) => {
  dispatch(deleteTaskAC(id));
  const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  localStorage.setItem(
    'todos',
    JSON.stringify(localStorageTodos.filter((t) => t.id !== id))
  );
};

export const toggleTaskCompletionTC =
  (id, isCompleted) => (dispatch, getState) => {
    dispatch(toggleTaskCompletionAC(id, isCompleted));
    localStorage.setItem('todos', JSON.stringify(getState().todo.todos));
  };

export const addTaskTC = (taskText) => (dispatch, getState) => {
  if (taskText.length > 0) dispatch(addTaskAC(taskText));
  localStorage.setItem('todos', JSON.stringify(getState().todo.todos));
};

export const getLocalTodosTC = () => (dispatch, getState) => {
  if (
    getState().todo.todos.length === 0 &&
    localStorage.getItem('todos') &&
    localStorage.length > 0
  ) {
    dispatch(getLocalTodosAC(JSON.parse(localStorage.getItem('todos'))));
  }
};

export const deleteAllTasksTC = () => (dispatch) => {
  dispatch(deleteAllTasksAC());
  localStorage.removeItem('todos');
};

export const editTaskInfoTC = (id, newTaskText) => (dispatch, getState) => {
  dispatch(editTaskInfoAC(id, newTaskText));

  localStorage.setItem('todos', JSON.stringify(getState().todo.todos));
};

export default todoReducer;

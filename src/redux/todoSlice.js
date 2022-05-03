import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  todos: [],
  filteredTodos: [],
  isInitialized: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action) {
      state.todos.push({
        id: nanoid(8),
        taskText: action.payload.text,
        isCompleted: false,
      });
    },
    deleteTask(state, action) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    toggleTaskCompletion(state, action) {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          t.isCompleted = action.payload.isCompleted;
          return t;
        } else {
          return t;
        }
      });
    },
    changeTaskText(state, action) {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          t.taskText = action.payload.newTaskText;
          return t;
        } else {
          return t;
        }
      });
    },
    deleteAllTasks(state) {
      state.todos = [];
    },
    setFilteredTodos(state) {
      state.filteredTodos = state.todos;
    },
    filterTodos(state, action) {
      state.filteredTodos = state.todos.filter(
        (todo) => todo.isCompleted === action.payload.isCompleted
      );
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  changeTaskText,
  deleteAllTasks,
  setFilteredTodos,
  filterTodos
} = todoSlice.actions;
export default todoSlice.reducer;

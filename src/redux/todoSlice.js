import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  todos: [],
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
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, changeTaskText } =
  todoSlice.actions;
export default todoSlice.reducer;

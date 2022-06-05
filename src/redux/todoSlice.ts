import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodosState } from '../types/types';

const initialState: TodosState = {
  todos: [],
  isInitialized: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ text: string }>) {
      state.todos.push({
        id: nanoid(8),
        taskText: action.payload.text,
        isCompleted: false,
      });
    },
    deleteTask(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    toggleTaskCompletion(
      state,
      action: PayloadAction<{ id: string; isCompleted: boolean }>
    ) {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          t.isCompleted = action.payload.isCompleted;
          return t;
        } else {
          return t;
        }
      });
    },
    changeTaskText(
      state,
      action: PayloadAction<{ id: string; newTaskText: string }>
    ) {
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
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  changeTaskText,
  deleteAllTasks,
} = todoSlice.actions;
export default todoSlice.reducer;

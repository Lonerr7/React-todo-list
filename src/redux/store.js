import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

window.store = store;
export default store;

import { createSelector } from '@reduxjs/toolkit';
import { Filters, Todo } from '../types/types';

export const selectAllTodos = (state: any) => state.todos.todos;
export const selectActiveFilter = (state: any) => state.filters.filter;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos: Array<Todo>, activeFilter) => {
    if (activeFilter === Filters.all) return allTodos;

    if (activeFilter === Filters.completed) {
      return allTodos.filter((t) => t.isCompleted === true);
    }

    return allTodos.filter((t) => t.isCompleted === false);
  }
);

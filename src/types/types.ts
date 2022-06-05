export type Todo = {
  id: string;
  taskText: string;
  isCompleted: boolean;
};

export type TodosState = {
  todos: Array<Todo>;
  isInitialized: boolean;
};

export enum Filters {
  all = 'all',
  completed = 'completed',
  uncompleted = 'uncompleted',
}

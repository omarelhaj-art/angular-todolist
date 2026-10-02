export interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ToDoRes {
  todos: ToDo[];
}

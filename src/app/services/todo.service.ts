import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToDo, ToDoRes } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  // https://dummyjson.com/todos
  private httpClient = inject(HttpClient);

  getTodoes() {
    return this.httpClient.get<ToDoRes>('https://dummyjson.com/todos');
  }

  addTodo(text: string) {
    return this.httpClient.post<ToDo>('https://dummyjson.com/todos/add', {
      todo: text,
      completed: false,
      userId: 1,
    });
  }
}

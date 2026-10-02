import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDo } from '../../models/todo.model';
import { uppercasePipe } from '../../pipes/uppercase.pipe';

@Component({
  imports: [uppercasePipe],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo implements OnInit {
  private todoService = inject(TodoService);
  todoList = signal<ToDo[]>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.todoService.getTodoes().subscribe({
      next: (resData) => this.todoList.set(resData.todos),
    });
  }

  addTodo(input: HTMLInputElement) {
    if (this.isLoading()) return;
    this.isLoading.set(true);

    this.todoService.addTodo(input.value).subscribe({
      next: (resTodo) => {
        const newTodo: ToDo = { ...resTodo, id: Date.now() };
        this.todoList.update((oldList) => [newTodo, ...oldList]);
        input.value = '';
      },
      error: () => this.isLoading.set(false),
      complete: () => this.isLoading.set(false),
    });
  }
}

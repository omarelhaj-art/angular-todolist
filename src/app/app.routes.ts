import { Routes } from '@angular/router';
import { Todo } from './pages/todo/todo';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: Todo,
  },
  {
    path: 'about',
    component: About,
  },
];

// homework - add new todo form and show the todo on the top
// getlab

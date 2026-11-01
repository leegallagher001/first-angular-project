import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class TodosComponent implements OnInit {
  todoService = inject(Todos);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
    .getTodosFromApi() // goes into services/todos.ts and call the getTodosFromApi() method which makes an API call to the jsonplaceholder API and returns an observable of type Array<Todo>
    .pipe(
      catchError((err) => {
        console.log(err);
        throw(err);
      })
    )
    .subscribe((todos) => { // returns the data from the API call and sets it in the signal
      this.todoItems.set(todos);
    });
  }
}

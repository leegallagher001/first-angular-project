import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs/operators';
import { TodoItem } from '../../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
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

  updateTodoItem(todoItem : Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    });
  };
}

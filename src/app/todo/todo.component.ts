import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  newTodo = '';
  todos: any[] = [];

  error = false;

  addTodo() {
    this.error = false;
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    } else {
      this.error = true;
    }
  }

  remove(index: any) {
    this.todos.splice(index, 1);
  }


}

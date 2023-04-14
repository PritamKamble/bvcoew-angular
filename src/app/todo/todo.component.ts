import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(
    private router: Router,
    public todoService: TodoService
  ) {}

  newTodo = '';
  error = false;

  addTodo() {
    this.error = false;
    if (this.newTodo) {
      this.todoService.todos.push(this.newTodo);
      this.newTodo = '';
    } else {
      this.error = true;
    }
  }

  remove(index: any) {
    this.todoService.todos.splice(index, 1);
  }

  onLogoutClick() {
    this.router.navigate(['login']);
    this.todoService.isLoggedIn = false;
  }


}

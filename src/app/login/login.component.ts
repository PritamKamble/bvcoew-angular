import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private todoService: TodoService
  ) {}

  onLoginClick() {
    console.log("called onLoginClick");
    this.todoService.isLoggedIn = true;
    this.router.navigate(['todo']);
  }

  onRegisterLinkClick() {
    this.router.navigate(['register']);
  }
}

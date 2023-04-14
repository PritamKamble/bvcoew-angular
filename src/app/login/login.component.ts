import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) {}

  onLoginClick() {
    console.log("called onLoginClick");
    this.router.navigate(['todo']);
  }

  onRegisterLinkClick() {
    this.router.navigate(['register']);
  }
}

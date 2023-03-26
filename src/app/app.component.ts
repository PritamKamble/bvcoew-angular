import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  password = '';

  isLoggedIn = false;
  isLoggedInFailed = false;

  login() {
    this.isLoggedIn = false;
    this.isLoggedInFailed = false;

    if (this.username == 'admin' && this.password == 'admin') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedInFailed = true;
    }
  }
}

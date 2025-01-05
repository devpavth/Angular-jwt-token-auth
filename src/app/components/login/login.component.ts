import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  onLogin(){
    console.log("email:", this.email);
    console.log("password:", this.password);
  }
}

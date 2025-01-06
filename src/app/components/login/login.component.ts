import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  private authService = inject(AuthService);
  private route = inject(Router);

  onLogin(){
    console.log("email:", this.email);
    console.log("password:", this.password);

    const result = this.authService.login({email: this.email, password: this.password});

    if(result.success){
      alert('Login successfully');
      this.route.navigate(['/dashboard']);
      this.email = '';
      this.password = '';
    }else{
      alert(result.message);
    }
  }
}

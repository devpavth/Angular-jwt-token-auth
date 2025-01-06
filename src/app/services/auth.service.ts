import { inject, Injectable } from '@angular/core';
import { BackendServiceService } from './backend-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BackendResponse = inject(BackendServiceService);
  private route = inject(Router);

  constructor() { }

  login(credentials: {email: string; password: string}){
    const response = this.BackendResponse.login(credentials);

    if(response.success && response.token){
      localStorage.setItem('token', response.token);
    }else{
      console.log("Login failed or token is undefined");
    }
    return response;
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

  isAuthenticated(){
    const token = localStorage.getItem('token');
    return token ? this.BackendResponse.validateToken(token) : false;
  }
}

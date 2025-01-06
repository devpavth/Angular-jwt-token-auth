import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private fakeToken = 'fake-jwt-token';

  login(credentials: {email: string, password: string}){
    if(credentials.email === 'test@example.com' && credentials.password === 'password123'){
      return {success: true, token: this.fakeToken};
    }
    return {success: false, message: 'Invaild credentials'};
  }

  validateToken(token: string){
    return token === this.fakeToken;
  }

  constructor() { }
}

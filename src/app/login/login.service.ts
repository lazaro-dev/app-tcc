import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  userValid: User = {
    name: 'lazaro',
    email: 'lazaro@teste.com',
    password: '12345',
    accessToken: false,
  };

  constructor(private router: Router) { }

  auth(user: User): void {
    if(this.userValid.email===this.user.email&&this.userValid.password===this.user.password){
      this.user.name = this.userValid.name;
      this.user.email = this.userValid.email;
      this.user.accessToken = true;
      this.router.navigate(['/folder']);
    }else{

    }
  }
}

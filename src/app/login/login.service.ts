import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../notify/notify.service';
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

  constructor(private router: Router,private notifySevice: NotifyService) { }

  auth(user: User): void {
    console.log(user);
    if((this.userValid.email===user.email)&&(this.userValid.password===user.password)){
      this.user= this.userValid;
      this.user.accessToken = true;
      this.router.navigate(['/home']);
    }else{
      this.notifySevice.presentNotify();
    }
  }
}

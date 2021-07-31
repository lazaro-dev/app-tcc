import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from './notify.service';
import { User } from '../models/user.model';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  // public userObserver: BehaviorSubject<boolean> = new BehaviorSubject(false)

  userValid: User = {
    name: 'lazaro',
    email: 'lazaro@teste.com',
    password: '12345',
    accessToken: false,
  };

  constructor(private router: Router,private notifySevice: NotifyService) { }

  auth(user: User): void {   
    if((this.userValid.email===user.email)&&(this.userValid.password===user.password)){
      this.user = this.userValid;
      this.user.accessToken = true;
      this.router.navigate(['/home']);
    }else{
      this.notifySevice.presentNotify();
    }
  }

  validAuth(): boolean {
    // return this.userObserver.asObservable()
    return this.user !== undefined;
  }
}

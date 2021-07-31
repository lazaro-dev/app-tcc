import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public loginForm

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('lazaro@teste.com', [Validators.required, Validators.email]),
      password: new FormControl('12345', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.auth(this.loginForm.value as User);
  }

}

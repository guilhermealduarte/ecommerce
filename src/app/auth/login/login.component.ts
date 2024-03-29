import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  constructor(
    private formBuilder: FormBuilder, 
    private service: AuthService){

  }

  loginForm = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  object(): Auth{
    return {
      email: this.loginForm.get('username')?.value!,
      password: this.loginForm.get('password')?.value!,
    }
  }

  loginClick(){
    const object = this.object();

    this.service.login(object);
  }

  recoverPasswordClick(){
    alert('aquiii');
  }
}

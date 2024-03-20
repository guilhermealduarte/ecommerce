import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lojavirtualApp';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService){

  }

  loginForm = this.formBuilder.group({
    id: [],
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  userObject(): User{
    return {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!
    }
  }

  loginClick(){
    const user = this.userObject();

    const response = this.loginService.login(user);

    console.info('Email: ' + user.email + ' Senha: ' + user.password);
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router, title: Title){

  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn() == true){
      this.router.navigate(['dashboard']);
    }
    else{
      this.router.navigate(['login']);
    }
  }
  
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.urlApi + 'login';
  
  constructor(private http: HttpClient) {

  }

  login(user: User){
    
    return this.http.post<String>(this.url, user).subscribe({
      next: (response) => {
        console.info(response);
        alert('OK');
      },
      error:(error) => {
        alert('ERRO');
        console.info(error);
      }
    });
  }
}

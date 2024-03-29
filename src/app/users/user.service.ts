import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.urlApi + 'users';

  constructor(private http: HttpClient, private router: Router) { 

  }

  list() {
    return this.http.get<User[]>(this.url);
  }

  create(object: User){
    
    let headers = new HttpHeaders({
      //'Content-type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem("authorization")
    });

    const data = {
      "name": object.name
    }
    
    let options = { headers: headers };

    return this.http.post<String>(this.url, data, options).subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      },
      error:(error) => {
        console.info(error.error.text);
      }
    });

  }
}

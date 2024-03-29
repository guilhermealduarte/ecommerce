import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.urlApi + 'categories';

  constructor(private http: HttpClient, private router: Router) { 

  }

  list() {
    return this.http.get<Category[]>(this.url);
  }

  create(object: Category){
    
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
        this.router.navigate(['categories']);
      },
      error:(error) => {
        console.info(error.error.text);
      }
    });

  }
}

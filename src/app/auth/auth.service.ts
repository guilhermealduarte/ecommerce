import { Injectable } from '@angular/core';
import { environment, secrets } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.urlApi;
  private clientId = secrets.clientId;
  private clientSecret = secrets.clientSecret;
  
  constructor(private http: HttpClient, private router: Router) {

  }

  login(auth: Auth){
       
    let params = new URLSearchParams();
    params.append('username',auth.email as string);
    params.append('password',auth.password as string);    
    params.append('grant_type','password');
    
    params.append('client_id', this.clientId);
    params.append('clientSecret', this.clientSecret);
    
    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic '+ btoa(this.clientId + ':' + this.clientSecret)
    });
    
    let options = { headers: headers };

    return this.http.post<String>(this.url + 'oauth2/token', params.toString(), options).subscribe({
      next: (response) => {
        var responseJson = JSON.stringify(response);
        var jwt = JSON.parse(responseJson);
        var token = jwt.token_type + ' ' + jwt.access_token;

        this.setToken(token);
        //localStorage.setItem("authorization", token);

        this.router.navigate(['dashboard']);
      },
      error:(error) => {
        console.info(error.error.text);
      }
    });
  }
  
  logout(): void{
    localStorage.removeItem("authorization");

    this.router.navigate(['login']);
  }

  setToken(token: String){
    localStorage.setItem("authorization", token.toString());
  }

  getToken(){
    return localStorage.getItem("authorization");
  }

  getMe(){
    var token = '' + localStorage.getItem('authorization');
    
    var request = new XMLHttpRequest();
    request.open("GET", this.url + 'users/me', false);
    request.setRequestHeader('Authorization', token);
    request.send();

    return request.responseText;

    //var responseMe = request.responseText;
    //var me = JSON.parse(responseMe);
    //localStorage.setItem("roles", me.roles);

    /*
    let header = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    let options = {
       headers: header,
    };
    
    return this.http.get<String>(this.url + 'users/me', options);
    */
  }

  isLoggedIn(){
    var authorization = '' + localStorage.getItem("authorization");

    return authorization !== '' && authorization !== null && authorization !== 'null';
  }
}

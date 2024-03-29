import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor{

  constructor(){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var authorization = '' + localStorage.getItem("authorization");

    if(authorization !== '' && authorization !== null && authorization !== 'null'){

      const authRequest = request.clone({
        headers: request.headers.set('Authorization', authorization)
      });

      return next.handle(authRequest);
    }
    else{
      return next.handle(request);
    }
    
  }
   
}

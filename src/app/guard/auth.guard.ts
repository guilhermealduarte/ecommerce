import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  var userAuthority = inject(AuthService).isLoggedIn();

  var rolesUser = JSON.parse(inject(AuthService).getMe()).roles;
  var rolesPage = JSON.parse(JSON.stringify(route.data)).role;
  var count  = 0;
  
  rolesUser.forEach((element: any) => {
    rolesPage.find((role: any) => {
      if(role === element){
        count ++;
      }
    });
  });
  
  var roteAuthority = false;
  if(count > 0)
    roteAuthority = true;

  return (userAuthority && roteAuthority);
};

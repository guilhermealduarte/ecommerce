import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate:[authGuard],
    data: {
      title: 'Listagem de Usuários',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
    canActivate:[authGuard],
    data: {
      title: 'Cadastro de Usuário',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
    canActivate:[authGuard],
    data: {
      title: 'Edição de Usuário',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'users/detail/:id',
    component: UserDetailComponent,
    canActivate:[authGuard],
    data: {
      title: 'Detalhe do Usuário',
      role: ['ROLE_ADMIN']
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
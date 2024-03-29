import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate:[authGuard],
    data: {
      title: 'Listagem de Categorias',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent,
    canActivate:[authGuard],
    data: {
      title: 'Cadastro de Categoria',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'categories/edit/:id',
    component: CategoryEditComponent,
    canActivate:[authGuard],
    data: {
      title: 'Edição de Categoria',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'categories/detail/:id',
    component: CategoryDetailComponent,
    canActivate:[authGuard],
    data: {
      title: 'Detalhe da Categoria',
      role: ['ROLE_ADMIN']
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
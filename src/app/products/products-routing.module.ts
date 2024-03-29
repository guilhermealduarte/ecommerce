import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    canActivate:[authGuard],
    data: {
      title: 'Listagem de Produtos',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
    canActivate:[authGuard],
    data: {
      title: 'Cadastro de Produto',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'products/edit',
    component: ProductEditComponent,
    canActivate:[authGuard],
    data: {
      title: 'Edição de Produto',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'products/detail',
    component: ProductDetailComponent,
    canActivate:[authGuard],
    data: {
      title: 'Detalhe de Produto',
      role: ['ROLE_ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

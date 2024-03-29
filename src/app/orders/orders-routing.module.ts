import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent,
    canActivate:[authGuard],
    data: {
      title: 'Listagem de Pedidos',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'orders/create',
    component: OrderCreateComponent,
    canActivate:[authGuard],
    data: {
      title: 'Cadastro de Pedido',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'orders/edit',
    component: OrderEditComponent,
    canActivate:[authGuard],
    data: {
      title: 'Edição do Pedido',
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'orders/detail',
    component: OrderDetailComponent,
    canActivate:[authGuard],
    data: {
      title: 'Detalhe do Pedido',
      role: ['ROLE_ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

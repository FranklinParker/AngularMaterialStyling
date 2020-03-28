import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersHomeComponent} from './components/orders-home/orders-home.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

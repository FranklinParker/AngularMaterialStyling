import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: {page: 'homePage'}}

  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    data: {animation: {page: 'ordersPage'}}

  },
  {
    path: 'flex',
    loadChildren: './flex/flex.module#FlexModule',
    data: {animation: {page: 'flexPage'}}

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

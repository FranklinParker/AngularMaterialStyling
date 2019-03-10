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

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

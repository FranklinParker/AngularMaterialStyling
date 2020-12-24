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
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    data: {animation: {page: 'ordersPage'}}

  },
  {
    path: 'flex',
    loadChildren: () => import('./flex/flex.module').then(m => m.FlexModule),
    data: {animation: {page: 'flexPage'}}

  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule),
    data: {animation: {page: 'gridPage'}}

  },
  {
    path: 'floating',
    loadChildren: () => import('./floating/floating.module').then(m => m.FloatingModule),
    data: {animation: {page: 'floatingPage'}}

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

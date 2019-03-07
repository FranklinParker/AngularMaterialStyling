import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersHomeComponent } from './components/orders-home/orders-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [OrdersHomeComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }

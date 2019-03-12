import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexHomeComponent } from './components/flex-home/flex-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FlexHomeComponent],
  imports: [
    CommonModule,
    FlexRoutingModule,
    SharedModule
  ]
})
export class FlexModule { }

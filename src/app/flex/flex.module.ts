import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexHomeComponent } from './components/flex-home/flex-home.component';
import {SharedModule} from '../shared/shared.module';
import { FlexItemComponent } from './components/flex-item/flex-item.component';

@NgModule({
  declarations: [FlexHomeComponent, FlexItemComponent],
  imports: [
    CommonModule,
    FlexRoutingModule,
    SharedModule
  ]
})
export class FlexModule { }

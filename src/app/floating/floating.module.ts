import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingRoutingModule } from './floating-routing.module';
import { FloatingHomeComponent } from './components/floating-home/floating-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FloatingHomeComponent],
  imports: [
    CommonModule,
    FloatingRoutingModule,
    SharedModule
  ]
})
export class FloatingModule { }

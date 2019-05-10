import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingRoutingModule } from './floating-routing.module';
import { FloatingHomeComponent } from './components/floating-home/floating-home.component';
import {SharedModule} from '../shared/shared.module';
import { FloatingExpandOneComponent } from './components/floating-expand-one/floating-expand-one.component';
import { FloatingMoveDownComponent } from './components/floating-move-down/floating-move-down.component';

@NgModule({
  declarations: [FloatingHomeComponent, FloatingExpandOneComponent, FloatingMoveDownComponent],
  imports: [
    CommonModule,
    FloatingRoutingModule,
    SharedModule
  ]
})
export class FloatingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingRoutingModule } from './floating-routing.module';
import { FloatingHomeComponent } from './components/floating-home/floating-home.component';

@NgModule({
  declarations: [FloatingHomeComponent],
  imports: [
    CommonModule,
    FloatingRoutingModule
  ]
})
export class FloatingModule { }

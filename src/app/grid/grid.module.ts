import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridHomeComponent } from './components/grid-home/grid-home.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';

@NgModule({
  declarations: [GridHomeComponent, GridItemComponent],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }

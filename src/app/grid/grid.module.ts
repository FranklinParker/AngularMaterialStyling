import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridHomeComponent } from './components/grid-home/grid-home.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { GridNumbersComponent } from './components/grid-numbers/grid-numbers.component';
import {SharedModule} from '../shared/shared.module';
import { GridNamesComponent } from './components/grid-names/grid-names.component';
import { GridMinMaxComponent } from './components/grid-min-max/grid-min-max.component';

@NgModule({
  declarations: [GridHomeComponent, GridItemComponent, GridNumbersComponent, GridNamesComponent, GridMinMaxComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    SharedModule
  ]
})
export class GridModule { }

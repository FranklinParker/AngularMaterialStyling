import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlexHomeComponent} from './components/flex-home/flex-home.component';

const routes: Routes = [
  {
    path: '',
    component: FlexHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexRoutingModule { }

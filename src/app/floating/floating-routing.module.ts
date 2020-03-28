import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloatingHomeComponent} from './components/floating-home/floating-home.component';

const routes: Routes = [
  {
    path: '',
    component: FloatingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridHomeComponent} from './components/grid-home/grid-home.component';

const routes: Routes = [
  {
    path: '',
    component: GridHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaptabPage } from './maptab.page';

const routes: Routes = [
  {
    path: '',
    component: MaptabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaptabPageRoutingModule {}

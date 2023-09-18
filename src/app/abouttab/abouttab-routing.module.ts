import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbouttabPage } from './abouttab.page';

const routes: Routes = [
  {
    path: '',
    component: AbouttabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbouttabPageRoutingModule {}

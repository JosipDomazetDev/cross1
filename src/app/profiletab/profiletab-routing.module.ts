import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiletabPage } from './profiletab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiletabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiletabPageRoutingModule {}

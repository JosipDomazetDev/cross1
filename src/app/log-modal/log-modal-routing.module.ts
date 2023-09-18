import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogModalPage } from './log-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LogModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogModalPageRoutingModule {}

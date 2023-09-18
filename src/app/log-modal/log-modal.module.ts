import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogModalPageRoutingModule } from './log-modal-routing.module';

import { LogModalPage } from './log-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogModalPageRoutingModule
  ],
  declarations: [LogModalPage]
})
export class LogModalPageModule {}

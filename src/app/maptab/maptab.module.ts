import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaptabPageRoutingModule } from './maptab-routing.module';

import { MaptabPage } from './maptab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaptabPageRoutingModule
  ],
  declarations: [MaptabPage]
})
export class MaptabPageModule {}

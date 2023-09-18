import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbouttabPageRoutingModule } from './abouttab-routing.module';

import { AboutTabPage } from './abouttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbouttabPageRoutingModule
  ],
  declarations: [AboutTabPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AbouttabPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbouttabPageRoutingModule } from './abouttab-routing.module';

import { AbouttabPage } from './abouttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbouttabPageRoutingModule
  ],
  declarations: [AbouttabPage]
})
export class AbouttabPageModule {}

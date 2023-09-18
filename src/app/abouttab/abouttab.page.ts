import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-abouttab',
  templateUrl: './abouttab.page.html',
  styleUrls: ['./abouttab.page.scss'],
})
export class AboutTabPage {
  version: string = environment.APP_VERSION;
  developerInfo = {
    name: 'Josip Domazet',
    email: 'josip.domazet.corp@gmail.com',
  };

  constructor(
    private modalController: ModalController
  ) {}

  showLogs() {

  }


}


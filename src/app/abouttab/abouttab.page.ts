import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';
import {ModalController} from '@ionic/angular';
import {CustomLogService} from "../custom-log.service";
import {LogModalPage} from "../log-modal/log-modal.page";

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
    private logService: CustomLogService,
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.logService.log('AboutTabPage was opened');
  }

  async showLogs() {
    this.logService.log('Showing logs');
    await this.presentModal();
  }

  async presentModal() {
    const logs = this.logService.getLogs();
    const modal = await this.modalController.create({
      component: LogModalPage,
      componentProps: {
        logs: logs, // Pass the logs data to the modal
      },
    });
    await modal.present();
  }
}

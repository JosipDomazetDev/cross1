import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.page.html',
  styleUrls: ['./log-modal.page.scss'],
})
export class LogModalPage {
  @Input() logs!: string[];

  constructor(private modalController: ModalController
  ) {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

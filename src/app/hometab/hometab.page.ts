import { Component, OnInit } from '@angular/core';
import { CustomLogService } from '../custom-log.service'; // Import LogService

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  constructor(private logService: CustomLogService) { }

  ngOnInit() {
    this.logService.log('HometabPage was opened');
  }
}

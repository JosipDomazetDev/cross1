import { Component, OnInit } from '@angular/core';
import { CustomLogService } from '../custom-log.service'; // Import LogService

@Component({
  selector: 'app-maptab',
  templateUrl: './maptab.page.html',
  styleUrls: ['./maptab.page.scss'],
})
export class MaptabPage implements OnInit {

  constructor(private logService: CustomLogService) { }

  ngOnInit() {
    // Log that the page was opened when it initializes
    this.logService.log('MaptabPage was opened');
  }
}

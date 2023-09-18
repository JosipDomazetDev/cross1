import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service'; // Import LogService

@Component({
  selector: 'app-profiletab',
  templateUrl: './profiletab.page.html',
  styleUrls: ['./profiletab.page.scss'],
})
export class ProfiletabPage implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Log that the page was opened when it initializes
    this.logService.log('ProfiletabPage was opened');
  }
}

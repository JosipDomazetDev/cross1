import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private logs: string[] = [];

  constructor() {
  }

  log(message: string) {
    message = new Date().toISOString() + ': ' + message;
    console.log(message);
    this.logs.push(message);
  }

  getLogs() {
    return this.logs;
  }
}

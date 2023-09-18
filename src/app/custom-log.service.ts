import {Injectable} from '@angular/core';
import { Logger, LoggingService } from "ionic-logging-service";

@Injectable({
  providedIn: 'root',
})
export class CustomLogService {
  private logger: Logger;
  private logs: string[] = [];

  constructor(
    loggingService: LoggingService) {

    this.logger = loggingService.getLogger("CROSS-LOG");
    const methodName = "ctor";
    this.logger.entry(methodName);
    this.logger.exit(methodName);
  }


  log(message: string) {
    message = new Date().toISOString() + ': ' + message;

    this.logger.entry(message);
    this.logs.push(message);
  }

  getLogs() {
    return this.logs.reverse();
  }
}

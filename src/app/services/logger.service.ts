import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

export enum logLevel {
  Trace = 'Trace',
  Debug = 'Debug',
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error',
  Fatal = 'Fatal'
}

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor(private datePipe: DatePipe) { }

  log(level: logLevel, msg: any, sender: string) {

    var sep = '|'
    var timeStamp = new Date();
    var timeStampFormat = "yyyy-MM-dd HH:mm:ss.SSS ";
    var strLevel = level.toString().padEnd(10);
    sender = sender.indexOf('_') == 0 ? sender.substring(1) : sender;
    sender = sender.padEnd(30);

    console.log(this.datePipe.transform(timeStamp,timeStampFormat) + sep + strLevel + sep + sender + sep + JSON.stringify(msg));
  }

}

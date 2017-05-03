import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {}

  sendInfo(msg : string){
    console.log(msg);
  }
}

import { Injectable } from '@angular/core';
import {LoggerService} from "./logger-service.service";

@Injectable()
export class ProductService {
  constructor(private loggerService : LoggerService) { }

  getProduct():Product{
    this.loggerService.sendInfo('getProduct被调用');
    return new Product(0,'iphone7',5988,'最新款的苹果手机');
  }
}

export class Product{
  constructor(
    public id : number,
    public name : string,
    public price : number,
    public desc : string
  ){}
}

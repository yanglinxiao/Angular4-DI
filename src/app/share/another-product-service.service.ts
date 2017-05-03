import { Injectable } from '@angular/core';
import {Product} from "./product-service.service";
import {LoggerService} from "./logger-service.service";

@Injectable()
export class AnotherProductService {
  constructor(private loggerService : LoggerService) {}

  getProduct():Product{
    return new Product(1,'SamsungS7',4988,'最新款的三星手机');
  }
}


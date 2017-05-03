import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AnotherProductComponent } from './another-product/another-product.component';
import {ProductService} from "./share/product-service.service";
import {LoggerService} from "./share/logger-service.service";
import {AnotherProductService} from "./share/another-product-service.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AnotherProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LoggerService,isDev: boolean) => {
        if(isDev){
          return new ProductService(logger);
        }else{
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService,'IS_DEV_ENV']
    },LoggerService,{
      provide: 'IS_DEV_ENV',
      useValue: false
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

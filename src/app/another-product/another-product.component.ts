import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../share/product-service.service";
import {AnotherProductService} from "../share/another-product-service.service";

@Component({
  selector: 'app-another-product',
  templateUrl: './another-product.component.html',
  styleUrls: ['./another-product.component.css'],
  // providers:[
  //   {
  //     provide: ProductService,
  //     useClass: AnotherProductService
  //   }
  // ]
})
export class AnotherProductComponent implements OnInit {

  private product : Product;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductService, Product} from "../share/product-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product : Product;
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}

import {Component, OnInit} from '@angular/core';

import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent implements OnInit {
  products: Product[] = [];
  showSelected = false;
  product: Product;

  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    this.products = await this.productService.getProducts();
  }

  onProductSelected(product: Product) {
    this.showSelected = true;
    this.product = product;
  }

}

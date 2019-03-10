import {Component, OnInit} from '@angular/core';

import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {showStateTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss'],
  animations: [
    showStateTrigger
]
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

  getProductRow(start: number, count: number) {
    return this.products.slice(start, start + count);
  }

  getProductRows() {
    const result = Math.ceil(this.products.length / 3);
    const rows: number [] = [];
    let startPos  = 0;
    while (startPos < result) {
      rows.push(startPos++);

    }
    return rows;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-orders-products',
  templateUrl: './orders-products.component.html',
  styleUrls: ['./orders-products.component.scss']
})
export class OrdersProductsComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}

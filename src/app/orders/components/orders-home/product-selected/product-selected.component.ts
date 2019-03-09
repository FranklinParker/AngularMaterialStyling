import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-selected',
  templateUrl: './product-selected.component.html',
  styleUrls: ['./product-selected.component.scss']
})

export class ProductSelectedComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}

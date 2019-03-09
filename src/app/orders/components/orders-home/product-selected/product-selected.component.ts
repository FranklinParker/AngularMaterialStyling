import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-selected',
  templateUrl: './product-selected.component.html',
  styleUrls: ['./product-selected.component.scss']
})

export class ProductSelectedComponent implements OnInit {
  @Input() product: Product;
  @Output() closePopup = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.closePopup.emit();
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {animate, state, style, transition, trigger,} from '@angular/animations';

@Component({
  selector: 'app-orders-products',
  templateUrl: './orders-products.component.html',
  styleUrls: ['./orders-products.component.scss'],
  animations: [
    trigger('cardSideState', [
      state('front',
        style({
          transform: 'rotateY(0)'
        })
      ),
      state('back',
        style({
          transform: 'rotateY(180deg)'
        })
      ),
      transition('* => *', animate('500ms'))
    ])
  ]
})
export class OrdersProductsComponent implements OnInit {
  @Input() product: Product;
  cardSide = 'front';

  constructor() {
  }

  ngOnInit() {
  }

  onFlip() {
    this.cardSide = this.cardSide === 'front' ? 'back' : 'front';
  }

}

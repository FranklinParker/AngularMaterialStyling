import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
      transition('* => *', animate('500ms ease-out'))
    ])
  ]
})
export class OrdersProductsComponent implements OnInit {
  @Input() product: Product;
  @Output() productSelected: EventEmitter<Product> = new EventEmitter<Product>();

  cardSide = 'front';
  backImage: string;

  constructor() {
  }

  ngOnInit() {
  }

  onFlip() {
    this.cardSide = this.cardSide === 'front' ? 'back' : 'front';
  }

  onSelect() {
    this.productSelected.emit(this.product);
  }

  getBackGround() {
    if (this.cardSide === 'front') {
      return {
        'background-image':
          'linear-gradient( to right bottom, rgba(10, 10, 10, 0.3), rgba(10, 10, 10, 0.3)), url(' + this.product.backgroundImage + ')',
        'background-position': 'center',
        'background-attachment': 'fixed',
        color: 'white'
      };
    } else {
      return {};
    }

  }

}

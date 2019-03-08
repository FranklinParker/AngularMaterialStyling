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
      transition('* => *', animate('500ms ease-out'))
    ])
  ]
})
export class OrdersProductsComponent implements OnInit {
  @Input() product: Product;
  cardSide = 'front';
  backImage: string;

  constructor() {
  }

  ngOnInit() {
  }

  onFlip() {
    this.cardSide = this.cardSide === 'front' ? 'back' : 'front';
  }

  getBackGround() {
    if (this.cardSide === 'front') {
      return {
        'background-image':
          'url(' + this.product.backgroundImage + ')'
      };
    } else {
      return {};
    }

  }

  getBackgroundImageStyle() {
    const imageUrl = `url(../../../../assets/img/${this.product.backgroundImage})`;
    const backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.7), rgba(100, 100, 100, 0.7)) ${imageUrl}  `;
    this.backImage = backgroundImage;
    return this.cardSide === 'front' ? {
      'background-image': backgroundImage,
      'background-size': 'cover',
      height: '30rem'

    } : {};
    /***
     * background-image: linear-gradient(rgba(100, 100, 100, 0.7), rgba(100, 100, 100, 0.7)),
     url(../../../../assets/img/home_background.jpeg);
     background-size: cover;
     background-position: center;
     height: 80vh;
     background-attachment: fixed;
     */
  }


}

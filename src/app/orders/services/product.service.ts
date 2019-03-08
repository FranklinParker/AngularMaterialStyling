import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      productName: 'product 1',
      description: 'desc 1',
      backgroundImage: '../../../../assets/img/home_background.jpeg'
    },
    {
      productName: 'product 2',
      description: 'desc 2',
      backgroundImage: '../../../../assets/img/edit_background.jpeg'

    },
    {
      productName: 'product 3',
      description: 'desc 3',
      backgroundImage: '../../../../assets/img/home_background.jpeg'

    }
  ];


  constructor() {
  }

  async getProducts() {
    return this.products;
  }
}

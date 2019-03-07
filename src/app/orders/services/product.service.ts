import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      productName: 'product 1',
      description: 'desc 1'
    },
    {
      productName: 'product 2',
      description: 'desc 2'
    },
    {
      productName: 'product 3',
      description: 'desc 3'
    }
  ];


  constructor() {
  }

  async getProducts() {
    return this.products;
  }
}

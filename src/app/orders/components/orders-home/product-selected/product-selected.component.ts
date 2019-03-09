import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-selected',
  templateUrl: './product-selected.component.html',
  styleUrls: ['./product-selected.component.scss']
})

export class ProductSelectedComponent implements OnInit {
  showSelectedProduct = true;
  constructor() { }

  ngOnInit() {
  }

}

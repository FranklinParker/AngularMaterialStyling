import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.scss']
})
export class GridHomeComponent implements OnInit {
  itemTitles: string [] = [
    'this is first',
    'this is second',
    'this is third',
    'this is forth'

  ];
  constructor() { }

  ngOnInit() {
  }

}

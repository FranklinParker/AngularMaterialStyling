import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-numbers',
  templateUrl: './grid-numbers.component.html',
  styleUrls: ['./grid-numbers.component.scss']
})
export class GridNumbersComponent implements OnInit {
  @Input() itemTitles: string [];
  constructor() { }

  ngOnInit() {
  }

}

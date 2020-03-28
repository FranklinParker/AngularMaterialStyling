import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-min-max',
  templateUrl: './grid-min-max.component.html',
  styleUrls: ['./grid-min-max.component.scss']
})
export class GridMinMaxComponent implements OnInit {
  @Input() itemTitles: string [];

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-names',
  templateUrl: './grid-names.component.html',
  styleUrls: ['./grid-names.component.scss']
})
export class GridNamesComponent implements OnInit {
  @Input() itemTitles: string [];

  constructor() { }

  ngOnInit() {
  }

}

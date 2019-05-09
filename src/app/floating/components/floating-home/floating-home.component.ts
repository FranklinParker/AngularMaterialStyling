import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-floating-home',
  templateUrl: './floating-home.component.html',
  styleUrls: ['./floating-home.component.scss']
})
export class FloatingHomeComponent implements OnInit {
  expanded: boolean = false;

  constructor() {
  }

  get floatClass() {
    return this.expanded ? 'expanded' : 'shrunk';
  }

  ngOnInit() {
  }

}

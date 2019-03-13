import {Component, OnInit} from '@angular/core';

/**
 *
 * https://icomoon.io/app/#/select
 */
@Component({
  selector: 'app-flex-home',
  templateUrl: './flex-home.component.html',
  styleUrls: ['./flex-home.component.scss']
})
export class FlexHomeComponent implements OnInit {
  leftNavOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  onLeftNavClose() {
    this.leftNavOpen = false;
  }

  onLeftNavOpen() {
    this.leftNavOpen = true;
  }

}

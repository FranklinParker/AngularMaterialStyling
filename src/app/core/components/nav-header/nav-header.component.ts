import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  loggedInUser = true;

  constructor() {
  }

  get displayName() {
    return 'Jeff';
  }

  ngOnInit() {
  }

  onLogout() {
    this.loggedInUser = !this.loggedInUser;
  }

}

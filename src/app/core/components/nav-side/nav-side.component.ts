import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {
  loggedInUser = true;
  @Output() closeSideNav = new EventEmitter();


  constructor() {
  }


  ngOnInit() {
  }

  onLogout() {
    this.loggedInUser = !this.loggedInUser;
  }

  onSidenavClose() {
    this.closeSideNav.emit();
  }
}

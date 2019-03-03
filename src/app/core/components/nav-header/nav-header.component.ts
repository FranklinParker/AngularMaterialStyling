import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  loggedInUser = true;
  @Output() sidebarToggle = new EventEmitter<void>();

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

  onToggle() {

    this.sidebarToggle.emit();
  }

}

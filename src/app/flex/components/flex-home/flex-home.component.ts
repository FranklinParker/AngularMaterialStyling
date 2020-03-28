import {Component, OnInit} from '@angular/core';

import {SaveMessagesService} from '../../services/saveMessages.service';

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

  constructor(private messageService: SaveMessagesService) {
  }

  get leftNavClass() {
    return this.leftNavOpen ? 'app-flex-nav-open' : 'app-flex-nav-closed';
  }

  async ngOnInit() {
    await this.messageService.getAllMessages();
  }

  onLeftMenuOpenState(open: boolean) {
    this.leftNavOpen = open;
  }

}

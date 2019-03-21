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

  async ngOnInit() {
    await this.messageService.getAllMessages();
  }

  onLeftNavClose() {
    this.leftNavOpen = false;
  }

  onLeftNavOpen() {
    this.leftNavOpen = true;
  }

}

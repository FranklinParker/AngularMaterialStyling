import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-flex-nav',
  templateUrl: './flex-nav.component.html',
  styleUrls: ['./flex-nav.component.scss']
})

export class FlexNavComponent implements OnInit {
  @Input() open;
  @Output() menuOpenState = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.menuOpenState.emit(false);
  }

  onOpen() {
    this.menuOpenState.emit(true);
  }

}

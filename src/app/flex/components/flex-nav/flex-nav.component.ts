import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-nav',
  templateUrl: './flex-nav.component.html',
  styleUrls: ['./flex-nav.component.scss']
})
export class FlexNavComponent implements OnInit {
  open = true;
  constructor() { }

  ngOnInit() {
  }
  onClose(){
    this.open = false;
  }

  onOpen(){
    this.open = false;
  }

}

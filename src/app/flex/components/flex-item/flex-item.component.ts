import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flex-item',
  templateUrl: './flex-item.component.html',
  styleUrls: ['./flex-item.component.scss']
})
export class FlexItemComponent implements OnInit {
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {expandPanelStateTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-floating-home',
  templateUrl: './floating-home.component.html',
  styleUrls: ['./floating-home.component.scss'],
  animations: [
    expandPanelStateTrigger
  ]
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

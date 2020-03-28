import {Component, OnInit} from '@angular/core';
import {
  expandPanelStateTrigger,
  shrunkPanelStateTrigger
}
  from '../../animation/animationTriggers';

@Component({
  selector: 'app-floating-expand-one',
  templateUrl: './floating-expand-one.component.html',
  styleUrls: ['./floating-expand-one.component.scss'],
  animations: [
    expandPanelStateTrigger,
    shrunkPanelStateTrigger
  ]
})
export class FloatingExpandOneComponent implements OnInit {
  expanded: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {
  expandPanelStateTrigger,
  shrunkPanelStateTrigger
} from '../../animation/animationTriggers';

@Component({
  selector: 'app-floating-home',
  templateUrl: './floating-home.component.html',
  styleUrls: ['./floating-home.component.scss'],
  animations: [
    expandPanelStateTrigger,
    shrunkPanelStateTrigger
  ]
})
export class FloatingHomeComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {
  }

}

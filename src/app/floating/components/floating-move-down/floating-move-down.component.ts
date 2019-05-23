import {Component, OnInit} from '@angular/core';
import {expansionPanelStateTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-floating-move-down',
  templateUrl: './floating-move-down.component.html',
  styleUrls: ['./floating-move-down.component.scss'],
  animations: [
    expansionPanelStateTrigger
  ]
})
export class FloatingMoveDownComponent implements OnInit {
  top = true;
  expansionState: string = 'top';

  constructor() {
  }

  get moveButtonIcon() {
    return top ? 'expand_more' : 'expand_less';
  }

  ngOnInit() {
  }

  moveDown(){
    this.top = false;
    this.expansionState = 'center';

  }
  moveUp(){
    this.top = true;
    this.expansionState = 'top';

  }

}

import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';


export const expandPanelStateTrigger = trigger('expandPanelState', [
  transition(':enter', [
    style({
      transform: 'translateY(-50%) scale(.2)',
      opacity: 0
    }),
    animate('700ms ease-in')
  ]),
  transition(':leave', animate('350ms ease-out', style({
    opacity: 0,
    transform: 'translateY(-50%) scale(.2)',

  })))
]);


export const shrunkPanelStateTrigger = trigger('shrunkPanelState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('700ms ease-in')
  ]),
  transition(':leave', animate('350ms ease-out', style({
    opacity: 0,

  })))
]);

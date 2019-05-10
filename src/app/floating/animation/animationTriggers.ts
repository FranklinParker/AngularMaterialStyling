import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';


export const expandPanelStateTrigger = trigger('expandPanelState', [
  transition(':enter', [
    style({
      transform: 'translateY(-50%)',
      opacity: 1
    }),
    animate('500ms ease-in')
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
  transition(':leave', animate('700ms ease-out', style({
    opacity: 1,

  })))
]);


export const expansionPanelStateTrigger = trigger('expansionPanelState', [
  state('top', style({
    width: '10rem',
    top: '-17rem'
  })),
  state('center', style({
    width: '14rem',
    top: '0'
  })),
  transition('top => center', [
    style({
      transform: 'scale(1.05)',
    }),
    // animate('200ms ease-out', style({
    //   transform: 'scale(1.05)'
    // })),
    animate('300ms ease-out')
  ]),
  transition('center => top', [
    // style({
    //   border: '1px solid blue',
    //   padding: '20px'
    // }),
    style({
      transform: 'scale(1.05)',
    }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);


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
    top: '-50%'
  })),
  state('center', style({
    top: '0'
  })),
  transition('top => center', [
    // style({
    //   border: '2px solid black',
    //   padding: '19px'
    // }),
    // animate('200ms ease-out', style({
    //   transform: 'scale(1.05)'
    // })),
    animate(200)
  ]),
  transition('center => top', [
    // style({
    //   border: '1px solid blue',
    //   padding: '20px'
    // }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);


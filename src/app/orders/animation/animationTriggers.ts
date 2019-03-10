import {animate, state, style, transition, trigger, group, keyframes} from '@angular/animations';


export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      transform: 'scale(.2)',
      opacity: 0
    }),
    animate('350ms ease-in')
  ]),
  transition(':leave', animate('350ms ease-out', style({
    opacity: 0,
    transform: 'scale(.2)',

  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('4000ms cubic-bezier(0,.9,1,.15)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate('5000ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);


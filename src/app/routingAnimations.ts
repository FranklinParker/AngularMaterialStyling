import {
  trigger,
  transition,
  group,
  query,
  style,
  animate
} from '@angular/animations';

export const routeStateTrigger = trigger('routeState', [
  transition('* => *', [
    group([
      query(':enter', [
        // animateChild(),
        style({
          transform: 'translateY(-400px) scale(.1)',
          opacity: 0
        }),
        animate('500ms ease-out')
      ], {optional: true}),
      query(':leave', [
        animate('500ms ease-out', style({
          transform: 'translateY(600px) scale(.1)',
          opacity: 0
        }))
      ], {optional: true})
    ])
  ])
]);

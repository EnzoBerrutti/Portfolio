import { trigger, state, style, animate, transition } from '@angular/animations';

 export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-90px)' }),
    animate('4000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);
export const delay1Animation = trigger('delay1Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 100 }) // Un segundo de retraso
  ]);
  
  export const delay2Animation = trigger('delay2Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 300 }) // Dos segundos de retraso
  ]);
  export const delay3Animation = trigger('delay3Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 500 }) // Dos segundos de retraso
  ]);
  export const delay4Animation = trigger('delay4Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 700 }) // Dos segundos de retraso
  ]);
  export const delay5Animation = trigger('delay5Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 800 }) // Dos segundos de retraso
  ]);
  export const delay6Animation = trigger('delay6Animation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-90px)' }),
      animate('4000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
    ], { delay: 1100 }) // Dos segundos de retraso
  ]);



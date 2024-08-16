import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInFromTop = trigger('fadeInFromTop', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

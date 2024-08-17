import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms ease-out', style({ opacity: 1 })),
  ]),
]);

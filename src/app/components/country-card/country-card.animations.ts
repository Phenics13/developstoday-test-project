import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOnScroll = trigger('fadeInOnScroll', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 }))
  ])
]);
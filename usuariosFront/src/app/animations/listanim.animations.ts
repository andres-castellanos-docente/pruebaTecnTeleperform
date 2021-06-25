import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';


export const subirAnimationMenu = trigger('subirAnimationMenu', [
  transition('false => true', [
    style({transform: 'translateY(20%)', opacity: 0}),
    animate(
      '0.4s ease-out',
      style({transform: 'translateY(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 0}),
  ])
]);


export const bajarAnimation = trigger('bajarAnimation', [
  transition(':enter', [
    style({transform: 'translateY(-50%)', opacity: 0}),
    animate(
      '0.2s ease-out',
      style({opacity: 0})
    ),
    animate(
      '0.6s ease-out',
      style({transform: 'translateY(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 0}),
  ])
]);



export const messagesAnimation = trigger('messagesAnimation', [
  transition(':enter', [
    style({transform: 'translateY(-100%)', opacity: 0}),
    animate(
      '0.4s ease-out',
      style({transform: 'translateY(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)', opacity: 1}),
    animate(
      '0.1s ease-out',
      style({transform: 'translateY(-100%)', opacity: 1})
    )
  ])
]);


export const subirAnimation = trigger('subirAnimation', [
  transition(':enter', [
    style({transform: 'translateY(30%)', opacity: 0}),
    animate(
      '0.5s ease-out',
      style({opacity: 0})
    ),
    animate(
      '0.8s ease-out',
      style({transform: 'translateY(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 0}),
  ])
]);


export const IzADerAnimation = trigger('IzADerAnimation', [
  transition(':enter', [
    style({transform: 'translateX(-40%)', opacity: 0}),
    animate(
      '0.2s ease-out',
      style({opacity: 0})
    ),
    animate(
      '0.8s ease-out',
      style({transform: 'translateX(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 0}),
  ])
]);


export const derAIzAnimation = trigger('derAIzAnimation', [
  transition(':enter', [
    style({transform: 'translateX(40%)', opacity: 0}),
    animate(
      '0.2s ease-out',
      style({opacity: 0})
    ),
    animate(
      '0.8s ease-out',
      style({transform: 'translateX(0%)', opacity: 1})
    )
  ]),
  transition(':leave', [
    style({opacity: 0}),
  ])
]);


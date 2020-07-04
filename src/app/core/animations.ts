import {animate, group, state, style, transition, trigger} from '@angular/animations';

export const SlideInHeader = [
  trigger('headerSlide', [
    state('in', style({
      'max-height': '*', opacity: '1', visibility: 'visible'
    })),
    state('out', style({
      'max-height': '0px', opacity: '0', visibility: 'hidden'
    })),
    state('default', style({
      'max-height': '100px', opacity: '1', visibility: 'visible'
    })),
    transition('in => out', [group([
      animate('500ms ease-in-out', style({
        opacity: '0'
      })),
      animate('500ms ease-in-out', style({
        visibility: 'hidden'
      })),
      animate('500ms ease-in-out', style({
        'max-height': '0'
      })),
    ])]),
    transition('out => in', [group([
      animate('500ms ease-in-out', style({
        opacity: '1'
      })),
      animate('500ms ease-in-out', style({
        visibility: 'visible'
      })),
      animate('500ms ease-in-out', style({
        'max-height': '*'
      })),
    ])]),
    transition('out => default', [group([
      animate('500ms ease-in-out', style({
        opacity: '1'
      })),
      animate('500ms ease-in-out', style({
        visibility: 'visible'
      })),
      animate('500ms ease-in-out', style({
        'max-height': '100px'
      })),
    ])]),
    transition('default => out', [group([
      animate('500ms ease-in-out', style({
        opacity: '0'
      })),
      animate('500ms ease-in-out', style({
        visibility: 'hidden'
      })),
      animate('500ms ease-in-out', style({
        'max-height': '0'
      })),
    ])]),
    transition('in => default', [group([
      animate('500ms ease-in-out', style({
        'max-height': '100px'
      })),
    ])]),
    transition('default => in', [group([
      animate('500ms ease-in-out', style({
        'max-height': '*'
      }))
    ])])
  ])
];

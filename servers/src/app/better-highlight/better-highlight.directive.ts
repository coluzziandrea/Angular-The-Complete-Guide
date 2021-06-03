import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  @HostBinding('style.color')
  color!: string;

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.backgroundColor = 'blue';
    this.color = 'white';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.color = 'inherit';
  }
}

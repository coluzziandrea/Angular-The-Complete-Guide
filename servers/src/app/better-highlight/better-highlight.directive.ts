import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input()
  defaultBackgroundColor: string = 'transparent';

  @Input()
  highlightBackgroundColor: string = 'blue';

  @Input()
  defaultColor: string = 'inherit';

  @Input()
  highlightColor: string = 'white';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultBackgroundColor;

  @HostBinding('style.color')
  color: string = this.defaultColor;

  ngOnInit(): void {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}

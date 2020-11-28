import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bgc = 'red';
  @HostBinding('style.color') color = 'yellow';
  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.color = 'green';
  }
}

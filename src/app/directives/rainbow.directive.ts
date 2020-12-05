import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bc = 'yellow';
  constructor() { }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('keydown') onKeyDown() {
    this.color = this.bc = this.getRandomColor();
  }
}

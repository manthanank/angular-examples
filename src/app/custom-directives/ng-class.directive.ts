import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNgClass]'
})
export class NgClassDirective implements OnChanges {
  @Input() appNgClass: { [key: string]: boolean } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appNgClass) {
      Object.keys(this.appNgClass).forEach(className => {
        if (this.appNgClass[className]) {
          this.renderer.addClass(this.el.nativeElement, className);
        } else {
          this.renderer.removeClass(this.el.nativeElement, className);
        }
      });
    }
  }
}

import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNgStyle]'
})
export class NgStyleDirective implements OnChanges {
  @Input() appNgStyle: { [key: string]: string } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appNgStyle) {
      Object.keys(this.appNgStyle).forEach(styleName => {
        this.renderer.setStyle(this.el.nativeElement, styleName, this.appNgStyle[styleName]);
      });
    }
  }
}

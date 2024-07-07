import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appNgFor][appNgForOf]'
})
export class NgForDirective<T> {
  @Input() set appNgForOf(items: T[]) {
    this.viewContainer.clear();
    items.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item, index });
    });
  }

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {}
}

import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNgSwitch]'
})
export class NgSwitchDirective implements OnChanges {
  @Input() appNgSwitch: any;
  private defaultView: TemplateRef<any> | null = null;
  private caseViews: { [key: string]: TemplateRef<any> } = {};

  constructor(private viewContainer: ViewContainerRef) {}

  addCase(caseValue: any, templateRef: TemplateRef<any>) {
    this.caseViews[caseValue] = templateRef;
  }

  setDefault(templateRef: TemplateRef<any>) {
    this.defaultView = templateRef;
  }

  ngOnChanges() {
    this.viewContainer.clear();
    const view = this.caseViews[this.appNgSwitch] || this.defaultView;
    if (view) {
      this.viewContainer.createEmbeddedView(view);
    }
  }
}

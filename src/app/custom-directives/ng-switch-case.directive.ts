import { Directive, Input, TemplateRef } from '@angular/core';
import { NgSwitchDirective } from './ng-switch.directive';

@Directive({
  selector: '[appNgSwitchCase]'
})
export class NgSwitchCaseDirective {
  @Input() set appNgSwitchCase(value: any) {
    this.ngSwitch.addCase(value, this.templateRef);
  }

  constructor(private ngSwitch: NgSwitchDirective, private templateRef: TemplateRef<any>) {}
}

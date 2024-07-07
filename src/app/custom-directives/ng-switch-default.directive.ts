import { Directive, TemplateRef } from '@angular/core';
import { NgSwitchDirective } from './ng-switch.directive';

@Directive({
  selector: '[appNgSwitchDefault]'
})
export class NgSwitchDefaultDirective {
  constructor(private ngSwitch: NgSwitchDirective, private templateRef: TemplateRef<any>) {
    this.ngSwitch.setDefault(this.templateRef);
  }
}

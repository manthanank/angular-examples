import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNgModel]'
})
export class NgModelDirective {
  @Input() appNgModel: any;
  @Output() appNgModelChange = new EventEmitter<any>();

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.appNgModelChange.emit(input.value);
  }
}

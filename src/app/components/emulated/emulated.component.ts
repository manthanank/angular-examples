import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  imports: [],
  templateUrl: './emulated.component.html',
  styleUrl: './emulated.component.scss',
  encapsulation: ViewEncapsulation.Emulated, // Default behavior
})
export class EmulatedComponent {}

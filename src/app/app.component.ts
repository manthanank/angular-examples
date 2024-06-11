import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LifecycleComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showComponent = true;
  inputData = 'Initial data';

  toggle() {
    this.showComponent = !this.showComponent;
  }

  changeData() {
    this.inputData = 'Updated data';
  }
}

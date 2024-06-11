import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

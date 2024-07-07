import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isActive = true;
  isDisabled = false;
  textColor = 'red';
  fontSize = '20px';
  name = '';
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  value = 'case1';
}

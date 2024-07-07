import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  someDate = new Date();
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  someObject = { key: 'value', nested: { key: 'nested value' } };
  someObservable = of('Async value');
}

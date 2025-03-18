import { Component } from '@angular/core';

interface Order {
  id: number;
  status: 'pending' | 'shipped' | 'delivered' | string;
}

interface User {
  name: string;
  orders: Order[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-examples';

  user: User | null = {
    name: 'John Doe',
    orders: [
      { id: 1, status: 'pending' },
      { id: 2, status: 'shipped' },
      { id: 3, status: 'delivered' },
      { id: 4, status: 'unknownStatus' },
    ],
  };

  //If you want to test the empty orders, change the user to null or the orders array to be empty.
  // user: User | null = {
  //   name: 'John Doe',
  //   orders: [],
  // };

  //user: null = null;
}

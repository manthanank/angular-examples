import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-examples';

  response: string = '';
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';

  http = inject(HttpClient);

  constructor() {}

  ngOnInit() {
    localStorage.setItem('authToken', 'your_dynamic_test_token');
  }

  fetchData() {
    this.http.get(this.apiUrl).subscribe({
      next: (data: any) => {
        this.response = data;
      },
      error: (error) => {
        this.response = `Error: ${error.message}`;
      },
    });
  }
}

import { httpResource } from '@angular/common/http';
import { Component, computed, Resource } from '@angular/core';

export type Posts = Post[];

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-examples';

  apiUrl = 'https://jsonplaceholder.typicode.com';

  posts = httpResource<Post[]>(`${this.apiUrl}/posts`);
  error = computed(() => {
    const error = this.posts.error() as Error;
    if (!error) return null;
    return error.message;
  });

  constructor() {}
}

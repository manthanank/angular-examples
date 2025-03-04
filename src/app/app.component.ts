import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
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

  postId = signal(1);

  http = inject(HttpClient);

  comments = rxResource({
    request: this.postId,
    loader: (request) =>
      this.http.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${request.request}`
      ),
  });

  updatePostId(event: any) {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue > 0) {
      this.postId.set(newValue);
    }
  }

  nextPost() {
    this.postId.update((current) => current + 1);
  }

  previousPost() {
    if (this.postId() > 1) {
      this.postId.update((current) => current - 1);
    }
  }

  firstCommentEmail = computed(() => {
    return this.comments.value()?.[0]?.email ?? 'No comments available';
  });
}

import { Component, computed, resource, signal } from '@angular/core';

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

  comments = resource({
    request: () => ({ postId: this.postId() }),
    loader: ({ request }) =>
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${request.postId}`
      ).then((response) => {
        if (!response.ok) throw new Error('Failed to fetch comments');
        return response.json() as Promise<Comment[]>;
      }),
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

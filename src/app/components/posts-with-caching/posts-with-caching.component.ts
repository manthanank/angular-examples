import { Component, OnInit } from '@angular/core';
import { DataWithCachingService } from '../../services/data-with-caching.service';

@Component({
  selector: 'app-posts-with-caching',
  standalone: true,
  imports: [],
  templateUrl: './posts-with-caching.component.html',
  styleUrl: './posts-with-caching.component.scss',
})
export class PostsWithCachingComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataWithCachingService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  refreshPosts(): void {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

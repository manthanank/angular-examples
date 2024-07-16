import { Component, OnInit } from '@angular/core';
import { DataWithoutCachingService } from '../../services/data-without-caching.service';

@Component({
  selector: 'app-posts-without-caching',
  standalone: true,
  imports: [],
  templateUrl: './posts-without-caching.component.html',
  styleUrl: './posts-without-caching.component.scss'
})
export class PostsWithoutCachingComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataWithoutCachingService) {}

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
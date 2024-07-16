import { Routes } from '@angular/router';
import { PostsWithoutCachingComponent } from './components/posts-without-caching/posts-without-caching.component';
import { PostsWithCachingComponent } from './components/posts-with-caching/posts-with-caching.component';

export const routes: Routes = [
    {
        path: 'posts-without-caching',
        component: PostsWithoutCachingComponent,
    },
    {
        path: 'posts-with-caching',
        component: PostsWithCachingComponent
    }
];

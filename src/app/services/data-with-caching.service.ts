import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataWithCachingService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Check if data is cached
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }

    // Fetch data from API
    return this.http.get<any[]>(url).pipe(
      map((posts) => {
        this.cache.set(url, posts);
        return posts;
      }),
      catchError((error) => {
        console.error('Error fetching posts:', error);
        throw error;
      })
    );
  }
}

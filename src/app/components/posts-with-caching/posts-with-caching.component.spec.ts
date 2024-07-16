import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithCachingComponent } from './posts-with-caching.component';

describe('PostsWithCachingComponent', () => {
  let component: PostsWithCachingComponent;
  let fixture: ComponentFixture<PostsWithCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsWithCachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsWithCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithoutCachingComponent } from './posts-without-caching.component';

describe('PostsWithoutCachingComponent', () => {
  let component: PostsWithoutCachingComponent;
  let fixture: ComponentFixture<PostsWithoutCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsWithoutCachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsWithoutCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

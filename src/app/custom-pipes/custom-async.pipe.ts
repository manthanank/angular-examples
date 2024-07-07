import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({ name: 'customAsync', pure: false })
export class CustomAsyncPipe implements PipeTransform, OnDestroy {
  private value: any;
  private subscription: Subscription | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  transform(observable: Observable<any>): any {
    if (!this.subscription) {
      this.subscription = observable.subscribe(value => {
        this.value = value;
        this.cdr.markForCheck();
      });
    }
    return this.value;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

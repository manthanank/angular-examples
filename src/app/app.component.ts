import { Component, computed, OnDestroy, OnInit, inject } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-examples';

  private destroy$ = new Subject<void>();
  private timerSubject$ = new Subject<number>();

  // Convert the Observable to a Signal
  counter = toSignal(this.timerSubject$, { initialValue: 0 });

  // Computed signal for even numbers
  evenCounter = computed(() => {
    return this.counter() % 2 === 0 ? this.counter() : 'Not Even';
  });

  //Computed signal for doubled numbers
  doubledCounter = computed(() => {
    return this.counter() * 2;
  });

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.timerSubject$.next((this.counter() || 0) + 1); // Increment the counter
      });
  }

  reset() {
    this.timerSubject$.next(0); // Emit 0 to reset the counter
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
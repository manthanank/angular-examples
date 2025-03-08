import { afterRenderEffect, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message = signal('Initial Message');
  inputValue = signal('');
  counter = signal(0);
  showCounter = signal(true);

  constructor() {
    afterRenderEffect({
      earlyRead: (onCleanup) => {
        console.log('Message updated in DOM:', this.message());
        onCleanup(() => {
          console.log('Cleanup for message effect');
        });
      },
      write: () => {
        if (this.inputValue() !== '') {
          console.log('Input value updated:', this.inputValue());
        }
        console.log('Counter updated:', this.counter());
      },
      mixedReadWrite: () => console.log('Mixed read/write effect'),
      read: () => console.log('Read effect'),
    });

    afterRenderEffect(() => {
      if (this.showCounter()) {
        console.log('Counter visibility: Visible');
      } else {
        console.log('Counter visibility: Hidden');
      }
    });
  }

  isValidInput(): boolean {
    return this.inputValue().trim() !== '';
  }

  updateMessage() {
    if (this.isValidInput()) {
      this.message.set(this.inputValue());
      this.counter.update((value) => value + 1);
    }
  }

  updateInputValue(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.inputValue.set(target.value);
    }
  }

  toggleCounterVisibility() {
    this.showCounter.update((value) => !value);
  }
}

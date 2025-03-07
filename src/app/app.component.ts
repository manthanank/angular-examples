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

  constructor() {
    afterRenderEffect(() => {
      console.log('Message updated in DOM:', this.message());
    });

    afterRenderEffect(() => {
      console.log('Input value updated:', this.inputValue());
    });
  }

  isValidInput(): boolean {
    return this.inputValue().trim() !== '';
  }

  updateMessage() {
    this.message.set(this.inputValue());
  }

  updateInputValue(event: any) {
    this.inputValue.set(event.target.value);
  }
}

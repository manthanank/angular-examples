import { JsonPipe } from '@angular/common';
import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-examples';

  items = signal<string[]>(['Item 1', 'Item 2', 'Item 3']);

  selectedItem = linkedSignal({
    source: this.items,
    computation: (items) => items[0] || null,
  });

  itemCount = computed(() => this.items().length);

  addItem() {
    this.items.update((currentItems) => [
      ...currentItems,
      `Item ${currentItems.length + 1}`,
    ]);
  }

  selectItem(item: string) {
    if (this.items().includes(item)) {
      this.selectedItem.set(item);
    }
  }

  resetItems() {
    this.items.set(['Apple', 'Banana', 'Cherry']);
  }

  removeItem() {
    const selected = this.selectedItem();
    if (selected) {
      this.items.update((currentItems) =>
        currentItems.filter((item) => item !== selected)
      );
      this.selectedItem.set(this.items()[0] || null); //reset selection
    }
  }
}

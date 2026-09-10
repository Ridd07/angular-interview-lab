import { Injectable, computed, signal } from '@angular/core';

export interface ShoppingItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListStateService {

  private readonly _items = signal<ShoppingItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly itemCount = computed(() => this._items().length);

  readonly total = computed(() =>
    this._items().reduce((sum, item) => sum + item.price, 0)
  );

  addItem(name: string, price: number): void {
     const newItem: ShoppingItem = {
      id: Date.now(),
      name,
      price
    }; 

    this._items.update(items => [...items, newItem]);
  }

  removeItem(id: number): void {
    this._items.update(items =>
      items.filter(item => item.id !== id)
    );
  }
} 
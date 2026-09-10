import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { ShoppingListStateService } from '../shopping-list-state';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {

  readonly state = inject(ShoppingListStateService);

  itemName = '';
  itemPrice = 0;

  addItem(): void {
    if (!this.itemName.trim() || this.itemPrice <= 0) {
      return;
    }

    this.state.addItem(
      this.itemName.trim(),
      this.itemPrice
    );

    this.itemName = '';
    this.itemPrice = 0;
  }

  removeItem(id: number): void {
    this.state.removeItem(id);
  }
}
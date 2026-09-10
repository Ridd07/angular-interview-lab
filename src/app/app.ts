import { Component } from '@angular/core';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}



import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-selector',
  styleUrl: './quantity-selector.css',
  templateUrl: './quantity-selector.html',
})
export class QuantitySelector {
  quantity = 0;

  increase(){
    this.quantity++;
  }

  decrease(){
    if (this.quantity >0){
      this.quantity--;
    }
  }
}

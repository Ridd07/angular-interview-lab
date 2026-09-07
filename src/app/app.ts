import { Component } from '@angular/core';
import { Rating } from './rating/rating';


@Component({
  selector: 'app-root',
  imports: [Rating],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  selectedRating = 0;
  
  onRatingChange(value: number){
    this.selectedRating = value;
  }
}

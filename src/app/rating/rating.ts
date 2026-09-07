import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-rating',
  styleUrl: './rating.css',
  templateUrl: './rating.html',
})
export class Rating {

  @Input() rating: number = 0;

  @Output() ratingChange = new EventEmitter<number>();
  
  stars = [1, 2, 3, 4, 5];
  hoveredStar: number = 0;

  selectRating(value: number){
    this.rating = value;
    this.ratingChange.emit(value);
  }

  onHover(star: number){
    this.hoveredStar = star;
  }

  onLeave(){
    this.hoveredStar = 0;
  }

  getStar(star: number): string {
    const active = this.hoveredStar || this.rating;
    return star <= active ? '★' : '☆';
  }

  getStarClass(star: number): string {
    const active = this.hoveredStar || this.rating;
    return star <= active ? 'highlighted' : '';
  }
}

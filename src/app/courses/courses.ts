import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [RouterLink, RouterOutlet, MatButtonModule],
  selector: 'app-courses',
  styleUrl: './courses.css',
  templateUrl: './courses.html',
})
export class Courses {
  
}

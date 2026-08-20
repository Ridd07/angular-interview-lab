import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile';


@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-day-01');
}

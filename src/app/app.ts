import { Component } from '@angular/core';
import { PriorityDirective } from './priority';
import { DurationPipe } from './duration-pipe';

@Component({
  selector: 'app-root',
  imports: [PriorityDirective, DurationPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

   tasks = [
    {
      title: 'Angular Basics',
      priority: 'high',
      duration: 90
    },
    {
      title: 'TypeScript',
      priority: 'medium',
      duration: 45
    },
    {
      title: 'HTML',
      priority: 'low',
      duration: 30
    }
  ];
}

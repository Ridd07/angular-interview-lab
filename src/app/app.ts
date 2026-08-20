import { Component } from '@angular/core';

import { CourseCard } from './course-card/course-card';

@Component({
  selector: 'app-root',
  imports: [CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {

  course = {
    title: 'Angular Basics',
    level: 'Beginner',
    duration: '3 Hours'
  };

  course2 = {
    title: 'TypeScript Basics',
    level: 'Intermediate',
    duration: '5 Hours'
  };

  course3 = {
    title: 'JavaScript Basics',
    level: 'Advanced',
    duration: '8 Hours'
  };
}

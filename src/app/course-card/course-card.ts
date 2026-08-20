import { Component, Input} from '@angular/core';

interface Course {
  title: string;
  level: string;
  duration: string;
}

@Component({
  imports: [],
  selector: 'app-course-card',
  styleUrl: './course-card.css',
  templateUrl: './course-card.html',
})
export class CourseCard {
  @Input() course!: Course;
}
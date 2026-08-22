import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-course-detail',
  styleUrl: './course-detail.css',
  templateUrl: './course-detail.html',
})
export class CourseDetail {
   courseId = '';
   courseName = '';

   courses: {[key: string]: string } = {
    '101': 'Angular',
    '102': 'React',
    '103': 'Java'
   };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
    this.courseId = params.get('id') || '';
    this.courseName = this.courses[this.courseId] || 'Course Not Found';
  });
}
}

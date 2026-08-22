import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Courses } from './courses/courses';
import { CourseDetail } from './course-detail/course-detail';

export const routes: Routes = [
      {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'courses',
    component: Courses,
    children: [
      {
        path: ':id',
        component: CourseDetail 
      }
    ]
  }
];

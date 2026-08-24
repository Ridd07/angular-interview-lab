import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

@Component({
  imports: [ FormsModule, MatButtonModule, MatCardModule,  MatFormFieldModule, MatInputModule],
  selector: 'app-task-board', 
  styleUrl: './task-board.css',
  templateUrl: './task-board.html'
})
export class TaskBoard {

  loading = false;

  selectedStatus = 'all';

  searchText = '';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular Components',
      status: 'in-progress',
    },
    {
      id: 2,
      title: 'Practice Angular Control Flow',
      status: 'todo',
    },
    {
      id: 3,
      title: 'Practice Git',
      status: 'done',
    },
  ];

  changeFilter(status: string){
    this.selectedStatus = status; 
  }

  get filteredTasks(): Task[] {

    let result = this.tasks;

    if (this.selectedStatus !== 'all') {
      result = result.filter(
        task => task.status === this.selectedStatus
      );
      
    }
    
    if (this.searchText.trim()) {
    result = result.filter(
      task =>
        task.title
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }

  return result;
  } 
}

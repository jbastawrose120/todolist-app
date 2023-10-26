import { Component } from '@angular/core';
import { Task } from '../task.model'; // Import the Task interface

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:Task[]  = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Finish project', completed: false },
    { id: 3, title: 'Go to the gym', completed: true },
  ];

  // Function to create a new task
  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1, // Generate a unique ID
      title,
      completed: false
    };
    this.tasks.push(newTask);
  }


}

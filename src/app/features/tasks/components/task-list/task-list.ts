import { Component } from '@angular/core';
import { TaskCard } from '../task-card/task-card';

@Component({
  imports: [TaskCard],
  selector: 'app-task-list',
  styleUrl: './task-list.scss',
  templateUrl: './task-list.html',
})
export class TaskList {
  taskList = [
    {
      id: 1,
      title: "title",
      description: "description"
    }
  ];
}

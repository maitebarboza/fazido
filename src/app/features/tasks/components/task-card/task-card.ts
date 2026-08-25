import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-card',
  styleUrl: './task-card.scss',
  templateUrl: './task-card.html',
})
export class TaskCard {
  task = {
    id: 1,
    title: 'teste',
    description: 'description'
  }
}

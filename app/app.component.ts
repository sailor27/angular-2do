import { Component } from '@angular/core';

//annotation:
@Component({
  selector: 'app-root',
  template: `
  <div class="container jumbotron">
  <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <ul>
    <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
  </ul>

  </div>
  `
})

export class AppComponent {
  //property to hold the variable which indicates our current focus
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //In Angular, when a variable in a component's class declaration references
  //another variable in the class, it must be prefaced with the this. keyword.
  tasks: Task [] = [
    new Task('Finish weekend Angular homework for Epicodus Course ✏️📒'),
    new Task('Begin Brainstorming possible Javascript group projects 📒🍅'),
    new Task('Add README file to Angular projects on github '),
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string){ }
}

//Because we've exported a Task class, Task is now a valid data type for variables!

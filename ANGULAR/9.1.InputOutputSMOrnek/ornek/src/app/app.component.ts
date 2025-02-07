import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TodoAddComponent } from "./todo-add/todo-add.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, TodoAddComponent],
  template:`
  <h1>Input / Output Ornek</h1>
  <app-todo-add (addEvent)="add($event)"></app-todo-add>
  <hr>
  <ul>
    <li *ngFor="let todo of todos">
      {{todo}}
    </li>
  </ul>
  `
})
export class AppComponent {
  todos: string[]=[];
  work: string="";

  add(event: string){
    this.todos.push(event);
    this.work="";
  }
}



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';
// import { TodoPipe } from './todo.pipe';
// import { NamePipe } from './name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TrCurrencyPipe],
  template: `
  <h1>Pipe</h1>
  <h1>{{name | titlecase | uppercase |lowercase}}</h1>
  <h1>{{date |date:'dd.MMMM.yyy HH:mm:ss'}}</h1>
  <h1>{{num | trCurrency:'t': true}}</h1>

  <!-- <h1>Pipe</h1>
  <div>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <h1>{{name | name}}</h1>
  <div>
    <Input type="search" [(ngModel)]="search" placeholder="Search something">
    <ul>
      @for(t of todos | todo:search;track t){
        <li>{{t}}</li>
      }
    </ul>
  </div> -->
  `})
export class AppComponent {
  // name: string="Sueda"
  // work: string = "";
  // todos: string[]=["Domates","Biber","Patlican"];
  // search: string ="";

  name: string = "Sueda Nur ŞEMEN";
  date: Date = new Date();
  num: number = 17002.25

  // save(){
  //   this.todos.push(this.work);
  //   this.work="";
  // }
}



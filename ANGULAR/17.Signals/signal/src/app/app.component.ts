import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor],
  template:`
  <h1>{{count}}</h1>
  <br>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <hr>
  <ul>
    <li *ngFor="let r of results">{{r}}</li>
  </ul>
  `
})
export class AppComponent {
  count=0;
  results: string[]=[]

  increment(){
    this.count++;
    this.results.push("Increment");
  }

  decrement(){
    this.count--;
    this.results.push("Decrement");
  }
}


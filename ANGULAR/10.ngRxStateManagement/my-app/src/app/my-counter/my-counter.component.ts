import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.action';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule],
  template:`
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `})
export class MyCounterComponent {
  count$: Observable<number> | undefined;

  constructor(
    private store: Store <{count: number}>
  ){
    this.count$=this.store.select("count")
  }
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }
}


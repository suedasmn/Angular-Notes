import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyCounterComponent } from "./my-counter/my-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreModule, CommonModule, FormsModule, 
    MyCounterComponent],
  template:`
  <app-my-counter></app-my-counter>
  <h1>{{count$ | async}}</h1>
  `
})
export class AppComponent {
  count$: Observable<number> | undefined;
  count: number = 0;

  constructor(
    private store: Store <{count: number}>
  ){
    this.count$=this.store.select("count")
    this.store.select("count").subscribe(res=>{
      this.count = res;
    })
  }
}



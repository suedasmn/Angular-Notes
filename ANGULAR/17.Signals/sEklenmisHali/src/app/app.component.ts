import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template:`
  <h1>{{count()}}</h1>
  <h2> Computed: {{countPlus()}}</h2>
  <br>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <hr>
  <ul>
    <li *ngFor="let r of results()">{{r}}</li>
  </ul>
  `})
//hydration-component içine- component bundan muaf olsun istersek... 
//host: {ngSkipHydration: 'true'}, yazarız.
export class AppComponent {
  count=signal(0);  //count ne zaman değişirse counPlus da o zaman değişiyor, bağladık.
  results= signal<string[]>([])
  countPlus = computed(()=>this.count()+1); //bir değişkeni signal yaptıktan 
  //sonra bu değişkene bağlı işlemleri computed üstünden başka değişkene bağlayabiliyoruz
  countEffect=effect(()=> console.log(this.count()+"değişti")) //parantezden sonra 
  //fonksiyon ister, sonra işlem yaptırmıyoruz, metot yazıyoruz
  _=effect(()=> console.log(this.count()+"değişti")) //değişken ismi atamak istemezsek

  increment(){
    this.count.update((oldValue)=> oldValue + 1);
    this.results.update((oldValue)=> [...oldValue, 'increment']);
  }

  decrement(){
    this.count.update((old)=> old - 1);
    // this.results.mutate((old: string[])=> old.push("decrement"));
  }

  // set yöntemi
  // this.count.set(0);
  // this.count.set(this.count() + 1);

  // update yöntemi
  // this.count.update((oldValue) => {
  //   return oldValue + 1
  // })
  // this.count.update((oldValue)=> oldValue + 1);

  // mutate yöntemi
  // this.count.mutate((oldValue)=> oldValue + 1);

  // Listeyi Update ile güncelleme
  // this.results.update((oldValue)=> [...oldValue, 'increment']);

  // Listeyi Mutate ile güncelleme
  // this.results.mutate((oldValue)=> oldValue.push ("increment"));
}



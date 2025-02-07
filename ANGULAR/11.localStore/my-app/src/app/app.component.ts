import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ``
})
export class AppComponent {
  constructor (){
    localStorage.setItem("token","asdasd") //eklemek
    localStorage.getItem("token") //elde etmek istersek
    localStorage.removeItem("token") //ilgili tokenı siler
    localStorage.clear(); //kaç tane değer varsa siler
  }
}



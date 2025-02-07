import { Component } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExampleComponent, FormsModule],
  template:`
  <h1>State Management - Input / Output </h1>
  <p>Benim adim <strong>{{name}}</strong></p>
  <hr>
  <app-example [name]='name' (changeNameEvent)="changeName($event)" ></app-example> 
  `
})
export class AppComponent {
  name: string ="sueda";

  changeName(event: string){ //yakalayacagımz tip
    this.name= event;
  }
}




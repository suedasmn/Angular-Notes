import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template:`
  <h1>id: {{id}}</h1>
  <h1>name: {{name}}</h1>
  `
})
export class ProductComponent {
id: any;
name: any;
}


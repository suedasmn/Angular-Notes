import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  pageNumber: number=1;
  pageSize: number=10;
  collection: number []=[];
  constructor(){
    for(let i=0; i<1000; i++){
      this.collection.push(i)
    }
  }
}


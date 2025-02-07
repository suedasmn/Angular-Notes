import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: ` <h1>Sart Bloklari</h1>
  @if(showFirstWord){
    <p style="color:{{ showFirstWord===true? 'red': ''}};">Birinci Yazi</p>
  }
  @if(showSecondWord){
      <p style="color:green;">İkinci Yazi</p>
  }
  <hr>
  <button (click)="show(1)">Birinci yaziyi goster</button>
  <button (click)="show(2)">İkinci yaziyi goster</button>
  `})
export class AppComponent {
  showFirstWord: boolean = false;
  showSecondWord: boolean = false;

  show(num: number) {
    if (num === 1) {
      this.showFirstWord = true;
      this.showSecondWord = false;
    }
    else {
      this.showFirstWord = false;
      this.showSecondWord = true;
    }

  switch(num) {
    case 1:
      this.showFirstWord = true;
      this.showSecondWord = false;
      break;

    case 2:
      this.showFirstWord = false;
      this.showSecondWord = true;
      break;
  }
 }
}



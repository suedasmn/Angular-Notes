import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _http: HttpClient
  ){}  
  
  getApi(){
    this._http.get("https://jsonplaceholder.typicode.com/todos")
    .subscribe({
      next: (res)=>{
        console.log(res);
      },
      // error: (err: HttpErrorResponse) => { //daha generi bir hale 
      //çevireceiğiz interceptor ile
      //   console.log(err);
      // }
    });
  }
}



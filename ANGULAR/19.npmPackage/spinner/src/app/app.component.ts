import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _spinner: NgxSpinnerService,
    private _http: HttpClient
  ){}

  callSpinner(){
    this._spinner.show();
    // setTimeout(()=>{ //4 saniye sonra kapasın
    //   this._spinner.hide();
    // },4000)
    //API İSTEKLERİNDE KULLANIRIZ
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next: (res)=>{
        this._spinner.hide();
      },
      error: (err)=> {
        this._spinner.hide();
      }
    })
  }
}



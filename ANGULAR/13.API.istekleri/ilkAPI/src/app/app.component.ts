import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template:``
})
export class AppComponent {

  model:{
    id: number,
    title: string,
    completed: boolean,
    userId: number
  } = {
    id:0,
    title:"",
    completed:false,
    userId:1
  }

  constructor(
    private _http: HttpClient //tan çağırıyoruz
  ){
      //this._http.get("https://jsonplaceholder.typicode.com/todos/1" ).subscribe(res => {
      //subscribe ile api isteğine bağlandık. res e cevabı yazar. //""içine şartları ister.
      // , ile token elemeleri yapabiliriz.
      //console.log(res);
      this._http.get("https://json1placeholder.typicode.com/todos/1" ).subscribe({
        next: (res: any) => { //res sonucu yakalar, any tipi
          console.log(res); //yazdırdık
        },
        error: (err:HttpErrorResponse) => { //hatayı yakaladık
          console.log(err);
        },
        complete: () =>{ //genelde kullanılmaz //api başarılı olsa da olmasa da çalıştır
        }
      })

      let model ={ //1.yöntem
        userId:1,
        id:0,
        title:"Deneme",
        completd: false //("api adresi",model) olarak eklenir
      }

      this._http.post("https://json1placeholder.typicode.com/todos",{userId:1, id:0, title:"Deneme",
         completed:false } ).subscribe({ //2.yöntem buraya eklemek tek tek
        next: (res: any) => { //res sonucu yakalar, any tipi
          console.log(res); //yazdırdık
        },
        error: (err:HttpErrorResponse) => { //hatayı yakaladık
          console.log(err);
        }
      })
  }
}



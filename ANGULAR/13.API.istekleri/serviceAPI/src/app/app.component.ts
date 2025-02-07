import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:``
})
export class AppComponent {
  constructor(
    private _app: AppService
  ){
    _app.get().subscribe(res =>{;
      console.log(res);
    })
  }

  save(){
    this._app.add({userId:1,title:"Deneme",
      completed:false,id:0}).subscribe(res=>{
      console.log(res);
    })
  }
}


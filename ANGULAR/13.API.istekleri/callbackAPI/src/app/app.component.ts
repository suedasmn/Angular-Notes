import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAppService } from './services/my-app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:``
})
export class AppComponent {
  constructor(
    private _app: MyAppService
  ){
  //   _app.get((res )=>{;
  //     console.log(res);
  //   })
  // }

  // save(){
  //   this._app.add({userId:1,title:"Deneme",completed:false,id:0},(res)=>{
  //     console.log(res);
  //   })
  }
}

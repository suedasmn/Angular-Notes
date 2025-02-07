import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _toastr: ToastrService
  ){}

  toast(){ 
    this._toastr.success("succes message","title");
    this._toastr.info("info message");
    this._toastr.error("","error!");
    this._toastr.warning("warning message","warning title");
  } 
}


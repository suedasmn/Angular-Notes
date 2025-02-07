import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient
  ) { }

  get(){
    return this._http.get("api adresi");
  }

  add(model: any){
    return this._http.post("adres", model,{});
  }
}


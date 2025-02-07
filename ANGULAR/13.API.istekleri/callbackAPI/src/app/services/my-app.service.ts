import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  constructor(
    private _http: GenericHttpService,
    //private _http: HttpClient, yerine üsttekini yazacağız generic için
    private _err: ErrorService
  ) { }

  get(callback: (res:any)=> void){
      this._http.get("todos", res=> callback(res));
  }

  add(model: any, callBack: (res: any)=>void){
    this._http.post("todos",model,res=> callBack(res)); //böyle çok daha okunaklı
  }

  // get(callback: (res:any)=> void){
  //   return this._http.get("api adresi").subscribe({
  //     next: (res)=>{
  //       callback(res);
  //     },
  //     error: (err: HttpErrorResponse) =>{
  //      // console.log(err); yerine
  //      this._err.errorHandler(err);
  //     }
  //   });
  // }

  // add(model: any, callBack: (res:any) => void){
  //   this._http.post("api adresi",model,{}).subscribe({
  //     next: (res: any)=>{
  //       callBack(res);
  //     },
  //     error: (err: HttpErrorResponse) =>{
  //       console.log(err);
  //     }
  //   });
  // }
}


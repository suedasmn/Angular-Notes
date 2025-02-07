import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  apiUrl: string = "https://json1placeholder.typicode.com/"
  
  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) { }

  get(api: string, callBack: (res:any)=> void){
    let headers= {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    }
    this._http.get(this.apiUrl + api).subscribe({
      next: (res)=>{
        callBack(res);
      },
      error: (err: HttpErrorResponse)=>{
        this._err.errorHandler(err);
        //hata mesajlarını işleyecek bir metoda yolladık
      }
    })
  }

  post(api: string, model:any, callBack:(res:any)=> void){
    let headers= {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    }
    this._http.post(this.apiUrl +api ,model).subscribe({ //headers eklenmedi!!!
      next: (res)=>{
        callBack(res);
      },
      error: (err: HttpErrorResponse)=>{
        this._err.errorHandler(err);
      } 
    })
  } 
}


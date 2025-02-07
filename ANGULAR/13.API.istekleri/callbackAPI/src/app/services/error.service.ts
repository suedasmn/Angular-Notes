import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorHandler(err: HttpErrorResponse){
    if(err.status==404){
      console.log("API adresine ulasilamiyor")
    }
    console.log(err);
  }
}
//hataların derlenip daha okunaklı hale gelmesi için
//hatalar bize HttpErrorResponse isimli bir obje ile gelmekte
//Bu yapıyla beraber tüm hata mesajları tek bir metot üzerinden derlenir.


import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const test1Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TestInterceptor implements HttpInterceptor {

//   constructor() { }

//   intercept(request: HttpRequest<unknown>, next: HttpHandler):
//     Observable<HttpEvent<unknown>> {
//     let token localStorage.getItem("token");
//     let newRequest = request.clone({
//       headers: request.headers.set("Authentication", "Bearer" + token)
//     });
//     return next.handle(newRequest).pipe( ((pipe lar api isteklerinden dönen sonuçları işlememizi sağlar.))
  catchError((err: HttpErrorResponse)=> {
    //error handler //artık buradna hata mesjalarını istiyoruz
    console.log(err);

    return of() //rjxs kütüphensinden geliyo
  })       
//   }
// }


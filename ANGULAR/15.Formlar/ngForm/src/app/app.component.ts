import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  login(form: NgForm){ //tip olarak ngform //import et
    if(form.valid){
      console.log(form.value); //değerlerine erişiriz
    }
  }
}

//<form #loginForm="ngForm"> //format bu
//Email
// <input ***name="email" required minlength="3"  // ***mutlaka olmalı */
// ***ngModel #email email type="text">    //#email şart değil isimlendirdik  
//email tipinde kabul etmesi için şart
// (click)="login(loginForm)">Giriş Yap</button> 


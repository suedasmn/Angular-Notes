import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  callSwall(){
    Swal.fire({
      text: "mesaj kismi",
      title: "baslik kismi",
      confirmButtonText: "onay",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "vazgeç",
      cancelButtonColor: "red",
    }).then(res=>{
      if(res.isConfirmed){
        alert("swal onaylandi");
      }
      if(res.isDismissed){
        alert("swal reddedildi");
      }
    });
    //toast şeklinde kullanımı da var
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    Toast.fire('something interesting happened','','warning')
  }
}

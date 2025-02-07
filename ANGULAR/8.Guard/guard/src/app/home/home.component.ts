import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string ="";
constructor(
  private router: Router
){}

checkStatus(){}

logout(){
  // localStorage.clear(); //sildik clear-her sey
  localStorage.removeItem("token") //spesifik hangi key verirsek onu siler
  this.router.navigateByUrl("/login");
}
}

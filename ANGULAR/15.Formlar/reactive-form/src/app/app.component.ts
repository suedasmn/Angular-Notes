import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  addForm: FormGroup = new FormGroup({});

  ngOnInit(): void {   //uygulama başlamadan başlar
    this.createAddForm();

    this.addForm.controls["email"].setValue("suedasmn@gmail.com"); 
    //birine başlangıç değeri girmek ya da değer atamak istersek
  }

  createAddForm(){
    this.addForm = new FormGroup({ 
      //altına oluşturacağımız değişkenleri veriyoruz
      email: new FormControl("",[Validators.required,Validators.email]), 
      //"başlangıç değeri" ve validasyon kuralları
      password: new FormControl("",[Validators.required,
        Validators.minLength(2),Validators.maxLength(10)])
    });
  }

  add(){
    if(this.addForm.valid){ //eğer validse işlem yap
      console.log(this.addForm.value); 
      //value kayıtlarının obje olarak çıktısını verir
      this.addForm.reset(); 
      //değer girdikten sonra sıfırlanmasını sağlıyoruz
    }
  }
}






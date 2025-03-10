import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addModel = new Employee();
  updateModel = new Employee();
  employees: Employee[]=[];
  isUpdateFormActive: boolean = false;
  index: number=0;

  constructor(
    private _date: DatePipe
  ){
    this.addModel.startingDate= this._date.
    transform(new Date(),'yyyy-MM-dd');
  }

  save(form:NgForm){
    if(form.valid){
      this.employees.push(this.addModel);
      this.addModel = new Employee();
      this.addModel.startingDate=this._date.
        transform(new Date(),'yyyy-MM-dd');
    }
  }

  get(model: Employee, index: number){
    this.index=index;
    this.updateModel = {...model};
    this.isUpdateFormActive=true;
  }

  cancel(){
    this.isUpdateFormActive=false;
  }

  update(form: NgForm){
    if(form.valid){
      this.employees[this.index]=this.updateModel;
      this.isUpdateFormActive=false;
    }
  }
}

class Employee{
  name: string="";
  profession: string="";
  startingDate: string="";
}


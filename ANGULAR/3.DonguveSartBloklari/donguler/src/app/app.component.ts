import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Döngüler</h1>
  <ul>
    @for(data of todos; track data){
      <li>
        index: {{ $index}} ||
        ilkKayitMi?: {{ $first }} ||
        sonKayitMi?: {{ $last }} ||
        veri: {{ data }}
      </li>
    }
  </ul>
  `})
export class AppComponent {
  todos: ToDoModel[] = [
    { work: "Example 1", isCompleted: true},
    { work: "Example 2", isCompleted: true},
    { work: "Example 3", isCompleted: true},
  ]
  constructor(){
    this.save();
  }
  save() {
    console.log("-for döngüsü-");
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  
    console.log("-listeyi for ile dönme -");
    for(let i = 0; i <this.todos.length; i++) {
    console.log(this.todos[i].work);
    }

    console.log("-listeyi foreach ile dönme-");
    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isCompleted);
    })

    console.log("-listeyi for of ile dönme-");
    for (let data of this.todos) {
      console.log(data.work);
      console.log(data.isCompleted);
    }

    console.log("-listeyi for in ile dönme-");
    for(let index in this.todos){
      console.log(this.todos[index].work);
    }
  }  
}
export class ToDoModel{
  work: string ="";
  isCompleted:boolean =false;
}



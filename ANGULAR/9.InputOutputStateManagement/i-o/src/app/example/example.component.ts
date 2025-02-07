import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @Input() name: string =""; //dışarıdan alacağımızı bildirdik.
  @Output() changeNameEvent = new EventEmitter<string>

  changeName(){
  this.changeNameEvent.emit(this.name);
  }
}



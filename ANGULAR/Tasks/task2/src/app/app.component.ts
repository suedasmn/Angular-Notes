import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputKontroluDirective } from './input-kontrolu.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputKontroluDirective],
  template:`
  <h1>Input Kontrolu</h1>
  <form>
    <div>
      <input InputKontrolu  type="text">
      <p>Sadece string kabul edilmektedir.</p>
    </div>
    <button type="submit">Send</button>
  </form>`
})
export class AppComponent {

  element='';
}

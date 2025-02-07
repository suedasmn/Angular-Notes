import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:``
})
export class AppComponent {
  @Input() id?: string = ""; //çubuğa yazdığımız değeri yakalar
  @Input() name?: string = "";
  //localhost:4200?id=1234 şu değeri paramtere olarak product componentte yakalar.
}



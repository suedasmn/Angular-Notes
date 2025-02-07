import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet],
  template: ``,
})
export class ContactComponent {
  constructor(
    private activated: ActivatedRoute
  ){
    this.activated.params.subscribe((res)=> {
      console.log(res['params']);
    })
  }
}



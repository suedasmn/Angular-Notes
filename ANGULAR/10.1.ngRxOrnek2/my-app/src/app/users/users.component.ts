import { Component } from '@angular/core';
import { UserModel } from '../user.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: UserModel[]=[];
  constructor( public store: Store<{users: UserModel[]}>){
    this.store.select("users").subscribe((res: UserModel[])=>{
      this.users=res;
    })
  }
}


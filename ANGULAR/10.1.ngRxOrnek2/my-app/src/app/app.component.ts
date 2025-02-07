import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from './user.model';
import { UsersComponent } from './users/users.component';
import { addUser } from './users.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  template: `
  <input [(ngModel)]="user.name">
  <input [(ngModel)]="user.lastName">
  <button (click)="add()">Kaydet</button>
  <users></users>`
})

export class AppComponent {
  user: UserModel = new UserModel();

  constructor(
    private store: Store<{users: UserModel[]}>
  ) { }

  add() {
    this.store.dispatch(addUser({user: this.user}))
    this.user = new UserModel();
  }
}


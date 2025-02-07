import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

export const routes: Routes = [
    {
        path:'', //default path
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login', //login path
        component: LoginComponent
    },
    {
        path:'', //empty path
        component: LayoutComponent,
        children: [ //loginden sonra erişeceklerimiz
            {
                path:'user-list',
                component: UserListComponent
            },
            {
                path:'createUser',
                component: CreateUserComponent
            },
        ]
    },

];

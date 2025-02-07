import { Routes } from '@angular/router';

export const routes: Routes = [ //lazyloading
    {
        path:"",
        loadComponent: () => import("./home/home.component").then(c=> c.HomeComponent) 
        //sondaki then ifadesini istemezsek home compnent classına export default class.. ekle
    }
];


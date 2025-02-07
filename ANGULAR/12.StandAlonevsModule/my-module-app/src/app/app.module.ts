import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyModule } from "./my/my.module";

@NgModule({
  declarations: [ //appte bunun altında görünenleri kullanabiliriz
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModule
],
  providers: [], //servisleri eklemek
  bootstrap: [AppComponent] //uyg başında hangi comp ayağa kalkacak
})
export class AppModule { }


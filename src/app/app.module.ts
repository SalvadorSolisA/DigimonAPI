import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonesComponent } from './components/digimones/digimones.component';
import { DigimonesServices } from "./components/digimones/digimones.service";


@NgModule({
  declarations: [
    AppComponent,
    DigimonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DigimonesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

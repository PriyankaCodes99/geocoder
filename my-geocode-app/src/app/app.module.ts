import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';


import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

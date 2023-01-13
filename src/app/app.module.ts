import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import forms module to and add it to imports array below

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // imported it here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

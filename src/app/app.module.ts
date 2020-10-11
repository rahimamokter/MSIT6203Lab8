import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardlogoDirective } from './cardlogo.directive';

import {ReactiveFormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CardlogoDirective
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlogoDirective } from './cardlogo.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardlogoDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

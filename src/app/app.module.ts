import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormControlDirective, FormGroupDirective} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CallComponent }   from './call/call';
import { AnswerComponent } from './answer/answer'

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

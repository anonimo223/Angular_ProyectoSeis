import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
        MatlconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule } from '@angular/material'; //Error

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

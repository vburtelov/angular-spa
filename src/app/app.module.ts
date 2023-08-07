import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import PrimeNG modules

import {AppComponent} from "./app.component";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    RouterModule.forRoot([{path: '', component: AppComponent}]),
    ButtonModule,
    CardModule,
    ImageModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {
}

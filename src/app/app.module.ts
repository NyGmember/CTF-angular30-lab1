import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogModule } from "./catalog/catalog.module";
import { HomeModule } from "./home/home.module";
import { AppRouteModule } from "./app-route.module";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    AppRouteModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

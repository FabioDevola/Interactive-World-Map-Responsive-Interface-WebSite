import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

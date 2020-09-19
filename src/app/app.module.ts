import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

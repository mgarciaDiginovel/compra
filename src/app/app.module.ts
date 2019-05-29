import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OrdenCompraComponent]
})
export class AppModule { }

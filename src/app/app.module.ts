import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { PerfilComponent } from './home/components/perfil/perfil.component';
import { TrabalhosComponent } from './home/components/trabalhos/trabalhos.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PerfilComponent, TrabalhosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

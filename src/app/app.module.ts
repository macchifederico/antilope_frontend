import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos.service';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FiltrosComponent,
    RegistroComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

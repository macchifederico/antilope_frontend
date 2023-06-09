import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductosService } from './services/productos.service';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LateralComponent } from './components/lateral/lateral.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FinalizarcompraComponent } from './components/finalizarcompra/finalizarcompra.component';
import { MinicarritoComponent } from './components/minicarrito/minicarrito.component';
import { DatospersonalesComponent } from './components/finalizarcompra/datospersonales/datospersonales.component';
import { DatosenvioComponent } from './components/finalizarcompra/datosenvio/datosenvio.component';
import { FormaentregaComponent } from './components/finalizarcompra/formaentrega/formaentrega.component';

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
    LateralComponent,
    CarritoComponent,
    FinalizarcompraComponent,
    MinicarritoComponent,
    DatospersonalesComponent,
    DatosenvioComponent,
    FormaentregaComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductosService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

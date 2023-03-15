import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './auth.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FinalizarcompraComponent } from './components/finalizarcompra/finalizarcompra.component';

const routes: Routes = [
  {path:'', redirectTo: 'productos', pathMatch: 'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: 'finalizarcompra', component:FinalizarcompraComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

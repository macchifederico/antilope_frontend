import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { Carrito } from '../models/Carrito';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  API_URL = 'http://localhost:3000/carrito'

  constructor(private http: HttpClient) { }

  agregarProductoAlCarrito(producto: Producto){    
    return this.http.post(`${this.API_URL}`, producto);
  }
  
  obtenerProductosDelCarrito(): Observable<Carrito>{
    return this.http.get<Carrito>(`${this.API_URL}`);
  }

  eliminarProductoDelCarrito(id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}

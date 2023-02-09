import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL= 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  getProductosList(): Observable<Producto>{
    return this.http.get<Producto>(`${this.API_URL}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/Sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  API_URL: string = 'http://localhost:3000/sucursales';

  constructor(private http: HttpClient) { }

  obtenerSucursales(): Observable<Sucursal>{
    return this.http.get(this.API_URL);
  }


}

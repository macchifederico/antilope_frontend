import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  API_URL = "http://localhost:3000/cliente";

  obtenerDatosCliente(id: number){
    return this.http.get(`${this.API_URL}/${id}`);
  }

  updateInfoCliente(id: number, infoCliente: any){
    return this.http.put(`${this.API_URL}/${id}`, infoCliente)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API_URL = 'http://localhost:3000/pedido'

  constructor(private http: HttpClient) { }

  getPedidoCliente(){
    return this.http.get(`${this.API_URL}`);
  }

  altaPedido(seleccion: any){
    return this.http.post(`${this.API_URL}`, seleccion);
  }
}

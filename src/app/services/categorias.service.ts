import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URL: 'http://localhost:3000/categorias'; 

  constructor(private http: HttpClient) { }

  getAllCategorias (): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.API_URL}`)

  }
}

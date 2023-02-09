import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/auth";

  constructor(private http: HttpClient) { }

  registro(cliente: Cliente){
    return this.http.post(`${this.URL}/registro`, cliente);
  }

  login(cliente: Cliente) : Observable<any>{
    return this.http.post(`${this.URL}/login`, cliente);
  }
}

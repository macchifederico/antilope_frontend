import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/auth";

  constructor(private http: HttpClient, private router: Router) { }

  registro(cliente: Cliente){
    return this.http.post(`${this.URL}/registro`, cliente);
  }

  login(cliente: Cliente) : Observable<any>{
    return this.http.post(`${this.URL}/login`, cliente);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); //devuelve true si existe token - false si no existe
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login'])
  }

  // expiredToken(){
  //   return
  // }

}

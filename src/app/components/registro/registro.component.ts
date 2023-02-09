import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cliente = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    direccion: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  registro(){    
    this.auth.registro(this.cliente).subscribe(
      {
        next: res => {
          console.log(res);
          
        },
        error: err => {
          console.log(err);
          
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registro(){    
    this.auth.registro(this.cliente).subscribe(
      {
        next: res => {
          const msg = JSON.parse(JSON.stringify(res));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: msg.text,
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: err => {                    
          const msg = JSON.parse(JSON.stringify(err.error));
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: msg.text,
            showConfirmButton: false,
            
          })
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente = {
    email: '',
    password: ''
  }

  constructor(
    private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){    
    this.auth.login(this.cliente).subscribe({
      next: res => {
        localStorage.setItem('token', res.token) //cambiar a cookies
        localStorage.setItem('id', res.id)        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          this.router.navigate(['/productos']);
        }, 3000);
      },
     error: err => {
        console.log(err.error.text);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: err.error.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    })
  }

}

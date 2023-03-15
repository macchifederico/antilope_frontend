import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    this.auth.login(this.cliente).subscribe(
        res => {
          if(res !== null){
            localStorage.setItem('token', res.token)            
            this.router.navigate(['/productos']);
          }
        }
    )
  }

}

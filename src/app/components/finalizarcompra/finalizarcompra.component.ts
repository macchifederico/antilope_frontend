import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.css']
})
export class FinalizarcompraComponent implements OnInit {

  constructor(private srvCarrito: CarritoService, private auth: AuthService) { }

  cliente: Cliente;
  idClienteLogueado: string;

  ngOnInit(): void {
  }

  getInformacionCliente(){
    
  }

}

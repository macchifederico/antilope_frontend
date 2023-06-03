import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-formaentrega',
  templateUrl: './formaentrega.component.html',
  styleUrls: ['./formaentrega.component.css']
})
export class FormaentregaComponent implements OnInit {
 

//  constructor(private sucursalesService: SucursalesService) { }

  sucursales : any = [];
  seleccion : number = 0;
  carrito : any = [];

  constructor(private sucursalesService: SucursalesService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.obetenerSucursales();
    
  }

  obetenerSucursales(){
    this.sucursalesService.obtenerSucursales().subscribe({
      next: res => {
        this.sucursales = res;
        
      },
      error: err => {
        console.log(err);
      }
    });
  }

  actualizarEnvio(){
    this.carritoService.cambiarEstadoCarrito(this.seleccion).subscribe({
      next: res => {
        console.log(res);
        
      },
      error: err => {
        console.log(err);
        
      }
    })
  }
}

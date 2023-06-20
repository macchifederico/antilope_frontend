import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { FormGroup, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formaentrega',
  templateUrl: './formaentrega.component.html',
  styleUrls: ['./formaentrega.component.css']
})
export class FormaentregaComponent implements OnInit {
 

//  constructor(private sucursalesService: SucursalesService) { }

  sucursales : any = [];
  seleccion : any;
  carrito : any = [];
  pedido : any;

  constructor(private sucursalesService: SucursalesService, private carritoService: CarritoService,
              private pedidoService: PedidoService) { }

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
    this.pedidoService.altaPedido(this.seleccion).subscribe({
      next: res => {        
        const msg = JSON.parse(JSON.stringify(res));        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: msg.text,
          showConfirmButton: false,
          timer: 2000
        }),
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      },
      error: err => {
        const msg = JSON.parse(JSON.stringify(err.error));
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: msg.text,
          showConfirmButton: false,
          timer: 2000
        }),
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    })
  }
  
  getInfoPedidoCliente(){
    this.pedidoService.getPedidoCliente().subscribe({
      next: res => {
        this.pedido = res;        
      },
      error: err => {
        this.pedido = err;      
      }
    })
  }
}

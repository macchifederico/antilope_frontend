import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoService } from 'src/app/services/pedido.service';
import Swall from 'sweetalert2';

@Component({
  selector: 'app-minicarrito',
  templateUrl: './minicarrito.component.html',
  styleUrls: ['./minicarrito.component.css']
})
export class MinicarritoComponent {

  productosCarrito: any = [];
  precioTotal: number;
  tituloBoton: string = "";
  pedido: any = [];

  constructor(private router: Router, private carritoService: CarritoService, private pedidoService: PedidoService) {
    this.getProductosDelCarrito();    
  }

  ngOnInit() {
    this.getInfoPedidoCliente();
  }
  
  seguirComprando(){
    this.router.navigate(['/productos']);
  }

  finalizarCompra(){
    this.router.navigate(['/finalizarcompra']);
  }
  
  vaciarCarrito(){
    this.carritoService.vaciarCarrito(this.productosCarrito).subscribe(
      {
        next: res => {
          console.log(res);
          const msg = JSON.parse(JSON.stringify(res));
          Swall.fire({
            position: 'center',
            icon: 'warning',
            title: msg.text,
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        },
        error: err => {
          console.log(err);
        }
      }
    )    
  }

  getProductosDelCarrito(){    
    this.carritoService.obtenerProductosDelCarrito().subscribe(
      {
        next: res => {          
          this.productosCarrito = res;
          this.precioTotal = this.productosCarrito.map((p: { precio_unitario: any; }) => p.precio_unitario).reduce((a: number, b: number) => a + b, 0);   
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  getInfoPedidoCliente(){
    this.pedidoService.getPedidoCliente().subscribe({
      next: res => {
        this.pedido = res;              
      },
      error: err => {
        this.pedido = err.error;        
      }
    })
  }
}

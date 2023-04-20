import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito: any;
  precioTotal: number;

  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.getProductosDelCarrito();
  }

  getProductosDelCarrito(){
    this.carritoService.obtenerProductosDelCarrito().subscribe(
      {
        next: res => {
          this.productosCarrito = res;

          for (let i = 0; i < this.productosCarrito.length; i++) {
            const element = this.productosCarrito[i];
            this.precioTotal += element.precio_unitario;
          }
        },
        error: err => {
          console.log(err);
          
        }
      }
    )
  }

  eliminarProducto(carrito: Producto){
    const id = carrito.id;    
    if(id){
      this.carritoService.eliminarProductoDelCarrito(id).subscribe(
        {
          next: res => {
            const msg = JSON.parse(JSON.stringify(res));
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: msg.text,
              showConfirmButton: false,
              timer: 2000
            })
            setTimeout(() => {
              document.location.reload();
            }, 3000);
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }
  }

}

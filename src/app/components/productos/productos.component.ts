import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private prodService: ProductosService, private carrService: CarritoService) { 

  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.prodService.getProductosList().subscribe(
      {
        next: res => {
          this.productos = res;
          
        },
        error: err => {
          console.log(err);
          
        }
      }
    )
  }

  agregarAlCarrito(producto: Producto){  
    this.carrService.agregarProductoAlCarrito(producto).subscribe(
      {
        next: res => {
          const msg = JSON.parse(JSON.stringify(res));
          console.log("Producto agregado");
          Swal.fire({
            position: 'center',
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
          const msg = JSON.parse(JSON.stringify(err));
          console.log("Producto agregado");
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: msg.text,
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            document.location.reload();
          }, 2000);
          
        }         
      }
    );
      
  }

}

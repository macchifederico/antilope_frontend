import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

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
    console.log(producto);
          
    this.carrService.agregarProductoAlCarrito(producto).subscribe(
      {
        next: res => {
          console.log("Producto agregado");
          
        },
        error: err => {
          console.log();
          
        }         
      }
    );
      
  }

}

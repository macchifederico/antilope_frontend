import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private prodService: ProductosService) { }

  ngOnInit(): void {
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

}

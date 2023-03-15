import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias: any = [];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.getAllCategorias().subscribe(
      {
        next: res => {
          this.categorias = res;
          console.log(this.categorias);
          
        },
        error: err => {
          console.log(err);
          
        }
      }
    )
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minicarrito',
  templateUrl: './minicarrito.component.html',
  styleUrls: ['./minicarrito.component.css']
})
export class MinicarritoComponent {

  constructor(private router: Router){}

  seguirComprando(){
    this.router.navigate(['/productos'])
  }

  finalizarCompra(){
    this.router.navigate(['/finalizarcompra'])
  }
}

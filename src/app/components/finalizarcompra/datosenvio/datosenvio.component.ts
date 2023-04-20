import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datosenvio',
  templateUrl: './datosenvio.component.html',
  styleUrls: ['./datosenvio.component.css']
})
export class DatosenvioComponent {

  infoCliente: Cliente;
  infoUpdatearCliente: Cliente;
  updateForm : FormGroup;

  direccion: string = "";
  codPostal: number = 0;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) { 
    this.getInfoCliente();

    this.updateForm = this.fb.group({
      direccion: ['', Validators.required],
      codPostal: ['', Validators.required]
    })
  }
  


  getInfoCliente(){
    const idCliente = parseInt(localStorage.getItem('id'));
    this.clienteService.obtenerDatosCliente(idCliente).subscribe({
      next: res => {
          this.infoCliente = res;
          this.direccion = this.infoCliente.direccion;
          this.codPostal = this.infoCliente.codigoPostal;
          
      },
      error: err => {
        console.log(err);
        
      }
    })
  }

  updateInfoCliente(){
    const idCliente = parseInt(localStorage.getItem('id'));
    this.infoUpdatearCliente = this.updateForm.value;
    console.log(this.infoUpdatearCliente);
    
    this.clienteService.updateInfoCliente(idCliente, this.infoUpdatearCliente).subscribe({
      next: res => {
        const msg = JSON.parse(JSON.stringify(res));
        Swal.fire({
          position: 'center',
          icon: 'success',
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
    });
  }
  
  

}

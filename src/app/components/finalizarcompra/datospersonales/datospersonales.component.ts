import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent {

  infoCliente: Cliente;
  infoUpdatearCliente: Cliente;
  updateForm : FormGroup;

  nombre: string = "";
  apellido: string = "";
  telefono: number = 0;
  email: string = "";
  dni: number = 0;

  constructor(private clienteService: ClienteService, private fb: FormBuilder){
    this.getInfoCliente();

    this.updateForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    
  }


getInfoCliente(){
  const idCliente = parseInt(localStorage.getItem('id'));
  this.clienteService.obtenerDatosCliente(idCliente).subscribe({
    next: res => {
        this.infoCliente = res;
        
        this.nombre = this.infoCliente.nombre;
        this.apellido = this.infoCliente.apellido;
        this.email = this.infoCliente.email;
        this.dni = this.infoCliente.dni;
        this.telefono = this.infoCliente.telefono;
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

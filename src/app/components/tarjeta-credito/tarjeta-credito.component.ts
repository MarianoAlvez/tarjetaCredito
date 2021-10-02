import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    {titular: 'Mariano Alvez', numeroTarjeta:'999999999999', fechaExpiracion:'11/23', cvv:'123'},
    {titular: 'juan Paz', numeroTarjeta:'88888888888888', fechaExpiracion:'1/25', cvv:'234'},
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) { 
    this.form =this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta() {
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    //console.log(tarjeta);  solo para controlar 

    this.listTarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada'); //https://www.npmjs.com/package/ngx-toastr
    this.form.reset(); //resetea el formulario    
  }

  eliminarTarjeta(index: number) {
    //console.log(index); verifico que esta tomando el index
    this.listTarjetas.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta Eliminada');
  }
}

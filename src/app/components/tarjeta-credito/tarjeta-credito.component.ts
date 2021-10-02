import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

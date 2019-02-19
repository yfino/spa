import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html'
})
export class TarjetaCreditoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleExtracto() {
this.router.navigate(['detalle-extracto']);
}

}

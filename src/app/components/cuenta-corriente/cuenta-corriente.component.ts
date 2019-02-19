import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-corriente',
  templateUrl: './cuenta-corriente.component.html'
})
export class CuentaCorrienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
    }
}

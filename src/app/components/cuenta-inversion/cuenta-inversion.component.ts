import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cuenta-inversion',
  templateUrl: './cuenta-inversion.component.html'
})
export class CuentaInversionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
  }

}

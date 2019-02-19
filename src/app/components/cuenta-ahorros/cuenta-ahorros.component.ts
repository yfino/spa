import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cuenta-ahorros',
  templateUrl: './cuenta-ahorros.component.html'
})
export class CuentaAhorrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
    }
}

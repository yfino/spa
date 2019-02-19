import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-extracto',
  templateUrl: './detalle-extracto.component.html'

})
export class DetalleExtractoComponent implements OnInit {
  loading: boolean;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  this.loading = true;
  this.loading = false;
    }
  ngOnInit() {
  }
  verRecomendacion() {
    this.router.navigate(['recomendacion']);
  }

}


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-envio-documentos-pyme',
  templateUrl: './envio-documentos-pyme.component.html'
})
export class EnvioDocumentosPymeComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['/carga-documentos-pyme']);
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
  }
  verLoading() {
    this.router.navigate(['/loading']);
  }

}

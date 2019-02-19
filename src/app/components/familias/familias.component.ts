import { Component, OnInit } from '@angular/core';
import {FamiliasService, Familia} from '../../servicios/familias.service';
import {Router} from '@angular/router';

@Component({

  selector: 'app-familias',
  templateUrl: './familias.component.html'
})
export class FamiliasComponent implements OnInit {
  conjuntoFamilias: Familia[] = [];

  constructor(private _familiasService: FamiliasService,
    private router: Router) {
  }

  ngOnInit() {
  this.conjuntoFamilias = this._familiasService.getFamilias();
 // console.log( this.familias);

}
verFamilias() {
  this.router.navigate(['/familias']);
}
verRegistroPyme() {
  this.router.navigate(['/registro-pyme']);
}

verFamiliaSeguros() {
  this.router.navigate(['/familia-seguros']);
}
verDetalleFamilia(idx: number) {
  this.router.navigate(['/detalle-familias', idx]);
  console.log(this.conjuntoFamilias);
}
verCargaDocumentosPyme() {
  this.router.navigate(['carga-documentos-pyme']);
}
verFamiliaPagos() {
  this.router.navigate(['/familia-pagos']);
}
verFamiliaRecaudos() {
  this.router.navigate(['/familia-recaudos']);
}
verFamiliaNominaFiliales() {
  this.router.navigate(['/familia-nomina-filiales']);
}
verFamiliaFilialesExterior() {
  this.router.navigate(['/familia-filiales-exterior']);
}

VerFamiliaAnalitica() {
  this.router.navigate(['/familia-analitica']);
}
verDetalleExtracto() {
this.router.navigate(['detalle-extracto']);
}
verRecomendacion() {
  this.router.navigate(['recomendacion']);
  }
  verLoading() {
    this.router.navigate(['loading']);
  }
}


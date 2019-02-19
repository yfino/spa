import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FamiliasService} from '../../servicios/familias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-familia-agregacion',
  templateUrl: './familia-agregacion.component.html',

})
export class FamiliaAgregacionComponent  implements OnInit {
 @Input() conjuntoFamilias: any = {};
 @Input() index: number;
 constructor(private router: Router,
            private activatedRoute: ActivatedRoute,
            private _familiasService: FamiliasService) { }
ngOnInit () {
    this.activatedRoute.params.subscribe(params => {
    this.conjuntoFamilias = this._familiasService.getFamilias();
  });
}

  verRegistroPyme() {
    this.router.navigate(['/registro-pyme']);
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['carga-documentos-pyme']);
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
  }
}

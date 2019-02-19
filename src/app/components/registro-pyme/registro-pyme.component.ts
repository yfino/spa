import { Component,   Input} from '@angular/core';
import {FamiliasService, Familia} from '../../servicios/familias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-pyme',
  templateUrl: './registro-pyme.component.html'
})
export class RegistroPymeComponent {
  @Input() conjuntoFamilias: any = {};
  @Input() index: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) { }

  verCargaDocumentosPyme() {
    this.router.navigate(['/carga-documentos-pyme']);
  }

}

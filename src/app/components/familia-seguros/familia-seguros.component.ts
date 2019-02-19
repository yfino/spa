import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FamiliasService} from '../../servicios/familias.service';


@Component({
  selector: 'app-familia-seguros',
  templateUrl: './familia-seguros.component.html'
})
export class FamiliaSegurosComponent   {
  conjuntoFamilias: any = {};
  termino: string;

  constructor ( private activatedRoute: ActivatedRoute,
              private _familiasService: FamiliasService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.conjuntoFamilias = this._familiasService.buscarFamilia(params['id']);
      });
  }
}


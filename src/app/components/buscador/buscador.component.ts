import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliasService } from '../../servicios/familias.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  conjuntoFamilias: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private _familiasService: FamiliasService) {

     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.conjuntoFamilias = this._familiasService.buscarFamilia(params['termino']);
      console.log(this.conjuntoFamilias);
    });
  }
  verFamilias() {
    this.router.navigate(['familias']);
  }
  verFamiliaAnalitica() {
    this.router.navigate(['familia-analitica']);
  }
}

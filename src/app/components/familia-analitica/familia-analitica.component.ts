import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-familia-analitica',
  templateUrl: './familia-analitica.component.html'
})
export class FamiliaAnaliticaComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['/carga-documentos-pyme']);
  }
  verFamilias() {
    this.router.navigate(['familias']);
  }
  verFamiliaAgregacion() {
    this.router.navigate(['familia-agregacion']);
  }
}

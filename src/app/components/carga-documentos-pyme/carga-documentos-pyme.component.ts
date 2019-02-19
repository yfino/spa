import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carga-documentos-pyme',
  templateUrl: './carga-documentos-pyme.component.html'
})
export class CargaDocumentosPymeComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  verEnvioDocumentosPyme() {
    this.router.navigate(['/envio-documentos-pyme']);
  }
  verFamiliaAgregacion() {
    this.router.navigate(['familia-agregacion']);
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['/carga-documentos-pyme']);
  }
  verLista() {
    const todos: any[] = ['Extracto Cuenta Ahorros Banco.PDF', 'Extracto Cuenta Corriente Banco.PDF', 'Extracto Cuenta  Banco.PDF', 'hola'];
    // Arreglo es el que va a quedar con los dat
    const arr: any[] = [];
    const long: any[] = [];

  for (let i = 0; i < todos.length; i++) {
     arr[i] = todos.push[0];
     arr[i] = todos[i];
     console.log(arr[i]);
     console.log(arr);
     arr.keys();
  }
}
}

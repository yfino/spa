import { Component, Directive} from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../servicios/autentication.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
  border: 1px solid red;
  }
  `]
})

export class HomeComponent {
    people: any = {
    usuario: null,
    password: null
  };
  constructor(private auth: AutenticacionService, private router: Router) {
    this.auth.getToken();
  }
  verFamilias() {
    this.router.navigate(['/familias']);
  }
  validarIngreso() {
  }
  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log('Forma', forma);
    console.log(forma.value);
    console.log('Usuario', this.people);
    console.log(forma.value);
  }
}
export class People {
  constructor(public usuario: string, public password: string) {
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adquirir-soat',
  templateUrl: './adquirir-soat.component.html'
})
export class AdquirirSoatComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verSoat(){
  this.router.navigate(['ver-soat']);
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = "Fer Bocanegra";
  nota:number=13;

  existo:boolean=true;

  personas:string[]=["Juan","Marta","Pedro","Luis"];
  constructor() { }

  ngOnInit(): void {
  }

  // metodo que cambia los valores de las variables 

  cambiarValores(){
    this.nombre="Juan";
    this.nota=99;
    this.existo=false;
  }

}

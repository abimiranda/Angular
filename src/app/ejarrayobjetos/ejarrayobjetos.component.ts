import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';
@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno>=[
    {id:1, nombre:"Abigail", apellidos:"Miranda", ciudad:"Bs. As."},
    {id:2, nombre:"Auan", apellidos:"Gutierrez", ciudad:"Madrid"},
    {id:3, nombre:"Pedro", apellidos:"Lopez", ciudad:"Guadalajara"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

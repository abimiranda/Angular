import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangsiwtch',
  templateUrl: './ejdirectivangsiwtch.component.html',
  styleUrls: ['./ejdirectivangsiwtch.component.css']
})
export class EjdirectivangsiwtchComponent implements OnInit {

  jugadores: any[]=[
    {nombre: "Lionel Messi", equipo:"PSG"},
    {nombre: "Cristiano Ronaldo", equipo:"Manchester"},
    {nombre: "Kylian Mbappé", equipo:"PSG"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

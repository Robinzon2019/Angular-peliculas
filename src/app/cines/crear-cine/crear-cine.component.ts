import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.scss']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO): void{
    console.log(cine);
  }

}

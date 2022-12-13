import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.scss']
})
export class EditarCineComponent implements OnInit {

  modelo: cineDTO = { nombre: 'Sambil', latitud: 18.483833793977475, longitud: -69.9393939971924};

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO): void{
    console.log(cine);
  }

}

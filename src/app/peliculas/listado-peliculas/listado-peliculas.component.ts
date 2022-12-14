import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input()
  peliculas: any;

  constructor() { }

  ngOnInit(): void {

  }

  remover(indicePelicula: number){
    this.peliculas.splice(indicePelicula, 1);
  }

}

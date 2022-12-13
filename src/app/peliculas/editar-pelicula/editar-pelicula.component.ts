import { Component, OnInit } from '@angular/core';
import { peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent implements OnInit {

  modelo: peliculaDTO = {titulo: 'Spider-Man', trailer: 'ABC', enCines: true, resumen: 'Cualquier cosa', fechaLanzamiento: new Date(), poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aveRtSLmWTDcPsjHxeR6aYir_WRcHs5e2Q&usqp=CAU'}; 
  
  constructor() { }

  ngOnInit(): void {
  }

}

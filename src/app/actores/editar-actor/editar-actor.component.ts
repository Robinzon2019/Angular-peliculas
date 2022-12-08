import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  modelo: actorDTO = {nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEznDG-D-G8P_bZn2YmmY5FmWS2NdWOT8qSw&usqp=CAU'};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => console.log(params['id']))
  }

  guardarCambios(actor: actorCreacionDTO): void {
     console.log('Act: ', actor);
  }

}

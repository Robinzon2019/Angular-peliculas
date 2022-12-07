import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  modelo: actorCreacionDTO = {nombre: 'Felipe', fechaNacimiento: new Date()};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => console.log(params['id']))
  }

  guardarCambios(actor: actorCreacionDTO): void {
    // console.log('Act: ', actor);
  }

}

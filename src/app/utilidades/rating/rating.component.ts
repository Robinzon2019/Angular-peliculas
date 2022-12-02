import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = Array();
  botado = false;
  ratingAnterior!: number;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }
    else{
      this.ratingSeleccionado = 0;
    }

  }

  rate(index: number){
    this.ratingSeleccionado = index + 1;
    this.botado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}

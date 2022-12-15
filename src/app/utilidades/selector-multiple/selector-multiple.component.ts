import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModel } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.scss']
})
export class SelectorMultipleComponent implements OnInit {

  @Input()
  Seleccionados: MultipleSelectorModel[] = [];

  @Input()
  NoSeleccionados: MultipleSelectorModel[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(item: MultipleSelectorModel, index: number): void {
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index, 1);
  }

  deSeleccionar(item: MultipleSelectorModel, index: number): void {
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index, 1);
  }

  seleccionarTodo(): void {
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados = [];
  }

  deSeleccionarTodo(): void {
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }

}

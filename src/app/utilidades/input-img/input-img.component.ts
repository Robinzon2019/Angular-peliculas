import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toBase64 } from '../funciones/utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  imagenBase64: string = "";

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();
  
  constructor() { }

  ngOnInit(): void {
  }

  change(event: any){
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file)
              .then((representacionBase64: string) => this.imagenBase64 = representacionBase64)
              .catch(error => console.error(error));
              this.archivoSeleccionado.emit(file);
    }
  }

}

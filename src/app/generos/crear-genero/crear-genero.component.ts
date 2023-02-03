import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/funciones/utilidades';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent  {

  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService){}

  guardarCambios(genero: generoCreacionDTO): void {
    this.generosService.crear(genero)
    .subscribe((res) => {
        this.router.navigate([ '/generos' ]);  
      }, 
      (error) => this.errores = parsearErroresAPI(error)
    );
  }

}
 
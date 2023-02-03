import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/funciones/utilidades';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  modelo!: generoDTO;
  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.generosService.obtenerPorId(params['id'])
      .subscribe(genero => {
          this.modelo = genero;
        },
        () => this.router.navigate(['/generos']) 
        );
    });

  }

  guardarCambios(genero: generoCreacionDTO): void{
    this.generosService.editar(this.modelo.id, genero)
    .subscribe(() => {
      this.router.navigate(['/generos']);
    },
    error => this.errores = parsearErroresAPI(error)
    );
  }

}

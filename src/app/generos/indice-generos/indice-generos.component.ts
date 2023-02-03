import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export class IndiceGenerosComponent implements OnInit {

  generos!: generoDTO[];
  columnasAMostrar = ["id", "nombre", "acciones"];
  cantidadTotalRegistros!: string | null;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadRegistrosAMostrar: number){
    this.generosService.obtenerTodos(pagina, cantidadRegistrosAMostrar)
    .subscribe((res: HttpResponse<generoDTO[]>) => {

      if(res.body !== null){
        this.generos = res.body;
      }

      this.cantidadTotalRegistros = res.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }
}

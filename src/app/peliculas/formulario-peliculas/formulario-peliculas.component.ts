import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.scss']
})
export class FormularioPeliculasComponent implements OnInit {

  form!: FormGroup;

  @Input()
  modelo!: peliculaDTO | undefined;

  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Acción'},
    {llave: 3, valor: 'Comedia'}
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Sambil'},
    {llave: 2, valor: 'Ágora'},
    {llave: 3, valor: 'Acrópolis'}
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['',
        {
          validators: [
            Validators.required
          ]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });
    
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(): void {
    const generosIds = this.generosSeleccionados.map(x => x.llave);
    this.form.get('generosId')?.setValue(generosIds);
    
    const cinesIds = this.cinesSeleccionados.map(x => x.llave);
    this.form.get('cinesId')?.setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo: File): void {
    this.form.get('poster')?.setValue(archivo);
  }

  changeMarkdown(texto: string){
    this.form.get('resumen')?.setValue(texto);
  }

}

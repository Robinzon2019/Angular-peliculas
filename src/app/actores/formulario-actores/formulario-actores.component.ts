import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { formatDate } from 'src/app/utilidades/funciones/utilidades';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.scss']
})
export class FormularioActoresComponent implements OnInit {

  form!: FormGroup;
  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  @Input()
  modelo!: actorDTO;
  nombreValido = true;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nombre: [ '', {
        validators: [
          Validators.required,
          Validators.minLength(3), 
          primeraLetraMayuscula()
        ]
      }],

      fechaNacimiento: '',
      foto: ''
    });

    if(this.modelo !== undefined){
      // let fecha =  formatDate(this.modelo.fechaNacimiento);
      // this.form.controls['nombre'].setValue(this.modelo.nombre);
      // this.form.controls['fechaNacimiento'].setValue(fecha);
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios(): void {
    if(this.validarFormulario() === true){
      this.submit.emit(this.form.value);
    }
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');

    if(campo?.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo?.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres';
    }

    if(campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  validarFormulario(): boolean{

    if( (this.form.get('nombre')?.value !== "") && 
        (this.form.get('nombre')?.value[0] === this.form.get('nombre')?.value[0].toUpperCase()) &&
        (this.form.get('nombre')?.value.length >= 3) ){

      this.nombreValido = true;
      return this.nombreValido;
    }
    else{
      this.nombreValido = false;
      return this.nombreValido;
    }

  }

  getArchivoSeleccionado(file: any): void {
    // alert('File seleccionado: ' + JSON.stringify(file));
    this.form.get('foto')?.setValue(file);
  }
}

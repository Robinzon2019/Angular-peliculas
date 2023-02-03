import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.scss']
})
export class FormularioGeneroComponent implements OnInit {

  form!: FormGroup;
  nombreValido = true;

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  @Input()
  errores: string[] = [];

  @Input()
  modelo!: generoCreacionDTO;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3), 
          primeraLetraMayuscula()
        ]
      }]
    });

    if(this.modelo !== undefined){
      //this.form.controls['nombre'].setValue('Comedia');
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(): void {
    if(this.validarFormulario() === true){
      this.onSubmit.emit(this.form.value);
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

}

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
  valorInput = "";

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

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

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      console.log('Modelo: ' + JSON.stringify(this.modelo.nombre));
    }
  }

  guardarCambios(): void {
    this.onSubmit.emit(this.form.value);
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

  validarCampoNombre(): void {

    // Validando el escenario de que se quiera enviar el campo vacío
    if(this.valorInput === ""){
      this.nombreValido = false;
    }
    else{
      this.nombreValido = true;
    }

    // Validando el escenario de que se quiera enviar el campo con una longitud de menos de 3 caracteres
    if(this.valorInput.length < 3){
      this.nombreValido = false;
    }
    else {
      this.nombreValido = true;
    }

    // Validando el escenario de que se quiera enviar el campo con la primera letra minuscula, para validar esto creamos una validacion personalizada
    if(this.valorInput[0] !== this.valorInput[0].toUpperCase()){
      this.nombreValido = false;
    }
    else {
      this.nombreValido = true;
    }

  }

}

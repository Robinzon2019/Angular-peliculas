import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent implements OnInit {

  form!: FormGroup;
  nombreValido = true;
  valorInput = "";

  constructor(private router: Router, private formBuilder: FormBuilder) { }

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
  }

  guardarCambios(): void {
    // TODO Guardar los cambios
    this.router.navigate([ '/generos' ]);
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
    if(this.valorInput[0] !== this.valorInput[0].toLocaleUpperCase()){
      this.nombreValido = false;
    }
    else {
      this.nombreValido = true;
    }

  }

}

import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Importa esto

@Component({
  selector: 'app-modalsuscripcion',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modalsuscripcion.component.html',
  styleUrl: './modalsuscripcion.component.css'
})
export class ModalsuscripcionComponent {
  @ViewChild('step1Form') step1Form!: NgForm;
  @ViewChild('step2Form') step2Form!: NgForm;
  @ViewChild('step3Form') step3Form!: NgForm;

  step = 1;

  cliente = {
    nombres: '',
    apellidos: '',
    telefono: '',
    ciudad: ''
  };

  producto = {
    nombre: '',
    detalles: '',
    servicioStreaming: '',
    tipoSuscripcion: '',
    tiempoSuscripcion: '',
    promocion: ''
    // otros campos
  };

  pago = {
    metodo: '',
    tipoPago: '',
    razonSocial: '',
    nit: '',
    total: 0 // Inicializamos total a 0 o al valor por defecto que necesites
    // otros campos
  };

  siguiente() {
    // Verificar la validez del formulario solo en el Paso 1 antes de avanzar
    if (this.step === 1) {
      // Añadir verificación para asegurarse de que step1Form está definido
      if (this.step1Form && this.step1Form.valid) {
        this.step++;
      } else {
        // Opcional: mostrar un mensaje al usuario si el formulario es inválido
        console.log('Formulario del Paso 1 inválido. No se puede avanzar.');
        // Marcar los campos como touched para mostrar los mensajes de error
        if (this.step1Form) {
           this.step1Form.form.markAllAsTouched();
        }
      }
    } else if (this.step === 2) {
        // Verificar la validez del formulario del Paso 2
        if (this.step2Form && this.step2Form.valid) {
             this.step++;
        } else {
            console.log('Formulario del Paso 2 inválido. No se puede avanzar.');
             if (this.step2Form) {
               this.step2Form.form.markAllAsTouched();
            }
        }
    } else if (this.step < 3) {
      // Lógica para validar otros pasos si es necesario antes de avanzar
      this.step++;
    }
  }

  atras() {
    if (this.step > 1) {
      this.step--;
    }
  }

  cancelar() {
    // La lógica para cerrar el modal cuando se usa data-bs-dismiss
    // se maneja por Bootstrap, pero puedes añadir lógica adicional aquí si es necesario.
    console.log('Modal cancelado');
  }

  guardar() {
    // Verificar la validez del formulario del Paso 3 antes de guardar
    if (this.step3Form && this.step3Form.valid) {
      console.log('Formulario del Paso 3 válido. Guardando...');
      // lógica para guardar la suscripción
      // Puedes acceder a los datos del formulario usando this.pago
      console.log('Datos a guardar:', this.pago);
      // Aquí iría la llamada a tu servicio para guardar los datos
    } else {
      console.log('Formulario del Paso 3 inválido. No se puede guardar.');
      // Marcar los campos como touched para mostrar los mensajes de error
       if (this.step3Form) {
         this.step3Form.form.markAllAsTouched();
      }
    }
  }
}

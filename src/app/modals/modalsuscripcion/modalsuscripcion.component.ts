import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Importa esto

@Component({
  selector: 'app-modalsuscripcion',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modalsuscripcion.component.html',
  styleUrl: './modalsuscripcion.component.css'
})
export class ModalsuscripcionComponent {
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
    if (this.step < 3) {
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
    // lógica para guardar la suscripción
  }
}

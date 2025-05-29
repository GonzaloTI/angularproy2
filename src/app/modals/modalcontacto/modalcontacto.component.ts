import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modalcontacto',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modalcontacto.component.html',
  styleUrl: './modalcontacto.component.css'
})
export class ModalcontactoComponent {
  //canalActivo: string = 'llamada';
  canalActivo: 'llamada' | 'correo' | 'instagram' | 'facebook' = 'llamada';
  
  mostrarErrores = false;

  // Variables para cada canal
  // Llamada
  interaccionLlamada = '';
  resultadoLlamada = '';
  estadoLlamada = '';

  // Correo
  interaccionCorreo = '';
  resultadoCorreo = '';
  estadoCorreo = '';

  // Instagram
  interaccionInstagram = '';
  resultadoInstagram = '';
  estadoInstagram = '';

  // Facebook
  interaccionFacebook = '';
  resultadoFacebook = '';
  estadoFacebook = '';
// Validación de campos según canal
camposValidos(): boolean {
  if (this.canalActivo === 'llamada') {
    return !!(this.interaccionLlamada && this.resultadoLlamada && this.estadoLlamada);
  }
  if (this.canalActivo === 'correo') {
    return !!(this.interaccionCorreo && this.resultadoCorreo && this.estadoCorreo);
  }
  if (this.canalActivo === 'instagram') {
    return !!(this.interaccionInstagram && this.resultadoInstagram && this.estadoInstagram);
  }
  if (this.canalActivo === 'facebook') {
    return !!(this.interaccionFacebook && this.resultadoFacebook && this.estadoFacebook);
  }
  return false;
  
}
guardar() {
  this.mostrarErrores = true;
  if (this.camposValidos()) {
    // Aquí va la lógica para guardar la actividad
    // Por ejemplo, enviar los datos al backend o cerrar el modal
    this.mostrarErrores = false; // Opcional: ocultar errores tras guardar
    // Limpia los campos si lo deseas
  }
}
}

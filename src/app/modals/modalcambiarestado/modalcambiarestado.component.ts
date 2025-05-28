import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modalcambiarestado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modalcambiarestado.component.html',
  styleUrl: './modalcambiarestado.component.css'
})
export class ModalcambiarestadoComponent {
  nivelInteres: number = 80;
  estado: string = 'Negociacion';

  interesesDisponibles: string[] = [
    'Terror', 'Fantasy', 'Familia', 'Comedia', 'Acción', 'Drama', 'Ciencia Ficción', 'Aventura', 'Romance', 'Historia'
  ];
  interesSeleccionado: string = this.interesesDisponibles[0];
  interesesActuales: string[] = ['Fantasy', 'Familia', 'Comedia'];

  incrementarInteres() {
    if (this.nivelInteres < 100) {
      this.nivelInteres++;
    }
  }

  decrementarInteres() {
    if (this.nivelInteres > 0) {
      this.nivelInteres--;
    }
  }

  agregarInteres() {
    if (this.interesSeleccionado && !this.interesesActuales.includes(this.interesSeleccionado)) {
      this.interesesActuales.push(this.interesSeleccionado);
    }
  }
}

import { Component, Input } from '@angular/core';
import { StatusBadgeComponent } from '../../status-badge/status-badge.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-negociacion-detalle',
  standalone: true,
  imports: [ StatusBadgeComponent, CommonModule, FormsModule ],
  templateUrl: './negociacion-detalle.component.html',
  styleUrl: './negociacion-detalle.component.css'
})
export class NegociacionDetalleComponent {
  // 6 nombres de promociones de streaming, solo nombres no descripciones
  promociones: string[] = [
    'Netflix',
    'Amazon Prime Video',
    'Disney+',
    'HBO Max',
    'Apple TV+',
    'Hulu',
    'Paramount+',
    'YouTube Premium',
    'Discovery+',
    'Peacock',
  ];
  
  promoSeleccionada: number | null = null;
  
  seleccionarPromo(index: number) {
    this.promoSeleccionada = index;
  }

  cantidad: number = 1;

  cambiarValor(valor: number): void {
    this.cantidad = Math.max(0, this.cantidad + valor);
  }
}

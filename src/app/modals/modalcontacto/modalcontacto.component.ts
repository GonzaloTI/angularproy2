import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-modalcontacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalcontacto.component.html',
  styleUrl: './modalcontacto.component.css'
})
export class ModalcontactoComponent {
  canalActivo: string = 'llamada';
}

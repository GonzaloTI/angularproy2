

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modaldetalleactividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modaldetalleactividad.component.html',
  styleUrls: ['./modaldetalleactividad.component.css']
})
export class ModaldetalleactividadComponent {
  @Input() canal: 'llamada' | 'correo' | 'instagram' | 'facebook' = 'llamada';
}
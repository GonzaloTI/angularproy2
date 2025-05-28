import { Component } from '@angular/core';
import { ModalcontactoComponent } from '../modals/modalcontacto/modalcontacto.component';
import { ModalcambiarestadoComponent } from '../modals/modalcambiarestado/modalcambiarestado.component';
import { ModaldetalleactividadComponent } from '../modals/modaldetalleactividad/modaldetalleactividad.component';

@Component({
  selector: 'app-prospectodetalle',
  standalone: true,
  imports: [ModalcontactoComponent,ModalcambiarestadoComponent,ModaldetalleactividadComponent],
  templateUrl: './prospectodetalle.component.html',
  styleUrl: './prospectodetalle.component.css'
})
export class ProspectodetalleComponent {
  canalDetalle: 'llamada' | 'correo' | 'instagram' | 'facebook' = 'llamada';
}

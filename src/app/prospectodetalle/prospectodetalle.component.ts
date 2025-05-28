import { Component } from '@angular/core';
import { ModalcontactoComponent } from '../modals/modalcontacto/modalcontacto.component';
import { ModalcambiarestadoComponent } from '../modals/modalcambiarestado/modalcambiarestado.component';


@Component({
  selector: 'app-prospectodetalle',
  standalone: true,
  imports: [ModalcontactoComponent,ModalcambiarestadoComponent],
  templateUrl: './prospectodetalle.component.html',
  styleUrl: './prospectodetalle.component.css'
})
export class ProspectodetalleComponent {

}

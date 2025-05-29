import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalsuscripcionComponent } from '../modals/modalsuscripcion/modalsuscripcion.component';

@Component({
  selector: 'app-suscripcionlist',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalsuscripcionComponent],
  templateUrl: './suscripcionlist.component.html',
  styleUrl: './suscripcionlist.component.css'
})
export class SuscripcionlistComponent {

}

import { Component } from '@angular/core';
import { StatusBadgeComponent } from '../../status-badge/status-badge.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-negociacion',
  standalone: true,
  imports: [StatusBadgeComponent,RouterModule],
  templateUrl: './negociacion.component.html',
  styleUrl: './negociacion.component.css'
})
export class NegociacionComponent {

}

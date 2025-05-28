import { Component } from '@angular/core';
import { StatusBadgeComponent } from '../../status-badge/status-badge.component';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [ StatusBadgeComponent ],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})
export class TemplatesComponent {

}

import { Component } from '@angular/core';
import { StatusBadgeComponent } from '../../status-badge/status-badge.component';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [ StatusBadgeComponent ],
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'] // ✅ así está bien
})
export class TemplatesComponent {

}

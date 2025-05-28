import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importante

type StatusType = 'prospecto' | 'negociacion' | 'suscrito';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule], // 👈 aquí también
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.css']
})
export class StatusBadgeComponent {
  @Input() status: string = '';

  displayText: string = '';
  backgroundColor: string = '#ccc';
  textColor: string = 'black';

  private statusMap: {[key: string]: {text: string, bgColor: string, textColor: string}} = {
    prospecto: { text: 'Prospecto', bgColor: '#FFDDBA', textColor: 'black' },
    negociacion: { text: 'Negociacion', bgColor: '#82FFC5', textColor: 'black' },
    suscrito: { text: 'Suscrito', bgColor: '#EE98FF', textColor: 'black' }
  };

  ngOnChanges() {
    const key = this.status.toLowerCase();
    if (this.statusMap[key]) {
      this.displayText = this.statusMap[key].text;
      this.backgroundColor = this.statusMap[key].bgColor;
      this.textColor = this.statusMap[key].textColor;
    } else {
      this.displayText = this.status; // Si no está en el mapa, muestra el texto tal cual
      this.backgroundColor = '#ccc';
      this.textColor = 'black';
    }
  }
}
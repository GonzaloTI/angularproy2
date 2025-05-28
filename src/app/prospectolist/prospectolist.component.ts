import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';  // Importa Title

@Component({
  selector: 'app-prospectolist',
  standalone: true,
  imports: [],
  templateUrl: './prospectolist.component.html',
  styleUrls: ['./prospectolist.component.css']
})
export class ProspectolistComponent implements OnInit {
  title = 'IHC Prospecto';

  constructor(private titleService: Title) {}

  ngOnInit() {
    // Establece el título de la página cuando el componente se cargue
    this.titleService.setTitle(this.title);
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from 'ngx-editor'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NgxEditorComponent, NgxEditorMenuComponent, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'

})
export class EditorComponent implements OnInit, OnDestroy {
  html: string = `
  <h2 style="color: #e50914;">🎉 ¡Promo especial de Netflix!</h2>
  <p>Disfruta de todos estos beneficios por tiempo limitado:</p>
  <ul>
    <li>✅ Acceso ilimitado a todas las series y películas</li>
    <li>✅ 4K Ultra HD + HDR sin costo adicional</li>
    <li>✅ Hasta 4 perfiles personalizados</li>
    <li>✅ ¡Descarga y mira sin conexión!</li>
  </ul>
  <p><strong>Solo por <span style="color: green;">$9.99</span> al mes</strong></p>
  <img src="https://images.ctfassets.net/4cd45et68cgf/5ZVnTR7jyrRs0lePAlVT71/0a7c103de12f7a4c0b6c3b6edd535298/Ads_Plan_Blog_Header_Image.png"
       alt="Netflix Promo"
       style="width: 50%; max-width: max-height: 80px; width: auto; 500px; border-radius: 10px; margin-top: 10px;" />
`;
  editor!: Editor;
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}

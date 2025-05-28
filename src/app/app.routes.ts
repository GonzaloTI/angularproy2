import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProspectolistComponent} from './prospectolist/prospectolist.component';
import { TemplatesComponent } from './pages/templates/templates.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // si quieres mostrar AppComponent en la raíz
    { path: 'prospectos', component: ProspectolistComponent }, // nueva página
    { path: 'templates', component: TemplatesComponent }
  ];
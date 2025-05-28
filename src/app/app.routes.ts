import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProspectolistComponent} from './prospectolist/prospectolist.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // si quieres mostrar AppComponent en la raíz
    { path: 'prospectos', component: ProspectolistComponent } // nueva página
  ];
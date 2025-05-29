import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProspectolistComponent} from './prospectolist/prospectolist.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ProspectodetalleComponent } from './prospectodetalle/prospectodetalle.component';
import { NegociacionDetalleComponent } from './pages/negociacion-detalle/negociacion-detalle.component';
import { NegociacionComponent } from './pages/negociacion/negociacion.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // si quieres mostrar AppComponent en la raíz
    { path: 'prospectos', component: ProspectolistComponent }, // nueva página
    { path: 'templates', component: TemplatesComponent },
    { path: 'prospectodetalle', component: ProspectodetalleComponent }, // nueva página
    { path: 'negociacion-detalle', component: NegociacionDetalleComponent }, // nueva página
    { path: 'negociacion', component: NegociacionComponent }, // nueva página

  ];
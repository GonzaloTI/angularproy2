import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProspectolistComponent} from './prospectolist/prospectolist.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ProspectodetalleComponent } from './prospectodetalle/prospectodetalle.component';
import { SuscripcionlistComponent } from './suscripcionlist/suscripcionlist.component';
import {SuscripciondetalleComponent} from './suscripciondetalle/suscripciondetalle.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, // si quieres mostrar AppComponent en la raíz
    { path: 'prospectos', component: ProspectolistComponent }, // nueva página
    { path: 'templates', component: TemplatesComponent },
    { path: 'prospectodetalle', component: ProspectodetalleComponent }, // nueva página
    { path: 'suscriptores', component: SuscripcionlistComponent }, // nueva página
    { path: 'suscriptordetalle', component: SuscripciondetalleComponent }, // nueva página
  ];
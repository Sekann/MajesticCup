import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DraftComponent } from './draft/draft.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'draft', component: DraftComponent }
];

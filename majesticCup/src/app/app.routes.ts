import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DraftComponent } from './draft/draft.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LoginComponent } from './login/login.component';
import path from 'path';
import { TeamInfoComponent } from './team-info/team-info.component';
import {authGuardGuard} from './services/guards/auth-guard.guard';
import {publicGuard} from './services/guards/public.guard';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'draft',canActivate: [authGuardGuard] , component: DraftComponent},
    { path: 'login', canActivate: [publicGuard], component: LoginComponent},
    { path: 'equipo/:slug', component: TeamInfoComponent }
];

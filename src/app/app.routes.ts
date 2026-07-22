import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ViagensDisponiveis } from './viagens-disponiveis/viagens-disponiveis';
import { Compras } from './compras/compras';

export const routes: Routes = [
  { path: '', redirectTo: 'viagens', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'viagens', component: ViagensDisponiveis },
  { path: 'compras/:id', component: Compras },

  { path: '**', redirectTo: 'viagens' }
];

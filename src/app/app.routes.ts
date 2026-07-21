import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ViagensDisponiveis } from './viagens-disponiveis/viagens-disponiveis';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'viagens', component: ViagensDisponiveis },
];


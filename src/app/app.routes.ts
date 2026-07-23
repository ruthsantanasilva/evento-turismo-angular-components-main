import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ViagensDisponiveis } from './viagens-disponiveis/viagens-disponiveis';
import { Compras } from './compras/compras';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'viagens', component: ViagensDisponiveis },
  { path: 'compras/:id', component: Compras },

  { path: '**', redirectTo: '' }
];

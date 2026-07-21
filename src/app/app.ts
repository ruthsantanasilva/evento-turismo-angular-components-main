import { Component, signal } from '@angular/core';
import { Opinioes } from './opinioes/opinioes';
import { Pacotes } from './pacotes/pacotes';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSidebarComponent } from './menu-esquerda/menu-esquerda';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaisRequisitados } from './mais-requisitados/mais-requisitados';
import { Footer } from './footer/footer';
import { BuscarViagens } from "./buscar-viagens/buscar-viagens";
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Login } from './login/login';
import { EnvioEmail } from "./envio-email/envio-email";
import { MatDividerModule} from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    Opinioes, 
    Pacotes, 
    Footer,
    LeftSidebarComponent,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    MaisRequisitados, 
    BuscarViagens, 
    MatDialogModule, 
    EnvioEmail,
    MatDividerModule, 
    MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('evento-turismo-angular');
    isLeftSidebarCollapsed = signal<boolean>(true);

showMeuComponente = true;
  constructor(
    public  router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) 
{
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      const rotaAtual = event.urlAfterRedirects;

      // Esconde no login
      this.showMeuComponente = rotaAtual !== '/login';
    });

  }

  get usuarioLogado(): boolean { 
    return !!localStorage.getItem('usuarioLogado');}

    meusPedidos(): void {
  this.router.navigate(['/meus-pedidos']);
}

meuPerfil(): void {
  this.router.navigate(['/meu-perfil']);
}

minhasViagens(): void {
  this.router.navigate(['/minhas-viagens']);
}

abrirLogin() {
  this.dialog.open(Login, {
    width: '450px',
    height: '650px',
    panelClass: 'custom-dialog-container'
  });
}

  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

  buscarViagens(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
    
      this.router.navigate(['/viagens']);
    } else {

       setTimeout(() => {
        this.abrirLogin();}, 500);
    }
  }

  logout(): void {
  localStorage.removeItem('usuarioLogado');
  this.snackBar.open(
    'Você saiu da sua conta com sucesso',
    'Fechar',
    {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackbar-sucesso'],
    }
  );

  this.router.navigate(['/']);
}
}


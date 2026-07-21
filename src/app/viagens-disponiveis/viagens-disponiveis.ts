import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSidebarComponent } from '../menu-esquerda/menu-esquerda';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { ViagensService } from './viagens-service';
import { MaisRequisitados } from '../mais-requisitados/mais-requisitados';
import { BuscarViagens } from '../buscar-viagens/buscar-viagens';
import { Opinioes } from '../opinioes/opinioes';
import { Footer } from '../footer/footer';
import { EnvioEmail } from "../envio-email/envio-email";
import { Login } from '../login/login';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-viagens-disponiveis',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    MatTableModule,
    MaisRequisitados,
    Opinioes,
    Footer, BuscarViagens,
    EnvioEmail
],
  templateUrl: './viagens-disponiveis.html',
  styleUrls: ['./viagens-disponiveis.scss', './media-queries.scss'],
})
export class ViagensDisponiveis implements OnInit {

  
  busca: any;
  voosFiltrados: any[] = [];


  isLeftSidebarCollapsed = signal<boolean>(true);

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private viagensService: ViagensService,
    private dialog: MatDialog,
  ) {}

  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

  abrirLogin(): void {
    this.dialog.open(Login, {
      width: '450px',
      height: '650px',
      panelClass: 'custom-dialog-container'
    });
  }


ngOnInit() {

  const buscaService = this.viagensService.getBusca();

  this.route.queryParams.subscribe(params => {

    this.busca = buscaService || params;


    if (this.busca?.origem && this.busca?.destino) {
      this.voosFiltrados = this.viagensService.buscarVoos(
        this.busca.origem,
        this.busca.destino
      );

    }
  });
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
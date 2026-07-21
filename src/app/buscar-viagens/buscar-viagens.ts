import { CommonModule } from '@angular/common';
import { Component, signal, Injectable, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViagensService } from '../viagens-disponiveis/viagens-service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Login } from '../login/login';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-viagens',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, MatDialogModule],
  templateUrl: './buscar-viagens.html',
  styleUrls: ['./buscar-viagens.scss', './media-queries.scss'],
})
export class BuscarViagens implements OnInit {
    
origem = '';
destino = '';
ida = '';
volta = ''


tipoIda: string = 'text';
tipoVolta: string = 'text';



    isLeftSidebarCollapsed = signal<boolean>(true);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
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

buscarViagens(): void {

  const usuarioLogado = localStorage.getItem('usuarioLogado');

  if (!usuarioLogado) {
    this.abrirLogin();
    return;
  }

  const busca = {
    origem: this.origem,
    destino: this.destino,
    ida: this.ida,
    volta: this.volta
  };

  this.viagensService.setBusca(busca);

  this.router.navigate(['/viagens'], {
    queryParams: busca
  });
}

ngOnInit(): void {

  this.route.queryParams.subscribe(params => {

    this.origem = params['origem'] || '';
    this.destino = params['destino'] || '';
    this.ida = params['ida'] || '';
    this.volta = params['volta'] || '';

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
 }
}
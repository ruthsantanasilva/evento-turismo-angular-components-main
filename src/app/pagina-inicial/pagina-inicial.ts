import { Component, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    MatSidenavModule,
    MatSnackBarModule, 
    MatIconModule, 
    MatTooltipModule, 
    CommonModule,
  ],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.scss', './media-queries.scss'],
})
export class PaginaInicial {

  isLeftSidebarCollapsed = signal<boolean>(true);

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

  buscarViagens(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
    
      this.router.navigate(['/viagens']);
    } else {
    
      this.snackBar.open(
        'Faça login para buscar viagens disponíveis',
        'Fechar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackbar-erro'],
        }
      );

      this.router.navigate(['/login']);
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

  this.router.navigate(['/login']);
}
}
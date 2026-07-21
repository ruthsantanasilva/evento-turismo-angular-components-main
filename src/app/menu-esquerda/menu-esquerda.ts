import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-esquerda.html',
  styleUrl: './menu-esquerda.scss',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'voos',
      icon: 'fas fa-plane-arrival',
      label: 'Voos',
    },
    {
      routeLink: 'hospedagens',
      icon: 'fas fa-bed',
      label: 'Hospedagens',
    },
    {
      routeLink: 'carros',
      icon: 'fas fa-car',
      label: 'Carros',
    },
    {
      routeLink: 'passeios',
      icon: 'fas fa-landmark',
      label: 'Passeios',
    },
    {
      routeLink: 'pacotes',
      icon: 'fas fa-umbrella-beach',
      label: 'Pacotes',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}

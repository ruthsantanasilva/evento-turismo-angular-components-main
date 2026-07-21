import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mais-requisitados',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage],
  templateUrl: './mais-requisitados.html',
  styleUrls: ['./mais-requisitados.scss', './media-queries.scss'],
})
export class MaisRequisitados {

    
  }

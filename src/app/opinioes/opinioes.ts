import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-opinioes',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './opinioes.html',
  styleUrls: ['./opinioes.scss', './media-queries.scss'],
})
export class Opinioes {

    
  }


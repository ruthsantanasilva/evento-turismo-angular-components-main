import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pacotes',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pacotes.html',
  styleUrls: ['./pacotes.scss', './media-queries.scss'],
})
export class Pacotes {

    
  }
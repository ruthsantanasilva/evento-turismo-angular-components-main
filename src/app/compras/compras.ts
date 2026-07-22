import { Component , OnInit} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './compras.html',
  styleUrl: './compras.scss'
})
export class Compras implements OnInit { 

  pacote: any;

  pacotes = [
    {
      id: 'bonito-ms',
      destino: 'Bonito - MS',
      preco: 2499
    },
    {
      id: 'ilheus-ba',
      destino: 'Ilhéus - BA',
      preco: 2799
    },
    {
      id: 'california-eua',
      destino: 'Califórnia - EUA',
      preco: 7999
    },
    {
      id: 'roma-italia',
      destino: 'Roma - Itália',
      preco: 6999
    },
    {
      id: 'sao-paulo',
      destino: 'São Paulo',
      preco: 1299
    },
    {
      id: 'salvador-ba',
      destino: 'Salvador - BA',
      preco: 2199
    },
    {
      id: 'japao',
      destino: 'Japão',
      preco: 10999
    },
    {
      id: 'rio-de-janeiro',
      destino: 'Rio de Janeiro',
      preco: 1799
    }
  ];

  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');

 const pacote = this.pacotes.find(
  p => p.id === id
);

  this.pacote = pacote;
}
}
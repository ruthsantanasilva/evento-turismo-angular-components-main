import { Component } from '@angular/core';
import { BuscarViagens } from '../buscar-viagens/buscar-viagens';
import { Pacotes } from '../pacotes/pacotes';
import { MaisRequisitados } from '../mais-requisitados/mais-requisitados';
import { Opinioes } from '../opinioes/opinioes';
import { EnvioEmail } from '../envio-email/envio-email';
@Component({
  selector: 'app-home',
  imports: [BuscarViagens, Pacotes, MaisRequisitados, Opinioes, EnvioEmail],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

  
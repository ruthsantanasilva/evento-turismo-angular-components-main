import { Injectable, signal } from "@angular/core";
import { BuscaViagem } from "../buscar-viagens/busca-viagem.model";
import { VOOS } from "./voos-mock";


@Injectable({ providedIn: 'root' })
export class ViagensService {

  private buscaSignal = signal<BuscaViagem | null>(null);

  setBusca(busca: BuscaViagem) {
    this.buscaSignal.set(busca);
  }

  getBusca() {
    return this.buscaSignal();
  }


  buscarVoos(origem: string, destino: string) {
    const o = origem.toLowerCase().trim();
    const d = destino.toLowerCase().trim();

    return VOOS.filter(voo => {
      const origemMatch =
        voo.origem.toLowerCase().includes(o) || o.includes(voo.origem.toLowerCase());

      const destinoMatch =
        voo.destino.toLowerCase().includes(d) || d.includes(voo.destino.toLowerCase());

      return origemMatch && destinoMatch;
    });
  }


}


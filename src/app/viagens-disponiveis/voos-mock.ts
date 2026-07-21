const AEROPORTOS = [
  { codigo: 'GRU', cidade: 'São Paulo' },
  { codigo: 'GIG', cidade: 'Rio de Janeiro' },
  { codigo: 'BSB', cidade: 'Brasília' },
  { codigo: 'CNF', cidade: 'Belo Horizonte' },
  { codigo: 'SSA', cidade: 'Salvador' },
  { codigo: 'REC', cidade: 'Recife' },
  { codigo: 'FOR', cidade: 'Fortaleza' },
  { codigo: 'MAO', cidade: 'Manaus' },
  { codigo: 'BEL', cidade: 'Belém' },
  { codigo: 'POA', cidade: 'Porto Alegre' },
  { codigo: 'CWB', cidade: 'Curitiba' },
  { codigo: 'FLN', cidade: 'Florianópolis' },
  { codigo: 'SLZ', cidade: 'São Luís' }
];

function escolher<T>(lista: T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

function gerarPreco() {
  return Math.floor(Math.random() * 2500 + 300);
}

function gerarVoos() {
  const voos: any[] = [];

  AEROPORTOS.forEach(origem => {
    AEROPORTOS.forEach(destino => {

      if (origem.codigo !== destino.codigo) {

        for (let i = 0; i < 8; i++) {

          voos.push({
            origem: origem.codigo,
            destino: destino.codigo,

            ida: {
              hora: gerarHora(),
              rota: `${origem.cidade} → ${destino.cidade}`,
              duracao: `${Math.floor(Math.random() * 4 + 1)}h`
            },

            volta: {
              hora: gerarHora(),
              duracao: `${Math.floor(Math.random() * 4 + 1)}h`
            },

            companhia: escolher([
              'LATAM',
              'GOL',
              'Azul',
              'Voepass'
            ]),

            tipoVoo: escolher([
              'Direto',
              '1 escala',
              '2 escalas'
            ]),

            preco: gerarPreco(),

            tarifa: escolher([
              'Econômica',
              'Light',
              'Promo',
              'Flex'
            ])
          });

        }

      }

    });
  });

  return voos;
}


function gerarHora() {

  const saidaHora = Math.floor(Math.random() * 24);
  const saidaMinuto = escolher([0, 15, 30, 45]);

  const duracao = Math.floor(Math.random() * 6 + 1);

  const chegadaHora = (saidaHora + duracao) % 24;

  return `${pad(saidaHora)}:${pad(saidaMinuto)} - ${pad(chegadaHora)}:${pad(saidaMinuto)}`;
}

function pad(n: number) {
  return n < 10 ? '0' + n : n.toString();
}


export const VOOS = gerarVoos();
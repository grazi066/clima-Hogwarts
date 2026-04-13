// lib/hogwarts.js

export const COR_CASA = {
  Gryffindor: { borda: '#b71c1c', bg: 'rgba(183,28,28,0.13)', badge: '#ff5252', texto: '#ffcdd2' },
  Slytherin:  { borda: '#1b5e20', bg: 'rgba(27,94,32,0.13)',  badge: '#69f0ae', texto: '#c8e6c9' },
  Ravenclaw:  { borda: '#0d47a1', bg: 'rgba(13,71,161,0.13)', badge: '#448aff', texto: '#bbdefb' },
  Hufflepuff: { borda: '#f57f17', bg: 'rgba(245,127,23,0.13)',badge: '#ffd740', texto: '#fff9c4' },
}

// real   = nome exibido no DROPDOWN
// cidade = nome temático exibido no CARD após selecionar
export const ESTADOS = [
  {
    uf: 'AC', nome: 'Acre', regiao: 'Norte', icone: '🌿',
    cidades: [
      { real: 'Rio Branco',        cidade: '🌿 Floresta Proibida',      lat: -9.97,  lon: -67.81, casa: 'Hufflepuff' },
      { real: 'Cruzeiro do Sul',   cidade: '🧝 Aldeia dos Elfos',       lat: -7.63,  lon: -72.67, casa: 'Hufflepuff' },
      { real: 'Sena Madureira',    cidade: '✨ Encantamento Branco',    lat: -9.06,  lon: -68.66, casa: 'Ravenclaw'  },
      { real: 'Tarauacá',          cidade: '🕯️ Vela de Pimenta',        lat: -8.16,  lon: -70.77, casa: 'Gryffindor' },
      { real: 'Feijó',             cidade: '🕷️ Toca da Tarântula',      lat: -8.17,  lon: -70.35, casa: 'Slytherin'  },
      { real: 'Brasiléia',         cidade: '🌀 Portal da Fronteira',    lat: -11.01, lon: -68.74, casa: 'Ravenclaw'  },
    ]
  },
  {
    uf: 'AL', nome: 'Alagoas', regiao: 'Nordeste', icone: '⚔️',
    cidades: [
      { real: 'Maceió',            cidade: '⚔️ Armadura Encantada',    lat: -9.67,  lon: -35.74, casa: 'Gryffindor' },
      { real: 'Arapiraca',         cidade: '🧪 Caldeirão Fervente',    lat: -9.75,  lon: -36.66, casa: 'Hufflepuff' },
      { real: 'Palmeira dos Índios',cidade: '🏰 Palácio de Durmstrang',lat: -9.40,  lon: -36.62, casa: 'Slytherin'  },
      { real: 'União dos Palmares',cidade: '🌿 Clareira Mágica',       lat: -9.16,  lon: -36.03, casa: 'Hufflepuff' },
      { real: 'Penedo',            cidade: '⚓ Porto dos Piratas',      lat: -10.29, lon: -36.59, casa: 'Slytherin'  },
      { real: 'Delmiro Gouveia',   cidade: '🔥 Forja do Feitiço',      lat: -9.39,  lon: -37.99, casa: 'Gryffindor' },
    ]
  },
  {
    uf: 'AM', nome: 'Amazonas', regiao: 'Norte', icone: '🐍',
    cidades: [
      { real: 'Manaus',            cidade: '🐍 Cidade Submersa',       lat: -3.10,  lon: -60.02, casa: 'Slytherin'  },
      { real: 'Parintins',         cidade: '🌊 Feitiço do Rio',        lat: -2.63,  lon: -56.74, casa: 'Ravenclaw'  },
      { real: 'Tabatinga',         cidade: '🐲 Gruta do Basilisco',    lat: -4.25,  lon: -69.94, casa: 'Slytherin'  },
      { real: 'Tefé',              cidade: '🕸️ Floresta de Aragog',    lat: -3.35,  lon: -64.71, casa: 'Slytherin'  },
      { real: 'Coari',             cidade: '🌳 Clareira Mágica',       lat: -4.09,  lon: -63.14, casa: 'Hufflepuff' },
      { real: 'Itacoatiara',       cidade: '🔮 Labirinto de Vidro',    lat: -3.14,  lon: -58.44, casa: 'Ravenclaw'  },
      { real: 'Maués',             cidade: '💜 Poção do Esquecimento', lat: -3.38,  lon: -57.71, casa: 'Hufflepuff' },
      { real: 'São Gabriel da Cachoeira', cidade: '🗝️ Câmara Secreta Norte', lat: -0.13, lon: -67.09, casa: 'Slytherin' },
      { real: 'Barcelos',          cidade: '🌫️ Tocaia do Nêvoa',       lat: -0.97,  lon: -62.92, casa: 'Ravenclaw'  },
      { real: 'Humaitá',           cidade: '🐊 Pântano dos Grindylows',lat: -7.51,  lon: -63.02, casa: 'Slytherin'  },
    ]
  },
  {
    uf: 'AP', nome: 'Amapá', regiao: 'Norte', icone: '🌀',
    cidades: [
      { real: 'Macapá',            cidade: '🌀 Portal do Tempo',       lat:  0.03,  lon: -51.07, casa: 'Ravenclaw'  },
      { real: 'Oiapoque',          cidade: '👻 Ilha dos Boggarts',     lat:  3.84,  lon: -51.83, casa: 'Slytherin'  },
      { real: 'Santana',           cidade: '⚓ Porto Encantado',       lat: -0.05,  lon: -51.18, casa: 'Hufflepuff' },
      { real: 'Laranjal do Jari',  cidade: '🌿 Selva dos Feitiços',    lat: -0.80,  lon: -52.46, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'BA', nome: 'Bahia', regiao: 'Nordeste', icone: '🔥',
    cidades: [
      { real: 'Salvador',          cidade: '🔥 Capitólio do Fogo',     lat: -12.97, lon: -38.50, casa: 'Gryffindor' },
      { real: 'Feira de Santana',  cidade: '💎 Pedra Filosofal',       lat: -12.27, lon: -38.96, casa: 'Ravenclaw'  },
      { real: 'Ilhéus',            cidade: '🌴 Maldição Imperius',     lat: -14.79, lon: -39.04, casa: 'Slytherin'  },
      { real: 'Jequié',            cidade: '🏠 Toca dos Weasleys',     lat: -13.85, lon: -40.08, casa: 'Gryffindor' },
      { real: 'Juazeiro',          cidade: '💡 Pensieve de Lumos',     lat: -9.42,  lon: -40.50, casa: 'Ravenclaw'  },
      { real: 'Vitória da Conquista', cidade: '🦌 Expecto Patronum',   lat: -14.87, lon: -40.85, casa: 'Gryffindor' },
      { real: 'Paulo Afonso',      cidade: '🏜️ Azkaban do Sertão',    lat: -9.36,  lon: -38.22, casa: 'Slytherin'  },
      { real: 'Bom Jesus da Lapa', cidade: '🔭 Torre de Astronomia',   lat: -13.25, lon: -43.42, casa: 'Ravenclaw'  },
      { real: 'Barreiras',         cidade: '⛈️ Poção de Tempestade',   lat: -12.15, lon: -44.99, casa: 'Ravenclaw'  },
      { real: 'Seabra',            cidade: '❄️ Feitiço de Neve',       lat: -12.42, lon: -41.77, cosa: 'Hufflepuff' },
      { real: 'Irecê',             cidade: '🚪 Sala Precisa',          lat: -11.30, lon: -41.86, casa: 'Ravenclaw'  },
      { real: 'Porto Seguro',      cidade: '🛒 Rua Diagonal do Sul',   lat: -16.44, lon: -39.06, casa: 'Hufflepuff' },
      { real: 'Caetité',           cidade: '🪞 Espelho de Ojesed',     lat: -14.07, lon: -42.47, casa: 'Ravenclaw'  },
      { real: 'Brumado',           cidade: '🦅 Hipogrifo Selvagem',    lat: -14.20, lon: -41.67, casa: 'Gryffindor' },
    ]
  },
  {
    uf: 'CE', nome: 'Ceará', regiao: 'Nordeste', icone: '🔱',
    cidades: [
      { real: 'Fortaleza',         cidade: '🔱 Azkaban do Nordeste',   lat: -3.71,  lon: -38.54, casa: 'Slytherin'  },
      { real: 'Juazeiro do Norte', cidade: '⛈️ Tempestade do Deserto', lat: -7.21,  lon: -39.32, casa: 'Gryffindor' },
      { real: 'Sobral',            cidade: '☀️ Feitiço do Sol',        lat: -3.69,  lon: -40.35, casa: 'Hufflepuff' },
      { real: 'Quixadá',           cidade: '📜 Pergaminho Antigo',     lat: -4.97,  lon: -39.02, casa: 'Ravenclaw'  },
      { real: 'Iguatu',            cidade: '🫥 Manto da Invisibilidade',lat: -6.36, lon: -39.30, casa: 'Slytherin'  },
      { real: 'Morada Nova',       cidade: '🗺️ Mapa do Maroto',        lat: -5.11,  lon: -38.37, casa: 'Gryffindor' },
      { real: 'Crateús',           cidade: '☠️ Runa Venenosa',         lat: -5.17,  lon: -40.67, casa: 'Slytherin'  },
      { real: 'Campos Sales',      cidade: '🎵 Flauta de Pedra',       lat: -7.07,  lon: -40.38, casa: 'Hufflepuff' },
      { real: 'Tauá',              cidade: '🌧️ Cauldron de Chuva',     lat: -6.00,  lon: -40.29, casa: 'Ravenclaw'  },
      { real: 'Quixeramobim',      cidade: '🪨 Pedra Rolante',         lat: -5.20,  lon: -39.29, casa: 'Hufflepuff' },
      { real: 'Acaraú',            cidade: '🌊 Maré Encantada',        lat: -2.89,  lon: -40.12, casa: 'Hufflepuff' },
      { real: 'Tianguá',           cidade: '🌄 Penhasco da Sereia',    lat: -3.73,  lon: -40.99, casa: 'Ravenclaw'  },
    ]
  },
  {
    uf: 'DF', nome: 'Distrito Federal', regiao: 'Centro-Oeste', icone: '⚡',
    cidades: [
      { real: 'Brasília',          cidade: '⚡ Ministério da Magia',   lat: -15.78, lon: -47.93, casa: 'Ravenclaw'  },
      { real: 'Taguatinga',        cidade: '🏛️ Grande Salão',          lat: -15.83, lon: -48.05, casa: 'Hufflepuff' },
      { real: 'Ceilândia',         cidade: '🌀 Portal da Capital',     lat: -15.82, lon: -48.11, casa: 'Gryffindor' },
    ]
  },
  {
    uf: 'ES', nome: 'Espírito Santo', regiao: 'Sudeste', icone: '🦅',
    cidades: [
      { real: 'Vitória',           cidade: '🦅 Fênix Renascida',       lat: -20.32, lon: -40.34, casa: 'Gryffindor' },
      { real: 'Linhares',          cidade: '🔥 Escudo de Fogo',        lat: -19.39, lon: -40.07, casa: 'Gryffindor' },
      { real: 'Cachoeiro de Itapemirim', cidade: '💎 Encanto da Pedra',lat: -20.85, lon: -41.11, casa: 'Hufflepuff' },
      { real: 'Colatina',          cidade: '🌿 Vale das Mandrágoras',  lat: -19.54, lon: -40.63, casa: 'Hufflepuff' },
      { real: 'São Mateus',        cidade: '📖 Livro dos Feitiços',    lat: -18.72, lon: -39.86, casa: 'Ravenclaw'  },
      { real: 'Guarapari',         cidade: '🌊 Baía dos Tritões',      lat: -20.66, lon: -40.50, casa: 'Hufflepuff' },
      { real: 'Alegre',            cidade: '🌫️ Bruma de Argônio',      lat: -20.76, lon: -41.53, casa: 'Ravenclaw'  },
    ]
  },
  {
    uf: 'GO', nome: 'Goiás', regiao: 'Centro-Oeste', icone: '🗝️',
    cidades: [
      { real: 'Goiânia',           cidade: '🗝️ Câmara dos Segredos',   lat: -16.69, lon: -49.25, casa: 'Slytherin'  },
      { real: 'Anápolis',          cidade: '⚔️ Espada de Godric',      lat: -16.33, lon: -48.95, casa: 'Gryffindor' },
      { real: 'Rio Verde',         cidade: '🍀 Trevo de Quatro Folhas',lat: -17.80, lon: -50.93, casa: 'Hufflepuff' },
      { real: 'Formosa',           cidade: '🎩 Chapéu Seletor',        lat: -15.54, lon: -47.34, casa: 'Ravenclaw'  },
      { real: 'Itumbiara',         cidade: '🌻 Tâmaras Douradas',      lat: -18.42, lon: -49.22, casa: 'Hufflepuff' },
      { real: 'Luziânia',          cidade: '🌀 Portal de Bruxas',      lat: -16.26, lon: -47.95, casa: 'Ravenclaw'  },
      { real: 'Jataí',             cidade: '☁️ Nuvem de Magia',        lat: -17.88, lon: -51.71, casa: 'Ravenclaw'  },
      { real: 'Goianésia',         cidade: '🐴 Floresta de Centauros', lat: -15.32, lon: -49.12, casa: 'Ravenclaw'  },
      { real: 'Catalão',           cidade: '🔮 Círculo dos Druidas',   lat: -18.17, lon: -47.95, casa: 'Ravenclaw'  },
      { real: 'Caldas Novas',      cidade: '♨️ Fonte Quente Mágica',   lat: -17.74, lon: -48.63, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'MA', nome: 'Maranhão', regiao: 'Nordeste', icone: '🌑',
    cidades: [
      { real: 'São Luís',          cidade: '🌑 Dementador do Norte',   lat: -2.53,  lon: -44.30, casa: 'Slytherin'  },
      { real: 'Imperatriz',        cidade: '🪄 Cajado do Ancião',      lat: -5.52,  lon: -47.47, casa: 'Ravenclaw'  },
      { real: 'Caxias',            cidade: '🌊 Planície das Sereias',  lat: -4.86,  lon: -43.36, casa: 'Hufflepuff' },
      { real: 'Bacabal',           cidade: '👹 Terreno dos Trolls',    lat: -4.22,  lon: -44.79, casa: 'Gryffindor' },
      { real: 'Balsas',            cidade: '🪞 Espelho da Verdade',    lat: -7.53,  lon: -46.04, casa: 'Ravenclaw'  },
      { real: 'Codó',              cidade: '🎩 Chapelaria Sombria',    lat: -4.45,  lon: -43.89, casa: 'Slytherin'  },
      { real: 'Pinheiro',          cidade: '🌿 Pântano Encantado',     lat: -2.52,  lon: -45.08, casa: 'Hufflepuff' },
      { real: 'Santa Inês',        cidade: '⭐ Estrela Cadente',       lat: -3.66,  lon: -45.38, casa: 'Ravenclaw'  },
    ]
  },
  {
    uf: 'MG', nome: 'Minas Gerais', regiao: 'Sudeste', icone: '🏰',
    cidades: [
      { real: 'Belo Horizonte',    cidade: '🏰 Hogwarts das Gerais',   lat: -19.92, lon: -43.94, casa: 'Gryffindor' },
      { real: 'Juiz de Fora',      cidade: '🥇 Câmara de Ouro',        lat: -21.76, lon: -43.35, casa: 'Ravenclaw'  },
      { real: 'Uberlândia',        cidade: '🏆 Sala dos Troféus',      lat: -18.92, lon: -48.28, casa: 'Gryffindor' },
      { real: 'Diamantina',        cidade: '💎 Mina de Cristal',       lat: -18.24, lon: -43.60, casa: 'Ravenclaw'  },
      { real: 'Montes Claros',     cidade: '🐴 Estábulo dos Trestres', lat: -16.73, lon: -43.86, casa: 'Ravenclaw'  },
      { real: 'Poços de Caldas',   cidade: '🐲 Portal do Dragão',      lat: -21.79, lon: -46.57, casa: 'Gryffindor' },
      { real: 'Araxá',             cidade: '🏔️ Encantamento da Serra', lat: -19.59, lon: -46.94, casa: 'Ravenclaw'  },
      { real: 'Teófilo Otoni',     cidade: '👻 Banshee do Vale',       lat: -17.86, lon: -41.51, casa: 'Slytherin'  },
      { real: 'Patos de Minas',    cidade: '🐍 Toca da Víbora',        lat: -18.58, lon: -46.52, casa: 'Slytherin'  },
      { real: 'Passos',            cidade: '📜 Pergaminho de Bruxas',  lat: -20.72, lon: -46.61, casa: 'Ravenclaw'  },
      { real: 'Unaí',              cidade: '🌱 Plantação de Mandrágoras',lat:-16.36,lon:-46.90, casa: 'Hufflepuff' },
      { real: 'Governador Valadares',cidade:'⚡ Raio Dourado',         lat: -18.85, lon: -41.95, casa: 'Gryffindor' },
      { real: 'Ipatinga',          cidade: '🔥 Fornalha de Fogo',      lat: -19.47, lon: -42.54, casa: 'Gryffindor' },
      { real: 'Divinópolis',       cidade: '✨ Portal da Luz',         lat: -20.14, lon: -44.88, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'MS', nome: 'Mato Grosso do Sul', regiao: 'Centro-Oeste', icone: '🏟️',
    cidades: [
      { real: 'Campo Grande',      cidade: '🏟️ Quidditch do Pantanal', lat: -20.44, lon: -54.65, casa: 'Gryffindor' },
      { real: 'Corumbá',           cidade: '🔥 Copo de Fogo',          lat: -19.01, lon: -57.65, casa: 'Gryffindor' },
      { real: 'Dourados',          cidade: '🧪 Poção de Dupla Face',   lat: -22.22, lon: -54.81, casa: 'Slytherin'  },
      { real: 'Três Lagoas',       cidade: '💧 Lagoa Encantada',       lat: -20.75, lon: -51.68, casa: 'Hufflepuff' },
      { real: 'Ponta Porã',        cidade: '🧝 Fazenda dos Elfos',     lat: -22.54, lon: -55.73, casa: 'Hufflepuff' },
      { real: 'Aquidauana',        cidade: '🐊 Rio dos Grindylows',    lat: -20.47, lon: -55.79, casa: 'Slytherin'  },
      { real: 'Naviraí',           cidade: '🌿 Clareira Pantaneira',   lat: -23.06, lon: -54.20, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'MT', nome: 'Mato Grosso', regiao: 'Centro-Oeste', icone: '🔄',
    cidades: [
      { real: 'Cuiabá',            cidade: '🔄 Aula de Transfiguração',lat: -15.60, lon: -56.10, casa: 'Ravenclaw'  },
      { real: 'Cáceres',           cidade: '🐉 Pantanal dos Dragões',  lat: -16.07, lon: -57.68, casa: 'Slytherin'  },
      { real: 'Rondonópolis',      cidade: '🧹 Nimbus Pantaneiro',     lat: -16.47, lon: -54.64, casa: 'Gryffindor' },
      { real: 'Alta Floresta',     cidade: '💎 Caçador de Relíquias',  lat: -9.87,  lon: -56.09, casa: 'Ravenclaw'  },
      { real: 'Sinop',             cidade: '🏞️ Planície do Gárgano',   lat: -11.86, lon: -55.51, casa: 'Hufflepuff' },
      { real: 'Tangará da Serra',  cidade: '🌄 Serra Encantada',       lat: -14.62, lon: -57.50, casa: 'Ravenclaw'  },
      { real: 'Barra do Garças',   cidade: '🦎 Vale dos Bichos',       lat: -15.89, lon: -52.26, casa: 'Hufflepuff' },
      { real: 'Sorriso',           cidade: '🌻 Campo dos Girassóis',   lat: -12.54, lon: -55.72, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'PA', nome: 'Pará', regiao: 'Norte', icone: '🦜',
    cidades: [
      { real: 'Belém',             cidade: '🦜 Floresta de Criaturas', lat: -1.45,  lon: -48.50, casa: 'Hufflepuff' },
      { real: 'Santarém',          cidade: '🌀 Grande Feitiço',        lat: -2.44,  lon: -54.71, casa: 'Ravenclaw'  },
      { real: 'Altamira',          cidade: '💧 Poção de Lama',         lat: -3.20,  lon: -52.21, casa: 'Hufflepuff' },
      { real: 'Marabá',            cidade: '🐴 Selva dos Centauros',   lat: -5.37,  lon: -49.12, casa: 'Ravenclaw'  },
      { real: 'Breves',            cidade: '🌑 Ilha dos Dementadores', lat: -1.68,  lon: -50.48, casa: 'Slytherin'  },
      { real: 'Castanhal',         cidade: '🌰 Floresta das Castanhas',lat: -1.29,  lon: -47.92, casa: 'Hufflepuff' },
      { real: 'Itaituba',          cidade: '🪙 Mina de Ouro Mágica',   lat: -4.28,  lon: -55.99, casa: 'Ravenclaw'  },
      { real: 'Parauapebas',       cidade: '⛏️ Serra da Serpente',     lat: -6.07,  lon: -49.90, casa: 'Slytherin'  },
      { real: 'Tucuruí',           cidade: '⚡ Represa dos Trovões',   lat: -3.77,  lon: -49.67, casa: 'Gryffindor' },
    ]
  },
  {
    uf: 'PB', nome: 'Paraíba', regiao: 'Nordeste', icone: '🦁',
    cidades: [
      { real: 'João Pessoa',       cidade: '🦁 Torre dos Grifos',      lat: -7.12,  lon: -34.86, casa: 'Gryffindor' },
      { real: 'Campina Grande',    cidade: '⚔️ Espada de Prata',       lat: -7.23,  lon: -35.88, casa: 'Gryffindor' },
      { real: 'Patos',             cidade: '🌬️ Vento das Montanhas',   lat: -7.02,  lon: -37.28, casa: 'Ravenclaw'  },
      { real: 'Sousa',             cidade: '🦉 Coruja do Deserto',     lat: -6.76,  lon: -38.23, casa: 'Ravenclaw'  },
      { real: 'Cajazeiras',        cidade: '🌵 Cacto Mágico',          lat: -6.89,  lon: -38.56, casa: 'Hufflepuff' },
      { real: 'Guarabira',         cidade: '🌧️ Chuva Encantada',       lat: -6.85,  lon: -35.49, casa: 'Hufflepuff' },
      { real: 'Pombal',            cidade: '⛈️ Poção da Tempestade',   lat: -6.77,  lon: -37.80, casa: 'Slytherin'  },
      { real: 'Monteiro',          cidade: '🪄 Cajado Furioso',        lat: -7.89,  lon: -37.12, casa: 'Gryffindor' },
    ]
  },
  {
    uf: 'PE', nome: 'Pernambuco', regiao: 'Nordeste', icone: '👁️',
    cidades: [
      { real: 'Recife',            cidade: '👁️ Olho de Moody',         lat: -8.05,  lon: -34.88, casa: 'Ravenclaw'  },
      { real: 'Petrolina',         cidade: '🏜️ Deserto do Nômade',     lat: -9.39,  lon: -40.50, casa: 'Slytherin'  },
      { real: 'Caruaru',           cidade: '🐉 Armadilha de Dragão',   lat: -8.28,  lon: -35.98, casa: 'Gryffindor' },
      { real: 'Garanhuns',         cidade: '🔮 Círculo de Bruxos',     lat: -8.89,  lon: -36.49, casa: 'Ravenclaw'  },
      { real: 'Salgueiro',         cidade: '⚡ Poção de Raios',         lat: -8.07,  lon: -39.12, casa: 'Gryffindor' },
      { real: 'Serra Talhada',     cidade: '🗼 Torre de Sauron',       lat: -7.99,  lon: -38.30, casa: 'Slytherin'  },
      { real: 'Arcoverde',         cidade: '🛡️ Escudo do Agreste',     lat: -8.42,  lon: -37.05, casa: 'Hufflepuff' },
      { real: 'Olinda',            cidade: '🎭 Teatro dos Magos',      lat: -8.01,  lon: -34.85, casa: 'Hufflepuff' },
      { real: 'Caruaru',           cidade: '🧶 Feira dos Feitiços',    lat: -8.28,  lon: -35.98, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'PI', nome: 'Piauí', regiao: 'Nordeste', icone: '🌬️',
    cidades: [
      { real: 'Teresina',          cidade: '🌬️ Cauldron do Vento',     lat: -5.09,  lon: -42.80, casa: 'Ravenclaw'  },
      { real: 'Picos',             cidade: '🔥 Pedra da Fênix',        lat: -7.08,  lon: -41.47, casa: 'Gryffindor' },
      { real: 'Floriano',          cidade: '👻 Floresta dos Boggarts',  lat: -6.77,  lon: -43.02, casa: 'Slytherin'  },
      { real: 'Parnaíba',          cidade: '⛈️ Manto da Tempestade',   lat: -2.91,  lon: -41.78, casa: 'Hufflepuff' },
      { real: 'Campo Maior',       cidade: '☀️ Runa do Sol',           lat: -4.83,  lon: -42.17, casa: 'Ravenclaw'  },
      { real: 'São Raimundo Nonato',cidade: '🌀 Portal da Areia',      lat: -9.01,  lon: -42.70, casa: 'Slytherin'  },
      { real: 'Oeiras',            cidade: '📿 Amuleto Antigo',        lat: -7.02,  lon: -42.13, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'PR', nome: 'Paraná', regiao: 'Sul', icone: '🚂',
    cidades: [
      { real: 'Curitiba',          cidade: '🚂 Plataforma 9¾',         lat: -25.43, lon: -49.27, casa: 'Gryffindor' },
      { real: 'Londrina',          cidade: '🌳 Salgueiro Lutador',      lat: -23.31, lon: -51.17, casa: 'Hufflepuff' },
      { real: 'Maringá',           cidade: '🔥 Caldeirão de Fogo',     lat: -23.43, lon: -51.94, casa: 'Gryffindor' },
      { real: 'Foz do Iguaçu',     cidade: '🌲 Floresta Antiga',       lat: -25.55, lon: -54.59, casa: 'Hufflepuff' },
      { real: 'Cascavel',          cidade: '🗿 Toca do Golem',         lat: -24.96, lon: -53.46, casa: 'Slytherin'  },
      { real: 'Ponta Grossa',      cidade: '🌫️ Poção de Névoa',        lat: -25.09, lon: -50.16, casa: 'Ravenclaw'  },
      { real: 'Guarapuava',        cidade: '⭐ Ruínas de Sirius',      lat: -25.39, lon: -51.46, casa: 'Gryffindor' },
      { real: 'Campo Mourão',      cidade: '🗺️ Mapa Encantado',        lat: -24.05, lon: -52.38, casa: 'Ravenclaw'  },
      { real: 'Toledo',            cidade: '🏹 Flecha Mágica',         lat: -24.73, lon: -53.74, casa: 'Gryffindor' },
      { real: 'Apucarana',         cidade: '🌺 Flor do Feitiço',       lat: -23.55, lon: -51.46, casa: 'Hufflepuff' },
      { real: 'Paranaguá',         cidade: '⚓ Porto dos Feiticeiros', lat: -25.52, lon: -48.51, casa: 'Slytherin'  },
    ]
  },
  {
    uf: 'RJ', nome: 'Rio de Janeiro', regiao: 'Sudeste', icone: '🧙',
    cidades: [
      { real: 'Rio de Janeiro',    cidade: '🧙 Hogsmeade Carioca',     lat: -22.90, lon: -43.17, casa: 'Hufflepuff' },
      { real: 'Campos dos Goytacazes',cidade:'🌊 Feitiço da Baía',    lat: -21.75, lon: -41.33, casa: 'Ravenclaw'  },
      { real: 'Resende',           cidade: '🌱 Vale da Mandrágora',    lat: -22.47, lon: -44.45, casa: 'Hufflepuff' },
      { real: 'Nova Friburgo',     cidade: '🏦 Banco Gringotes',       lat: -22.28, lon: -42.53, casa: 'Slytherin'  },
      { real: 'Cabo Frio',         cidade: '🦅 Penhasco do Grifo',     lat: -22.88, lon: -42.02, casa: 'Gryffindor' },
      { real: 'Petrópolis',        cidade: '🏘️ Hogsmeade Sul',         lat: -22.51, lon: -43.18, casa: 'Hufflepuff' },
      { real: 'Macaé',             cidade: '✨ Enxame de Nargles',     lat: -22.37, lon: -41.79, casa: 'Ravenclaw'  },
      { real: 'Angra dos Reis',    cidade: '💧 Lago Mágico',           lat: -23.01, lon: -44.32, casa: 'Hufflepuff' },
      { real: 'Niterói',           cidade: '🌉 Ponte do Feiticeiro',   lat: -22.88, lon: -43.10, casa: 'Ravenclaw'  },
      { real: 'Volta Redonda',     cidade: '⚙️ Roda de Engrenagens',   lat: -22.52, lon: -44.10, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'RN', nome: 'Rio Grande do Norte', regiao: 'Nordeste', icone: '⚡',
    cidades: [
      { real: 'Natal',             cidade: '⚡ Raio de Névoa',          lat: -5.79,  lon: -35.21, casa: 'Ravenclaw'  },
      { real: 'Mossoró',           cidade: '🌪️ Tempestade da Caatinga', lat: -5.19,  lon: -37.34, casa: 'Slytherin'  },
      { real: 'Caicó',             cidade: '🌬️ Encantaria do Vento',   lat: -6.46,  lon: -37.10, casa: 'Ravenclaw'  },
      { real: 'Touros',            cidade: '🐉 Dragão do Sal',         lat: -5.20,  lon: -35.46, casa: 'Hufflepuff' },
      { real: 'Apodi',             cidade: '🕯️ Chama Eterna',          lat: -5.66,  lon: -37.80, casa: 'Gryffindor' },
      { real: 'Macau',             cidade: '🔮 Lagoa Feiticeira',      lat: -5.12,  lon: -36.64, casa: 'Slytherin'  },
      { real: 'Açu',               cidade: '🏜️ Dunas Encantadas',      lat: -5.57,  lon: -36.91, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'RO', nome: 'Rondônia', regiao: 'Norte', icone: '🌿',
    cidades: [
      { real: 'Porto Velho',       cidade: '🌿 Lama Amazônica',        lat: -8.76,  lon: -63.90, casa: 'Hufflepuff' },
      { real: 'Ariquemes',         cidade: '🌊 Feitiço do Madeira',    lat: -9.91,  lon: -63.04, casa: 'Ravenclaw'  },
      { real: 'Ji-Paraná',         cidade: '🐲 Dragão Verde',          lat: -10.88, lon: -61.92, casa: 'Hufflepuff' },
      { real: 'Vilhena',           cidade: '✨ Magia da Fronteira',    lat: -12.74, lon: -60.14, casa: 'Ravenclaw'  },
      { real: 'Cacoal',            cidade: '🧚 Enxame de Fadas',       lat: -11.44, lon: -61.45, casa: 'Hufflepuff' },
      { real: 'Rolim de Moura',    cidade: '🌺 Jardim dos Feitiços',   lat: -11.73, lon: -61.78, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'RR', nome: 'Roraima', regiao: 'Norte', icone: '🏔️',
    cidades: [
      { real: 'Boa Vista',         cidade: '🏔️ Montanha dos Gigantes', lat:  2.82,  lon: -60.67, casa: 'Gryffindor' },
      { real: 'Alto Alegre',       cidade: '🌄 Tepui Encantado',       lat:  2.99,  lon: -61.31, casa: 'Ravenclaw'  },
      { real: 'Caracaraí',         cidade: '🌿 Margem do Feitiço',     lat: -1.82,  lon: -61.13, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'RS', nome: 'Rio Grande do Sul', regiao: 'Sul', icone: '🦁',
    cidades: [
      { real: 'Porto Alegre',      cidade: '🦁 Grifinória do Sul',     lat: -30.03, lon: -51.23, casa: 'Gryffindor' },
      { real: 'Pelotas',           cidade: '🌫️ Névoa de Pampas',       lat: -31.77, lon: -52.34, casa: 'Ravenclaw'  },
      { real: 'Santa Maria',       cidade: '🦌 Expecto Sul',           lat: -29.69, lon: -53.81, casa: 'Gryffindor' },
      { real: 'Caxias do Sul',     cidade: '⛈️ Pedra do Trovão',       lat: -29.17, lon: -51.18, casa: 'Hufflepuff' },
      { real: 'Passo Fundo',       cidade: '🌀 Túnel do Tempo',        lat: -28.26, lon: -52.41, casa: 'Ravenclaw'  },
      { real: 'Uruguaiana',        cidade: '🌿 Feitiço Gaúcho',        lat: -29.76, lon: -57.09, casa: 'Hufflepuff' },
      { real: 'Bagé',              cidade: '🌬️ Colina dos Ventos',     lat: -31.33, lon: -54.11, casa: 'Ravenclaw'  },
      { real: 'Santo Ângelo',      cidade: '⭐ Arcanjo das Missões',   lat: -28.30, lon: -54.26, casa: 'Gryffindor' },
      { real: 'Ijuí',              cidade: '👹 Chifre de Troll',       lat: -28.39, lon: -53.91, casa: 'Gryffindor' },
      { real: 'Rio Grande',        cidade: '⚓ Porto do Feiticeiro',   lat: -32.03, lon: -52.10, casa: 'Slytherin'  },
      { real: 'Novo Hamburgo',     cidade: '🔨 Forja Encantada',       lat: -29.68, lon: -51.13, casa: 'Hufflepuff' },
      { real: 'São Leopoldo',      cidade: '📚 Biblioteca dos Magos',  lat: -29.76, lon: -51.15, casa: 'Ravenclaw'  },
    ]
  },
  {
    uf: 'SC', nome: 'Santa Catarina', regiao: 'Sul', icone: '❄️',
    cidades: [
      { real: 'Florianópolis',     cidade: '❄️ Castelo de Gelo',       lat: -27.59, lon: -48.55, casa: 'Ravenclaw'  },
      { real: 'Chapecó',           cidade: '⛄ Neve de Inverno',        lat: -27.10, lon: -52.62, casa: 'Hufflepuff' },
      { real: 'Joinville',         cidade: '🐉 Garra de Dragão',       lat: -26.30, lon: -48.85, casa: 'Gryffindor' },
      { real: 'Blumenau',          cidade: '💙 Feitiço Azul',          lat: -26.92, lon: -49.07, casa: 'Ravenclaw'  },
      { real: 'Lages',             cidade: '🌫️ Névoa da Serra',        lat: -27.82, lon: -50.33, casa: 'Ravenclaw'  },
      { real: 'São Miguel do Oeste',cidade:'🌬️ Vento Sul',             lat: -26.73, lon: -53.52, casa: 'Hufflepuff' },
      { real: 'Campos Novos',      cidade: '🦅 Pedra da Águia',        lat: -27.40, lon: -51.22, casa: 'Gryffindor' },
      { real: 'Criciúma',          cidade: '⛈️ Pílula de Tempestade',  lat: -28.68, lon: -49.37, casa: 'Slytherin'  },
      { real: 'Itajaí',            cidade: '🌊 Porto dos Bruxos',      lat: -26.91, lon: -48.66, casa: 'Hufflepuff' },
      { real: 'Tubarão',           cidade: '🦈 Tubarão Encantado',     lat: -28.47, lon: -49.01, casa: 'Slytherin'  },
    ]
  },
  {
    uf: 'SE', nome: 'Sergipe', regiao: 'Nordeste', icone: '🗼',
    cidades: [
      { real: 'Aracaju',           cidade: '🗼 Torre da Sereia',       lat: -10.91, lon: -37.07, casa: 'Slytherin'  },
      { real: 'Itabaiana',         cidade: '🧝 Lagoa dos Elfos',       lat: -10.68, lon: -37.43, casa: 'Hufflepuff' },
      { real: 'Propriá',           cidade: '💡 Poção da Luz',          lat: -10.21, lon: -36.84, casa: 'Ravenclaw'  },
      { real: 'Lagarto',           cidade: '🌿 Ervas Mágicas',         lat: -10.92, lon: -37.66, casa: 'Hufflepuff' },
      { real: 'Estância',          cidade: '🏡 Mansão Encantada',      lat: -11.27, lon: -37.44, casa: 'Hufflepuff' },
    ]
  },
  {
    uf: 'SP', nome: 'São Paulo', regiao: 'Sudeste', icone: '🏰',
    cidades: [
      { real: 'São Paulo',         cidade: '🏰 Hogwarts',              lat: -23.55, lon: -46.63, casa: 'Gryffindor' },
      { real: 'Campinas',          cidade: '🛒 Rua Diagonal',          lat: -22.91, lon: -47.06, casa: 'Hufflepuff' },
      { real: 'Ribeirão Preto',    cidade: '🏚️ Casa Riddle',           lat: -21.17, lon: -47.81, casa: 'Slytherin'  },
      { real: 'São José dos Campos',cidade:'🌧️ Feitiço da Chuva',     lat: -23.18, lon: -45.88, casa: 'Ravenclaw'  },
      { real: 'Sorocaba',          cidade: '🪄 Varinha de Olmo',       lat: -23.50, lon: -47.46, casa: 'Hufflepuff' },
      { real: 'Bauru',             cidade: '🚂 Trem Expresso',         lat: -22.31, lon: -49.07, casa: 'Gryffindor' },
      { real: 'São José do Rio Preto',cidade:'🏅 Pomo de Ouro',        lat: -20.82, lon: -49.38, casa: 'Gryffindor' },
      { real: 'Presidente Prudente',cidade:'📖 Livro Proibido',        lat: -22.12, lon: -51.39, casa: 'Slytherin'  },
      { real: 'Santos',            cidade: '🏆 Sala dos Troféus',      lat: -23.96, lon: -46.33, casa: 'Gryffindor' },
      { real: 'Piracicaba',        cidade: '📚 Escola de Magia',       lat: -22.73, lon: -47.65, casa: 'Ravenclaw'  },
      { real: 'Franca',            cidade: '🌿 Feitiço Verde',         lat: -20.54, lon: -47.40, casa: 'Hufflepuff' },
      { real: 'Araçatuba',         cidade: '🪆 Fantoche de Madeira',   lat: -21.21, lon: -50.43, casa: 'Slytherin'  },
      { real: 'Ubatuba',           cidade: '🗺️ Mapa das Marés',        lat: -23.43, lon: -45.07, casa: 'Ravenclaw'  },
      { real: 'Itu',               cidade: '⚡ Runa da Tempestade',    lat: -23.27, lon: -47.30, casa: 'Gryffindor' },
      { real: 'Marília',           cidade: '🌙 Lua de Feitiço',        lat: -22.21, lon: -49.95, casa: 'Ravenclaw'  },
      { real: 'Araraquara',        cidade: '🏺 Vaso de Horcrux',       lat: -21.79, lon: -48.17, casa: 'Slytherin'  },
    ]
  },
  {
    uf: 'TO', nome: 'Tocantins', regiao: 'Norte', icone: '🌀',
    cidades: [
      { real: 'Palmas',            cidade: '🌀 Labirinto de Fogo',     lat: -10.25, lon: -48.32, casa: 'Gryffindor' },
      { real: 'Araguaína',         cidade: '🔥 Chama do Cerrado',      lat: -7.19,  lon: -48.21, casa: 'Hufflepuff' },
      { real: 'Gurupi',            cidade: '📜 Runas do Rio',          lat: -11.73, lon: -49.07, casa: 'Ravenclaw'  },
      { real: 'Porto Nacional',    cidade: '🌀 Portal do Cerrado',     lat: -10.71, lon: -48.42, casa: 'Hufflepuff' },
      { real: 'Dianópolis',        cidade: '🌑 Sombra do Araguaia',    lat: -11.62, lon: -46.82, casa: 'Slytherin'  },
      { real: 'Paraíso do Tocantins',cidade:'🌿 Paraíso Encantado',    lat: -10.18, lon: -48.88, casa: 'Hufflepuff' },
    ]
  },
]
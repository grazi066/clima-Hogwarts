# 🏰 Clima Hogwarts

Dashboard de previsão do tempo para qualquer cidade do Brasil, reimaginado como o "Instituto Mágico de Meteorologia" — cada cidade selecionada vira um local temático do universo Harry Potter, com clima ao vivo, alertas mágicos e a casa de Hogwarts correspondente.

## Sobre

O Clima Hogwarts é um dashboard de clima com tema de Hogwarts/Harry Potter: o usuário escolhe um estado e uma cidade brasileira em um seletor pesquisável, e a aplicação exibe o clima daquela localização em um "Pergaminho Meteorológico" estilizado como pergaminho bruxo. Todas as 27 unidades federativas do Brasil estão cobertas, com centenas de cidades mapeadas em `lib/hogwarts.js` — cada uma recebe um nome fictício temático (ex.: São Paulo → "🏰 Hogwarts", Recife → "👁️ Olho de Moody") e é associada a uma das quatro casas de Hogwarts, que define a cor de destaque do card.

Principais funcionalidades:

- **Seletor de estado/cidade** com busca, cobrindo os 27 estados do Brasil e suas principais cidades.
- **Card de clima atual** — temperatura, sensação térmica, umidade, vento e condição do tempo (com emoji), incluindo a fonte dos dados (INMET ou Open-Meteo).
- **Histórico dos últimos 7 dias** — gráfico de temperatura máxima por dia.
- **Previsão dos próximos 7 dias** — mínima/máxima e condição diária.
- **Alertas dinâmicos temáticos** — mensagens como "⛈️ Alerta de Tempestade — Dementadores nas proximidades!" ou "❄️ Frio intenso — Feitiço Aquecedor de Madame Pomfrey ativo", geradas a partir da temperatura, vento e condição atuais.
- **Relógio e data em tempo real** no cabeçalho.
- **Cor do card por casa de Hogwarts** (Gryffindor, Slytherin, Ravenclaw ou Hufflepuff), conforme a cidade selecionada.

> Nota: o projeto também tem os componentes `components/WeatherCard.jsx` e `components/TemperatureChart.jsx`, mas nenhum dos dois é usado na página atual (`app/page.js` implementa sua própria UI) — são versões anteriores/experimentais mantidas no repositório.

## Tecnologias Utilizadas

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Biblioteca UI | [React 19](https://react.dev) |
| Estilização | [Tailwind CSS v4](https://tailwindcss.com) (a página principal usa majoritariamente estilos inline para o visual temático) |
| Gráficos | [Recharts](https://recharts.org) (dependência do projeto, usada no componente não ativo `TemperatureChart.jsx`) |
| Lint | ESLint 9 + `eslint-config-next` |
| API de clima | [INMET](https://portal.inmet.gov.br) (fonte primária, via rota própria) com fallback automático para [Open-Meteo](https://open-meteo.com) |
| Deploy | [Vercel](https://vercel.com) |

## Rodando localmente

O projeto vive na subpasta `clima-dashboard` deste repositório.

```bash
git clone https://github.com/grazi066/clima-Hogwarts.git
cd clima-Hogwarts/clima-dashboard
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros comandos disponíveis:

```bash
npm run build   # build de produção
npm run start   # inicia o servidor de produção (requer build prévio)
npm run lint    # ESLint
```

## Variável de ambiente (opcional)

A aplicação **não exige nenhuma chave de API para funcionar** — a rota `app/api/clima/route.js` usa a [Open-Meteo](https://open-meteo.com) (gratuita, sem chave) como fonte de dados sempre que não há um token do INMET configurado, e o histórico/previsão de 7 dias já são buscados direto da Open-Meteo no client.

| Variável | Descrição |
|---|---|
| `INMET_TOKEN` | Opcional. Token de autenticação para consultar estações do [INMET](https://portal.inmet.gov.br) como fonte primária de dados. Sem ele, a aplicação usa a Open-Meteo automaticamente. |

Para configurar, crie um arquivo `.env.local` dentro de `clima-dashboard/`:

```bash
INMET_TOKEN="seu-token-aqui"
```

## Deploy

Aplicação em produção na Vercel: **[clima-dashboard-ten.vercel.app](https://clima-dashboard-ten.vercel.app)**

## Estrutura do projeto

```
clima-dashboard/
  app/
    api/clima/route.js     # rota que busca o clima atual (INMET → fallback Open-Meteo)
    page.js                  # página principal: seletor, alertas, card de clima, histórico e previsão
    layout.js                  # layout raiz do Next.js
    globals.css                  # estilos globais (Tailwind)
  components/
    WeatherCard.jsx             # card de clima simplificado (não utilizado na página atual)
    TemperatureChart.jsx          # gráfico com Recharts (não utilizado na página atual)
  lib/
    hogwarts.js                    # dados: 27 estados e centenas de cidades do Brasil, cada uma com nome temático, casa de Hogwarts e coordenadas
  public/                            # ícones estáticos
```

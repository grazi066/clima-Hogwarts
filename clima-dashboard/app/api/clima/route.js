// app/api/clima/route.js
// Fonte principal: INMET (apitempo.inmet.gov.br)
// Fallback automático: Open-Meteo (caso INMET falhe ou não tenha token)

import { NextResponse } from 'next/server'

// Mapa de coordenadas → código de estação INMET mais próxima
// Fonte: apitempo.inmet.gov.br/estacoes/T
const ESTACOES_INMET = {
  // Formato: 'lat,lon' aproximado → código da estação
  'default': 'A001', // Brasília como fallback
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const lat    = searchParams.get('lat')    || '-15.78'
  const lon    = searchParams.get('lon')    || '-47.93'
  const codEst = searchParams.get('estacao') // código INMET opcional

  // ── 1. Tentar INMET ──────────────────────────────────────────
  // A API do INMET retorna dados da estação pelo código.
  // Endpoint: GET /estacao/dados/{codEstacao}
  // Sem token: alguns endpoints são públicos, outros exigem auth.
  if (codEst || process.env.INMET_TOKEN) {
    try {
      const codigo = codEst || 'A001'
      const headers = {}
      if (process.env.INMET_TOKEN) {
        headers['Authorization'] = process.env.INMET_TOKEN
      }

      const res = await fetch(
        `https://apitempo.inmet.gov.br/estacao/dados/${codigo}`,
        { headers, signal: AbortSignal.timeout(6000) }
      )

      if (res.ok) {
        const raw = await res.json()
        // O INMET retorna array de leituras — pega a mais recente
        const dados = Array.isArray(raw) ? raw[raw.length - 1] : raw

        if (dados && dados.TEM_INS !== undefined) {
          return NextResponse.json({
            fonte:       'INMET',
            temperatura: Math.round(parseFloat(dados.TEM_INS  || 0)),
            umidade:     Math.round(parseFloat(dados.UMD_INS  || 0)),
            vento:       Math.round(parseFloat(dados.VEN_VEL  || 0)),
            sensacao:    Math.round(parseFloat(dados.TEM_INS  || 0)), // INMET não tem sensação direta
            code:        0, // INMET não retorna WMO code
            estacao:     dados.CD_ESTACAO || codigo,
            horario:     dados.HR_MEDICAO || '',
            data:        dados.DT_MEDICAO || '',
          })
        }
      }
    } catch (e) {
      console.warn('INMET falhou, usando fallback Open-Meteo:', e.message)
    }
  }

  // ── 2. Fallback: Open-Meteo ──────────────────────────────────
  // Usado quando INMET não tem token ou está fora do ar
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,weather_code` +
      `&timezone=America/Sao_Paulo`
    )
    const data = await res.json()
    const c = data.current

    return NextResponse.json({
      fonte:       'Open-Meteo',
      temperatura: Math.round(c.temperature_2m),
      umidade:     Math.round(c.relative_humidity_2m),
      vento:       Math.round(c.wind_speed_10m),
      sensacao:    Math.round(c.apparent_temperature),
      code:        c.weather_code ?? 0,
    })
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: 500 })
  }
}
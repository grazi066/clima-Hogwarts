// app/api/clima/route.js
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get('lat') || '-3.71'
  const lon = searchParams.get('lon') || '-38.54'

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,weather_code` +
      `&timezone=America/Sao_Paulo`
    )
    const data = await res.json()
    const c = data.current

    return NextResponse.json({
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
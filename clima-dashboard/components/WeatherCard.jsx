'use client'
import React from 'react'

export default function WeatherCard({ cidade, lat, lon }) {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/clima?lat=${lat}&lon=${lon}`)
      .then(r => r.json())
      .then(setDados)
  }, [])

  const cor = !dados ? 'border-gray-500'
    : dados.temperatura < 20 ? 'border-blue-400'
    : dados.temperatura < 30 ? 'border-yellow-400'
    : 'border-red-500'

  return (
    <div className={`rounded-2xl border-2 ${cor} bg-gray-900/80 p-6 shadow-lg`}>
      <h2 className="text-yellow-400 text-xl font-bold">{cidade}</h2>
      {!dados ? <p className="text-white mt-2">Carregando feitiço... 🪄</p> : (
        <>
          <p className="text-5xl font-bold text-white mt-2">{dados.temperatura}°C</p>
          <p className="text-gray-300 mt-3">💧 Umidade: {dados.umidade}%</p>
          <p className="text-gray-300">💨 Vento: {dados.vento} km/h</p>
        </>
      )}
    </div>
  )
}
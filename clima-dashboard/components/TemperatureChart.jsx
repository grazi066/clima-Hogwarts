'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const dados = [
  { hora: '06h', temp: 18 }, { hora: '09h', temp: 21 },
  { hora: '12h', temp: 26 }, { hora: '15h', temp: 28 },
  { hora: '18h', temp: 24 }, { hora: '21h', temp: 20 },
]

export default function TemperatureChart() {
  return (
    <div className="bg-gray-900/80 rounded-2xl border-2 border-yellow-400 p-6 max-w-5xl mx-auto mt-6">
      <h2 className="text-yellow-400 text-xl font-bold mb-4">
        📜 Pergaminho de Temperaturas — Hogwarts (São Paulo)
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dados}>
          <XAxis dataKey="hora" stroke="#facc15" />
          <YAxis stroke="#facc15" unit="°C" />
          <Tooltip contentStyle={{ background: '#111', border: '1px solid #facc15' }} />
          <Line type="monotone" dataKey="temp" stroke="#facc15" strokeWidth={2} dot={{ fill: '#facc15' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

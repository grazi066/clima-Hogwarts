'use client'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ESTADOS, COR_CASA } from '../lib/hogwarts'

const DIAS_SEMANA = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

function getTempColor(t) {
  if (t == null) return '#aaa'
  if (t < 12) return '#64b5f6'
  if (t < 18) return '#81d4fa'
  if (t < 24) return '#a5d6a7'
  if (t < 30) return '#ffd54f'
  if (t < 36) return '#ff8a65'
  return '#ef5350'
}

function getCondicao(code) {
  if (code === 0)  return { label: 'Céu Limpo',           emoji: '☀️' }
  if (code <= 2)   return { label: 'Parcialmente Nublado', emoji: '⛅' }
  if (code === 3)  return { label: 'Nublado',              emoji: '☁️' }
  if (code <= 49)  return { label: 'Névoa',                emoji: '🌫️' }
  if (code <= 57)  return { label: 'Garoa',                emoji: '🌦️' }
  if (code <= 67)  return { label: 'Chuva',                emoji: '🌧️' }
  if (code <= 77)  return { label: 'Neve',                 emoji: '❄️' }
  if (code <= 82)  return { label: 'Pancadas de Chuva',    emoji: '🌧️' }
  if (code <= 86)  return { label: 'Tempestade de Neve',   emoji: '🌨️' }
  if (code <= 99)  return { label: 'Tempestade',           emoji: '⛈️' }
  return { label: 'Variável', emoji: '🌡️' }
}

function getAlertaHP(temp, code, vento) {
  const alertas = []
  if (code >= 80)      alertas.push({ cor: '#ef5350', msg: '⛈️ Alerta de Tempestade — Dementadores nas proximidades!' })
  else if (code >= 60) alertas.push({ cor: '#64b5f6', msg: '🌧️ Chuva intensa — Encantamento Impermeável recomendado' })
  if (temp >= 36)      alertas.push({ cor: '#ff5722', msg: '🔥 Calor extremo — Poção de Resfriamento em falta' })
  if (temp <= 10)      alertas.push({ cor: '#81d4fa', msg: '❄️ Frio intenso — Feitiço Aquecedor de Madame Pomfrey ativo' })
  if (vento >= 50)     alertas.push({ cor: '#ce93d8', msg: '💨 Ventos fortes — Nimbus 2000 fora de operação' })
  if (alertas.length === 0) alertas.push({ cor: '#a5d6a7', msg: '✨ Condições estáveis — Céus seguros para Quadribol' })
  return alertas
}

// ── ALERTA ────────────────────────────────────────────────────────
function Alerta({ alertas }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (alertas.length <= 1) return
    const t = setInterval(() => setIdx(i => (i + 1) % alertas.length), 4000)
    return () => clearInterval(t)
  }, [alertas.length])
  const a = alertas[idx]
  return (
    <div style={{
      border: `1px solid ${a.cor}66`, background: `${a.cor}18`,
      borderRadius: 10, padding: '11px 14px',
      display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8,
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: a.cor, boxShadow: `0 0 8px ${a.cor}`, flexShrink: 0, animation: 'pulse 2s infinite' }} />
      <span style={{ color: '#eee', fontSize: 13, fontFamily: 'Crimson Text, serif', fontWeight: 600 }}>{a.msg}</span>
      {alertas.length > 1 && <span style={{ marginLeft: 'auto', color: '#888', fontSize: 11 }}>{idx + 1}/{alertas.length}</span>}
    </div>
  )
}

// ── SELETOR ───────────────────────────────────────────────────────
function Seletor({ onSelect, estadoAtual, cidadeAtual }) {
  const [estadoOpen, setEstadoOpen] = useState(false)
  const [cidadeOpen, setCidadeOpen] = useState(false)
  const [bEstado, setBEstado] = useState('')
  const [bCidade, setBCidade] = useState('')

  const estadoObj = ESTADOS.find(e => e.uf === estadoAtual)

  const estadosFiltrados = useMemo(() =>
    ESTADOS.filter(e => !bEstado ||
      e.nome.toLowerCase().includes(bEstado.toLowerCase()) ||
      e.uf.toLowerCase().includes(bEstado.toLowerCase())
    ), [bEstado])

  const cidadesFiltradas = useMemo(() =>
    (estadoObj?.cidades || []).filter(c => !bCidade ||
      c.real.toLowerCase().includes(bCidade.toLowerCase())
    ), [estadoObj, bCidade])

  const selEstado = (uf) => { onSelect(uf, null); setEstadoOpen(false); setBEstado(''); setCidadeOpen(true) }
  const selCidade = (c)  => { onSelect(estadoAtual, c); setCidadeOpen(false); setBCidade('') }

  const dropStyle = {
    position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 200,
    background: '#0e0e1a', border: '1px solid #b8860b',
    borderRadius: '0 0 10px 10px',
    maxHeight: 240, overflowY: 'auto',
    boxShadow: '0 8px 32px #000c',
  }

  const ItemHov = ({ onClick, left, right, rightColor }) => {
    const [hov, setHov] = useState(false)
    return (
      <div onClick={onClick}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          padding: '10px 14px', cursor: 'pointer', fontSize: 13,
          color: hov ? '#fff' : '#bbb', fontFamily: 'Crimson Text, serif',
          borderBottom: '1px solid #111',
          background: hov ? 'rgba(255,215,64,0.10)' : 'transparent',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          transition: 'all 0.1s',
        }}>
        <span>{left}</span>
        {right && <span style={{ color: rightColor || '#777', fontSize: 11, flexShrink: 0, marginLeft: 8, fontFamily: 'Cinzel, serif' }}>{right}</span>}
      </div>
    )
  }

  const SearchInput = ({ val, set, placeholder }) => (
    <div style={{ padding: '8px 10px', borderBottom: '1px solid #1a1a2a' }}>
      <input autoFocus placeholder={placeholder} value={val} onChange={e => set(e.target.value)}
        style={{
          width: '100%', padding: '6px 10px',
          background: '#1a1a2a', border: '1px solid #333',
          borderRadius: 6, color: '#fff', fontSize: 12,
          fontFamily: 'Crimson Text, serif', outline: 'none',
        }} />
    </div>
  )

  const BtnSel = ({ label, value, open, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} style={{
      width: '100%', padding: '12px 14px',
      background: value ? 'rgba(255,215,64,0.07)' : '#0e0e1a',
      border: `1px solid ${open ? '#ffd740' : value ? '#b8860b' : '#2a2a3a'}`,
      borderRadius: open ? '10px 10px 0 0' : 10,
      color: value ? '#ffd740' : '#666',
      textAlign: 'left', fontSize: 13,
      fontFamily: 'Cinzel, serif',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      opacity: disabled ? 0.4 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.15s',
    }}>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value || label}</span>
      <span style={{ color: '#b8860b', fontSize: 10, flexShrink: 0, marginLeft: 8 }}>{open ? '▲' : '▼'}</span>
    </button>
  )

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: '#c9a84c', fontFamily: 'Cinzel, serif', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, height: 1, background: '#b8860b44' }} />
        🗺️ LOCALIZAÇÃO
        <div style={{ flex: 1, height: 1, background: '#b8860b44' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {/* Estado */}
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 10, color: '#888', letterSpacing: 2, fontFamily: 'Cinzel, serif', marginBottom: 5 }}>01 // ESTADO</div>
          <BtnSel label="Selecionar..." value={estadoObj ? `${estadoObj.icone} ${estadoObj.nome}` : null} open={estadoOpen} onClick={() => { setEstadoOpen(!estadoOpen); setCidadeOpen(false) }} />
          {estadoOpen && (
            <div style={dropStyle}>
              <SearchInput val={bEstado} set={setBEstado} placeholder="Filtrar estado..." />
              {estadosFiltrados.map(e => <ItemHov key={e.uf} onClick={() => selEstado(e.uf)} left={`${e.icone} ${e.nome}`} right={e.uf} />)}
            </div>
          )}
        </div>

        {/* Cidade */}
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 10, color: '#888', letterSpacing: 2, fontFamily: 'Cinzel, serif', marginBottom: 5 }}>02 // CIDADE</div>
          <BtnSel label="Selecionar..." value={cidadeAtual?.real || null} open={cidadeOpen} disabled={!estadoAtual} onClick={() => { setCidadeOpen(!cidadeOpen); setEstadoOpen(false) }} />
          {cidadeOpen && (
            <div style={dropStyle}>
              <SearchInput val={bCidade} set={setBCidade} placeholder="Filtrar cidade..." />
              {cidadesFiltradas.map(c => (
                <ItemHov key={c.real} onClick={() => selCidade(c)}
                  left={c.real}
                  right={c.casa}
                  rightColor={COR_CASA[c.casa]?.badge}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── CARD CLIMA ATUAL ──────────────────────────────────────────────
function CardAtual({ dados, cidade }) {
  if (!dados || !cidade) return null
  const cond = getCondicao(dados.code || 0)
  const tempColor = getTempColor(dados.temperatura)
  const cor = COR_CASA[cidade.casa] || COR_CASA.Gryffindor

  return (
    <div style={{
      border: `1.5px solid ${cor.borda}`,
      background: 'linear-gradient(160deg, #0e0e1a 60%, #1a1030 100%)',
      borderRadius: 16, overflow: 'hidden', marginBottom: 16,
    }}>
      {/* Header casa */}
      <div style={{
        background: `linear-gradient(90deg, ${cor.borda}33, transparent)`,
        borderBottom: `1px solid ${cor.borda}55`,
        padding: '10px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: cor.badge, boxShadow: `0 0 8px ${cor.badge}`, animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: 11, color: cor.badge, letterSpacing: 2, fontWeight: 700 }}>
            {cidade.casa.toUpperCase()} // AO VIVO
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {dados.fonte && (
            <span style={{
              fontSize: 9, color: dados.fonte === 'INMET' ? '#69f0ae' : '#ffd740',
              fontFamily: 'Cinzel, serif', letterSpacing: 1,
              background: dados.fonte === 'INMET' ? '#69f0ae18' : '#ffd74018',
              border: `1px solid ${dados.fonte === 'INMET' ? '#69f0ae44' : '#ffd74044'}`,
              borderRadius: 4, padding: '2px 6px',
            }}>
              {dados.fonte}
            </span>
          )}
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: 9, color: '#555', letterSpacing: 1 }}>PERGAMINHO METEOROLÓGICO</span>
        </div>
      </div>

      <div style={{ padding: '20px 18px 16px' }}>
        {/* Cidade */}
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 54, marginBottom: 8 }}>{cond.emoji}</div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 5vw, 2rem)', color: '#ffffff', letterSpacing: 3, marginBottom: 6, textShadow: '0 0 20px #fff3' }}>
            {cidade.real.toUpperCase()}
          </h2>
          {/* Nome temático — bem visível */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: `${cor.borda}22`,
            border: `1px solid ${cor.borda}66`,
            borderRadius: 20, padding: '5px 14px',
          }}>
            <span style={{ fontSize: 12 }}>{cidade.cidade.split(' ')[0]}</span>
            <span style={{ color: cor.badge, fontSize: 12, fontFamily: 'Cinzel, serif', fontWeight: 700, letterSpacing: 1 }}>
              {cidade.cidade.split(' ').slice(1).join(' ')}
            </span>
          </div>
        </div>

        {/* Temperatura */}
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <div style={{
            fontSize: 'clamp(4.5rem, 18vw, 7.5rem)', fontWeight: 900,
            color: tempColor, lineHeight: 1,
            textShadow: `0 0 50px ${tempColor}77, 0 0 20px ${tempColor}44`,
            fontFamily: 'Cinzel, serif',
          }}>
            {dados.temperatura}<span style={{ fontSize: '0.35em', color: '#aaa' }}>°C</span>
          </div>
          <div style={{
            display: 'inline-block', marginTop: 10,
            background: `${tempColor}22`, border: `1px solid ${tempColor}66`,
            borderRadius: 20, padding: '5px 18px',
            color: tempColor, fontSize: 12,
            fontFamily: 'Cinzel, serif', letterSpacing: 2, fontWeight: 700,
          }}>
            {cond.label.toUpperCase()}
          </div>
        </div>

        {/* 4 stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'Temperatura', value: `${dados.temperatura}°C`, cor: tempColor        },
            { label: 'Umidade',     value: `${dados.umidade}%`,      cor: '#4dd0e1'        },
            { label: 'Vento',       value: `${dados.vento} km/h`,    cor: '#ef9a9a'        },
            { label: 'Sensação',    value: `${dados.sensacao}°C`,    cor: '#64b5f6'        },
          ].map(s => (
            <div key={s.label} style={{
              background: '#0d0d18',
              border: `1px solid ${s.cor}44`,
              borderRadius: 10, padding: '12px 14px',
              borderLeft: `3px solid ${s.cor}`,
            }}>
              <div style={{ fontSize: 9, color: '#888', letterSpacing: 2, fontFamily: 'Cinzel, serif', marginBottom: 5 }}>
                {s.label.toUpperCase()}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', fontFamily: 'Cinzel, serif', textShadow: `0 0 10px ${s.cor}44` }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── HISTÓRICO 7 DIAS ──────────────────────────────────────────────
function Historico({ historico }) {
  if (!historico || historico.length === 0) return null

  const temps = historico.map(h => h.tempMax)
  const maxT = Math.max(...temps)
  const minT = Math.min(...temps)
  const W = 400, H = 90, pad = 22

  const x = i => pad + (i / (historico.length - 1)) * (W - pad * 2)
  const y = t  => H - pad - ((t - minT) / (maxT - minT + 1)) * (H - pad * 2)

  return (
    <div style={{ border: '1px solid #2a2a3a', background: '#0a0a14', borderRadius: 14, padding: '16px', marginBottom: 16 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, color: '#c9a84c', fontFamily: 'Cinzel, serif', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9a84c', boxShadow: '0 0 8px #c9a84c' }} />
        📜 PERGAMINHO — ÚLTIMOS 7 DIAS
      </div>

      <div style={{ overflowX: 'auto', marginBottom: 14 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', minWidth: 280 }}>
          <defs>
            <linearGradient id="gHist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffd740" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffd740" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0,1,2,3].map(i => (
            <line key={i} x1={pad} x2={W-pad}
              y1={pad + (i/3)*(H-pad*2)} y2={pad + (i/3)*(H-pad*2)}
              stroke="#ffffff0a" strokeWidth={1} />
          ))}
          <polygon
            points={`${x(0)},${H-pad} ${historico.map((_,i)=>`${x(i)},${y(temps[i])}`).join(' ')} ${x(historico.length-1)},${H-pad}`}
            fill="url(#gHist)" />
          <polyline
            points={historico.map((_,i) => `${x(i)},${y(temps[i])}`).join(' ')}
            fill="none" stroke="#ffd740" strokeWidth={2.5} strokeLinejoin="round" />
          {historico.map((h, i) => (
            <g key={i}>
              <circle cx={x(i)} cy={y(temps[i])} r={4} fill={getTempColor(temps[i])} stroke="#0a0a14" strokeWidth={1.5} />
              <text x={x(i)} y={H-5} textAnchor="middle" fill="#888" fontSize={9}>{h.dia}</text>
              <text x={x(i)} y={y(temps[i])-9} textAnchor="middle" fill="#ffd740" fontSize={10} fontWeight="700">{temps[i]}°</text>
            </g>
          ))}
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 7, overflowX: 'auto', paddingBottom: 4 }}>
        {historico.map((h, i) => {
          const cond = getCondicao(h.code || 0)
          return (
            <div key={i} style={{
              flexShrink: 0,
              background: '#0e0e1a', border: '1px solid #1e1e2e',
              borderRadius: 10, padding: '8px 10px', textAlign: 'center', minWidth: 54,
            }}>
              <div style={{ fontSize: 10, color: '#888', fontFamily: 'Cinzel, serif', marginBottom: 4 }}>{h.dia}</div>
              <div style={{ fontSize: 18 }}>{cond.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: getTempColor(h.tempMax), fontFamily: 'Cinzel, serif' }}>{h.tempMax}°</div>
              <div style={{ fontSize: 11, color: '#64b5f6', fontFamily: 'Cinzel, serif' }}>{h.tempMin}°</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── PREVISÃO 7 DIAS ───────────────────────────────────────────────
function Previsao({ previsao }) {
  if (!previsao || previsao.length === 0) return null
  return (
    <div style={{ border: '1px solid #2a2a3a', background: '#0a0a14', borderRadius: 14, padding: '16px', marginBottom: 16 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, color: '#c9a84c', fontFamily: 'Cinzel, serif', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9a84c', boxShadow: '0 0 8px #c9a84c' }} />
        🔮 VISÃO PROFÉTICA — PRÓXIMOS 7 DIAS
        <span style={{ marginLeft: 'auto', color: '#555', fontSize: 9, fontFamily: 'Cinzel, serif' }}>// SALA DA PROFECIA ATIVA</span>
      </div>

      {previsao.map((d, i) => {
        const cond = getCondicao(d.code || 0)
        const hoje = i === 0
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'center',
            padding: hoje ? '10px 8px' : '9px 0',
            borderBottom: i < previsao.length - 1 ? '1px solid #111' : 'none',
            background: hoje ? 'rgba(255,215,64,0.06)' : 'transparent',
            borderRadius: hoje ? 8 : 0,
          }}>
            <div style={{
              width: 40, height: 28,
              background: hoje ? 'rgba(255,215,64,0.18)' : '#111',
              borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginRight: 10, flexShrink: 0,
            }}>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: 9, color: hoje ? '#ffd740' : '#777', fontWeight: hoje ? 700 : 400 }}>
                {hoje ? 'HOJE' : d.dia}
              </span>
            </div>
            <span style={{ fontSize: 22, marginRight: 10, flexShrink: 0 }}>{cond.emoji}</span>
            <span style={{ color: '#aaa', fontSize: 12, flex: 1, fontFamily: 'Crimson Text, serif', fontWeight: 600 }}>{cond.label}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <span style={{ color: '#64b5f6', fontSize: 14, fontFamily: 'Cinzel, serif', fontWeight: 700 }}>{d.min}°</span>
              <div style={{ width: 50, height: 3, borderRadius: 4, background: '#1a1a2a', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, #64b5f6, ${getTempColor(d.max)})`, borderRadius: 4, width: '100%' }} />
              </div>
              <span style={{ color: getTempColor(d.max), fontSize: 16, fontFamily: 'Cinzel, serif', fontWeight: 900 }}>{d.max}°</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── RELÓGIO ───────────────────────────────────────────────────────
function Relogio() {
  const [hora, setHora] = useState('')
  useEffect(() => {
    const update = () => {
      const n = new Date()
      setHora(`${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`)
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])
  return <span>{hora}</span>
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────
export default function Home() {
  const [estadoSel, setEstadoSel] = useState(null)
  const [cidadeSel, setCidadeSel] = useState(null)
  const [climaAtual, setClimaAtual] = useState(null)
  const [historico, setHistorico] = useState([])
  const [previsao, setPrevisao] = useState([])
  const [loading, setLoading] = useState(false)
  const [alertas, setAlertas] = useState([{ cor: '#a5d6a7', msg: '✨ Selecione uma cidade para ativar o Pergaminho Meteorológico' }])

  const handleSelect = useCallback((uf, cidade) => {
    setEstadoSel(uf)
    setCidadeSel(cidade)
    if (cidade) carregarClima(cidade)
  }, [])

  async function carregarClima(cidade) {
    setLoading(true)
    setClimaAtual(null)
    setHistorico([])
    setPrevisao([])
    try {
      const { lat, lon, codInmet } = cidade

      // Clima atual via nossa API Route (tenta INMET → fallback Open-Meteo)
      const params = new URLSearchParams({ lat, lon })
      if (codInmet) params.set('estacao', codInmet)
      const atualRes = await fetch(`/api/clima?${params}`)
      const atual = await atualRes.json()
      setClimaAtual(atual)
      setAlertas(getAlertaHP(atual.temperatura, atual.code || 0, atual.vento))

      // Histórico + previsão via Open-Meteo (dados diários — mais estáveis)
      const histRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
        `&past_days=7&forecast_days=7&timezone=America/Sao_Paulo`
      )
      const histData = await histRes.json()
      const dias  = histData.daily?.time             || []
      const maxs  = histData.daily?.temperature_2m_max || []
      const mins  = histData.daily?.temperature_2m_min || []
      const codes = histData.daily?.weather_code      || []

      const hoje = new Date().toISOString().slice(0, 10)
      const idxHoje = dias.findIndex(d => d === hoje)
      const idx = idxHoje >= 0 ? idxHoje : 7

      setHistorico(dias.slice(0, idx).map((d, i) => {
        const dt = new Date(d + 'T12:00:00')
        return { dia: DIAS_SEMANA[dt.getDay()], tempMax: Math.round(maxs[i]), tempMin: Math.round(mins[i]), code: codes[i] }
      }))

      setPrevisao(dias.slice(idx).map((d, i) => {
        const dt = new Date(d + 'T12:00:00')
        return { dia: DIAS_SEMANA[dt.getDay()], max: Math.round(maxs[idx+i]), min: Math.round(mins[idx+i]), code: codes[idx+i] }
      }))

    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const now = new Date()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:wght@400;600&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #060610; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #b8860b; border-radius: 4px; }
        input::placeholder { color: #555; }
        button { border: none; }
        .fade { animation: fadeIn 0.4s ease; }
      `}</style>

      <main style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top left, #160d2a 0%, #060610 55%)',
        fontFamily: 'Crimson Text, serif', color: '#fff',
      }}>
        <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 48px' }}>

          {/* ── HEADER ── */}
          <div style={{ padding: '28px 18px 16px', borderBottom: '1px solid #141414', marginBottom: 20 }}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #b8860b, #ffd740, #b8860b, transparent)', marginBottom: 20, borderRadius: 2 }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: 9, letterSpacing: 4, color: '#c9a84c', fontFamily: 'Cinzel, serif', marginBottom: 6, fontWeight: 700 }}>
                  ⚡ INSTITUTO MÁGICO DE METEOROLOGIA
                </p>
                <h1 style={{
                  fontFamily: 'Cinzel, serif', fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 7vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #ffd740 30%, #ff8f00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  letterSpacing: 2, lineHeight: 1.1,
                  filter: 'drop-shadow(0 0 20px #ffd74044)',
                }}>
                  CLIMA<br />HOGWARTS
                </h1>
              </div>

              {/* Data/hora — bem visível */}
              <div style={{
                textAlign: 'right', paddingTop: 2,
                background: 'rgba(255,215,64,0.05)',
                border: '1px solid #2a2a1a',
                borderRadius: 10, padding: '10px 14px',
              }}>
                <div style={{ fontSize: 10, color: '#c9a84c', fontFamily: 'Cinzel, serif', letterSpacing: 1, marginBottom: 4, fontWeight: 700 }}>
                  {DIAS_SEMANA[now.getDay()].toUpperCase()}, {now.getDate()} {MESES[now.getMonth()].toUpperCase()}
                </div>
                <div style={{ fontSize: 18, color: '#ffd740', fontFamily: 'Cinzel, serif', fontWeight: 700, letterSpacing: 1 }}>
                  <Relogio />
                </div>
                <div style={{
                  marginTop: 6, fontSize: 9,
                  color: '#69f0ae',
                  fontFamily: 'Cinzel, serif', letterSpacing: 2,
                  display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end',
                }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#69f0ae', boxShadow: '0 0 6px #69f0ae', animation: 'pulse 2s infinite' }} />
                  SISTEMA: ATIVO
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '0 16px' }}>

            {/* ── ALERTAS ── */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: '#c9a84c', fontFamily: 'Cinzel, serif', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
                <div style={{ flex: 1, height: 1, background: '#b8860b55' }} />
                ⚠️ ALERTAS DO MINISTÉRIO
                <div style={{ flex: 1, height: 1, background: '#b8860b55' }} />
              </div>
              {alertas.map((a, i) => <Alerta key={i} alertas={[a]} />)}
            </div>

            {/* ── SELETOR ── */}
            <Seletor onSelect={handleSelect} estadoAtual={estadoSel} cidadeAtual={cidadeSel} />

            {/* ── CONTEÚDO ── */}
            {loading && (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#c9a84c' }}>
                <div style={{ fontSize: 52, marginBottom: 14, animation: 'pulse 1.5s infinite' }}>🔮</div>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: 13, letterSpacing: 3, color: '#c9a84c' }}>INVOCANDO DADOS...</p>
              </div>
            )}

            {!loading && climaAtual && cidadeSel && (
              <div className="fade">
                <CardAtual dados={climaAtual} cidade={cidadeSel} />
                <Historico historico={historico} />
                <Previsao previsao={previsao} />
              </div>
            )}

            {!loading && !cidadeSel && (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ fontSize: 60, opacity: 0.12, marginBottom: 16 }}>🏰</div>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: 12, color: '#444', letterSpacing: 2, lineHeight: 2.2 }}>
                  SELECIONE UMA CIDADE<br />PARA REVELAR O CLIMA
                </p>
              </div>
            )}
          </div>

          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 9, color: '#1e1e1e', fontFamily: 'Cinzel, serif', letterSpacing: 2 }}>
            CLIMA HOGWARTS // INMET + OPEN-METEO // NEXT.JS
          </p>
        </div>
      </main>
    </>
  )
}
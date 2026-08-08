import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import { pressureAltitudeFt } from '../../lib/aviation'

export default function PressureAltitude() {
  const [elevation, setElevation] = useState(0)
  const [qnh, setQnh] = useState(1013)

  const result = useMemo(() => {
    if (Number.isNaN(elevation) || Number.isNaN(qnh)) return null
    return pressureAltitudeFt({ fieldElevationFt: elevation, qnhHpa: qnh })
  }, [elevation, qnh])

  return (
    <div className="page">
      <PageHeader title="Altitude pression" subtitle="Field elevation + (1013.25 − QNH) × 30" />

      <div className="card">
        <NumberField label="Élévation terrain" unit="ft" value={elevation} onChange={setElevation} />
        <NumberField label="QNH" unit="hPa" value={qnh} onChange={setQnh} step={0.1} />
      </div>

      <ResultTile
        label="Altitude pression"
        value={result !== null ? `${Math.round(result).toLocaleString('fr-FR')} ft` : '—'}
        highlight
      />

      <p className="calc-note">
        1 hPa d'écart avec 1013,25 hPa correspond à environ 30 ft d'altitude pression.
      </p>
    </div>
  )
}

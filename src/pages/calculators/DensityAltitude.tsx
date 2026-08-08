import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import { densityAltitudeFt, isaTempAtAltitudeC, pressureAltitudeFt } from '../../lib/aviation'

export default function DensityAltitude() {
  const [elevation, setElevation] = useState(0)
  const [qnh, setQnh] = useState(1013)
  const [oat, setOat] = useState(15)

  const result = useMemo(() => {
    if ([elevation, qnh, oat].some((v) => Number.isNaN(v))) return null
    const pa = pressureAltitudeFt({ fieldElevationFt: elevation, qnhHpa: qnh })
    const isaTemp = isaTempAtAltitudeC(pa)
    const da = densityAltitudeFt({ pressureAltitudeFt: pa, oatC: oat })
    return { pa, isaTemp, da }
  }, [elevation, qnh, oat])

  return (
    <div className="page">
      <PageHeader title="Altitude densité" subtitle="Altitude pression corrigée par l'écart à l'ISA" />

      <div className="card">
        <NumberField label="Élévation terrain" unit="ft" value={elevation} onChange={setElevation} />
        <NumberField label="QNH" unit="hPa" value={qnh} onChange={setQnh} step={0.1} />
        <NumberField label="Température extérieure (OAT)" unit="°C" value={oat} onChange={setOat} />
      </div>

      <div className="result-row">
        <ResultTile
          label="Altitude pression"
          value={result ? `${Math.round(result.pa).toLocaleString('fr-FR')} ft` : '—'}
        />
        <ResultTile
          label="Temp. ISA à cette altitude"
          value={result ? `${result.isaTemp.toFixed(1)} °C` : '—'}
        />
      </div>

      <ResultTile
        label="Altitude densité"
        value={result ? `${Math.round(result.da).toLocaleString('fr-FR')} ft` : '—'}
        highlight
      />

      <p className="calc-note">
        DA = altitude pression + 120 × (OAT − température ISA). Une altitude densité élevée
        dégrade les performances moteur et aérodynamiques (décollage, montée).
      </p>
    </div>
  )
}

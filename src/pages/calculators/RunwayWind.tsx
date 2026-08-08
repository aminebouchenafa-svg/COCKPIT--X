import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import { runwayWindComponents } from '../../lib/aviation'

export default function RunwayWind() {
  const [runwayHeading, setRunwayHeading] = useState(90)
  const [windFrom, setWindFrom] = useState(90)
  const [windSpeed, setWindSpeed] = useState(10)

  const result = useMemo(() => {
    if ([runwayHeading, windFrom, windSpeed].some((v) => Number.isNaN(v))) return null
    return runwayWindComponents({
      runwayHeadingDeg: runwayHeading,
      windFromDeg: windFrom,
      windSpeedKt: windSpeed,
    })
  }, [runwayHeading, windFrom, windSpeed])

  return (
    <div className="page">
      <PageHeader title="Vent traversier / effectif" subtitle="Composantes de vent par rapport à une piste" />

      <div className="card">
        <NumberField label="Orientation piste (QFU)" unit="°" value={runwayHeading} onChange={setRunwayHeading} />
        <NumberField label="Vent — direction (origine)" unit="°" value={windFrom} onChange={setWindFrom} />
        <NumberField label="Vent — vitesse" unit="kt" value={windSpeed} onChange={setWindSpeed} />
      </div>

      <div className="result-row">
        <ResultTile
          label={result && result.headwindKt < 0 ? 'Vent arrière' : 'Vent de face'}
          value={result ? `${Math.round(Math.abs(result.headwindKt))} kt` : '—'}
        />
        <ResultTile
          label={
            result && result.crosswindSide !== 'nul'
              ? `Traversier (${result.crosswindSide})`
              : 'Traversier'
          }
          value={result ? `${Math.round(result.crosswindKt)} kt` : '—'}
          highlight
        />
      </div>

      <p className="calc-note">
        Direction du vent d'origine, en degrés — comme le QFU, à comparer au calage magnétique
        utilisé pour la piste.
      </p>
    </div>
  )
}

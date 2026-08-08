import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import { solveWindTriangle } from '../../lib/aviation'

export default function WindTriangle() {
  const [trueCourse, setTrueCourse] = useState(0)
  const [tas, setTas] = useState(100)
  const [windFrom, setWindFrom] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)

  const result = useMemo(() => {
    if ([trueCourse, tas, windFrom, windSpeed].some((v) => Number.isNaN(v)) || tas <= 0) {
      return null
    }
    return solveWindTriangle({
      trueCourseDeg: trueCourse,
      trueAirspeedKt: tas,
      windFromDeg: windFrom,
      windSpeedKt: windSpeed,
    })
  }, [trueCourse, tas, windFrom, windSpeed])

  return (
    <div className="page">
      <PageHeader title="Triangle du vent" subtitle="Cap vrai, correction de dérive et vitesse sol" />

      <div className="card">
        <NumberField label="Route vraie (TC)" unit="°" value={trueCourse} onChange={setTrueCourse} />
        <NumberField label="Vitesse air vraie (TAS)" unit="kt" value={tas} onChange={setTas} />
        <NumberField label="Vent — direction (origine)" unit="°" value={windFrom} onChange={setWindFrom} />
        <NumberField label="Vent — vitesse" unit="kt" value={windSpeed} onChange={setWindSpeed} />
      </div>

      <div className="result-row">
        <ResultTile
          label="Correction de dérive (WCA)"
          value={
            result
              ? `${result.windCorrectionAngleDeg >= 0 ? '+' : ''}${result.windCorrectionAngleDeg.toFixed(1)}°`
              : '—'
          }
        />
        <ResultTile
          label="Vitesse sol (GS)"
          value={result ? `${Math.round(result.groundSpeedKt)} kt` : '—'}
        />
      </div>

      <ResultTile
        label="Cap vrai à suivre"
        value={result ? `${Math.round(result.trueHeadingDeg).toString().padStart(3, '0')}°` : '—'}
        highlight
      />

      <p className="calc-note">
        La direction du vent est celle d'où il souffle (vent d'origine), en degrés vrais —
        comme dans un METAR.
      </p>
    </div>
  )
}

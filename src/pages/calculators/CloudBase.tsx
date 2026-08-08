import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import { cloudBaseAglFt } from '../../lib/aviation'

export default function CloudBase() {
  const [temp, setTemp] = useState(20)
  const [dewPoint, setDewPoint] = useState(15)

  const result = useMemo(() => {
    if (Number.isNaN(temp) || Number.isNaN(dewPoint)) return null
    return cloudBaseAglFt(temp, dewPoint)
  }, [temp, dewPoint])

  return (
    <div className="page">
      <PageHeader title="Plafond nuageux" subtitle="(Température − Point de rosée) × 400 ft" />

      <div className="card">
        <NumberField label="Température" unit="°C" value={temp} onChange={setTemp} />
        <NumberField label="Point de rosée" unit="°C" value={dewPoint} onChange={setDewPoint} />
      </div>

      <ResultTile
        label="Plafond nuageux estimé (AGL)"
        value={result !== null ? `${Math.round(result).toLocaleString('fr-FR')} ft` : '—'}
        highlight
      />

      <p className="calc-note">
        Moyen mnémotechnique : chaque écart de 1 °C entre température et point de rosée
        correspond à environ 400 ft de plafond nuageux au-dessus du sol.
      </p>
    </div>
  )
}

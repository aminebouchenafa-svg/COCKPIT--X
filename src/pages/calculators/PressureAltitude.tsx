import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import NumberField from '../../components/NumberField'
import ResultTile from '../../components/ResultTile'
import UnitToggle from '../../components/UnitToggle'
import { pressureAltitudeFt, type AltimeterUnit } from '../../lib/aviation'

export default function PressureAltitude() {
  const [elevation, setElevation] = useState(0)
  const [unit, setUnit] = useState<AltimeterUnit>('hpa')
  const [qnh, setQnh] = useState(1013)
  const [altimeterInHg, setAltimeterInHg] = useState(29.92)

  const altimeterSetting = unit === 'hpa' ? qnh : altimeterInHg

  const result = useMemo(() => {
    if (Number.isNaN(elevation) || Number.isNaN(altimeterSetting)) return null
    return pressureAltitudeFt({ fieldElevationFt: elevation, altimeterSetting, unit })
  }, [elevation, altimeterSetting, unit])

  return (
    <div className="page">
      <PageHeader title="Altitude pression" subtitle="Élévation + écart au calage standard" />

      <div className="card">
        <UnitToggle
          options={[
            { value: 'hpa', label: 'QNH (hPa)' },
            { value: 'inHg', label: 'Altimeter setting (inHg)' },
          ]}
          value={unit}
          onChange={setUnit}
        />
        <NumberField label="Élévation terrain" unit="ft" value={elevation} onChange={setElevation} />
        {unit === 'hpa' ? (
          <NumberField label="QNH" unit="hPa" value={qnh} onChange={setQnh} step={0.1} />
        ) : (
          <NumberField
            label="Altimeter setting"
            unit="inHg"
            value={altimeterInHg}
            onChange={setAltimeterInHg}
            step={0.01}
          />
        )}
      </div>

      <ResultTile
        label="Altitude pression"
        value={result !== null ? `${Math.round(result).toLocaleString('fr-FR')} ft` : '—'}
        highlight
      />

      <p className="calc-note">
        {unit === 'hpa'
          ? '1 hPa d\'écart avec 1013,25 hPa correspond à environ 30 ft d\'altitude pression.'
          : 'PA = Élévation + (29,92 − Altimeter Setting) × 1000 ft.'}
      </p>
    </div>
  )
}

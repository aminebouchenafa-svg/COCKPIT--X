interface NumberFieldProps {
  label: string
  unit?: string
  value: number
  onChange: (value: number) => void
  step?: number
}

export default function NumberField({ label, unit, value, onChange, step = 1 }: NumberFieldProps) {
  return (
    <label className="number-field">
      <span className="number-field-label">{label}</span>
      <div className="number-field-input">
        <input
          type="number"
          inputMode="decimal"
          step={step}
          value={Number.isNaN(value) ? '' : value}
          onChange={(e) => onChange(e.target.value === '' ? NaN : Number(e.target.value))}
        />
        {unit && <span className="number-field-unit">{unit}</span>}
      </div>
    </label>
  )
}

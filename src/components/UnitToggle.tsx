interface UnitToggleProps<T extends string> {
  options: { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}

export default function UnitToggle<T extends string>({ options, value, onChange }: UnitToggleProps<T>) {
  return (
    <div className="unit-toggle">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={'unit-toggle-btn' + (value === o.value ? ' active' : '')}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

interface ResultTileProps {
  label: string
  value: string
  highlight?: boolean
}

export default function ResultTile({ label, value, highlight = false }: ResultTileProps) {
  return (
    <div className={'result-tile' + (highlight ? ' highlight' : '')}>
      <span className="result-tile-label">{label}</span>
      <span className="result-tile-value">{value}</span>
    </div>
  )
}

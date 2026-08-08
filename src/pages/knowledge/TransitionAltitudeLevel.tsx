import PageHeader from '../../components/PageHeader'
import { transitionAltitudeLevel } from '../../data/knowledge'

export default function TransitionAltitudeLevel() {
  const { belowTa, layer, aboveTl, keyPoints, example } = transitionAltitudeLevel

  return (
    <div className="page">
      <PageHeader
        title="Altitude / niveau de transition"
        subtitle="Passage du calage local au calage standard"
      />

      <div className="card">
        <h3 className="card-title">{belowTa.title}</h3>
        <p className="card-text">{belowTa.detail}</p>
      </div>

      <div className="card">
        <h3 className="card-title">{layer.title}</h3>
        <p className="card-text">{layer.detail}</p>
      </div>

      <div className="card">
        <h3 className="card-title">{aboveTl.title}</h3>
        <p className="card-text">{aboveTl.detail}</p>
      </div>

      <div className="result-row">
        <div className="result-tile">
          <span className="result-tile-label">TA (exemple courant)</span>
          <span className="result-tile-value">{example.ta}</span>
        </div>
        <div className="result-tile highlight">
          <span className="result-tile-label">TL (exemple courant)</span>
          <span className="result-tile-value">{example.tl}</span>
        </div>
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">Points clés</h3>
        <ul className="trait-list">
          {keyPoints.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

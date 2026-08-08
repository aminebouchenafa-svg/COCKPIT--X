import PageHeader from '../../components/PageHeader'
import { fogPilotTakeaway, fogTypes } from '../../data/knowledge'

export default function FogTypes() {
  return (
    <div className="page">
      <PageHeader title="Types de brouillard" subtitle="Connais le type. Comprends le risque." />

      <div className="knowledge-grid">
        {fogTypes.map((fog) => (
          <div key={fog.name} className="card">
            <h3 className="card-title">{fog.name}</h3>
            <p className="card-text">{fog.description}</p>
            <ul className="trait-list">
              {fog.traits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">À retenir</h3>
        <ul className="trait-list">
          {fogPilotTakeaway.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

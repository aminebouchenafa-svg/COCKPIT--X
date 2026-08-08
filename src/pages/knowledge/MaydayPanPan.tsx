import PageHeader from '../../components/PageHeader'
import { maydayPanPan } from '../../data/knowledge'

export default function MaydayPanPan() {
  return (
    <div className="page">
      <PageHeader title="Mayday vs Pan Pan" subtitle="Appels de détresse et d'urgence" />

      <div className="knowledge-grid two-col">
        {[maydayPanPan.mayday, maydayPanPan.panPan].map((c) => (
          <div key={c.title} className="card">
            <h3 className="card-title">{c.title}</h3>
            <p className="card-text">{c.definition}</p>
            <p className="card-label">Exemples</p>
            <ul className="trait-list">
              {c.examples.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <div className="callout">
              <strong>{c.call}</strong>
              <br />
              {c.meaning}
            </div>
          </div>
        ))}
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">Principes de communication radio</h3>
        <ul className="trait-list">
          {maydayPanPan.radioPrinciples.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

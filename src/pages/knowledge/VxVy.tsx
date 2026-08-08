import PageHeader from '../../components/PageHeader'
import { vxVy } from '../../data/knowledge'

export default function VxVy() {
  return (
    <div className="page">
      <PageHeader title="Vx vs Vy" subtitle="Meilleure pente vs meilleur taux de montée" />

      <div className="knowledge-grid two-col">
        {[vxVy.vx, vxVy.vy].map((v) => (
          <div key={v.title} className="card">
            <h3 className="card-title">{v.title}</h3>
            <p className="card-text">{v.definition}</p>
            <p className="card-label">Utilisée pour</p>
            <ul className="trait-list">
              {v.usage.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <p className="card-label">Caractéristiques</p>
            <ul className="trait-list">
              {v.traits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className="tag-pill">{v.tag}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="card-title">Comparaison</h3>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Critère</th>
                <th>Vx</th>
                <th>Vy</th>
              </tr>
            </thead>
            <tbody>
              {vxVy.comparison.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.vx}</td>
                  <td>{row.vy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">Notes importantes</h3>
        <ul className="trait-list">
          {vxVy.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

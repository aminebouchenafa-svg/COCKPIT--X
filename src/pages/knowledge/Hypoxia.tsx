import PageHeader from '../../components/PageHeader'
import { hypoxiaInfo } from '../../data/knowledge'

export default function Hypoxia() {
  return (
    <div className="page">
      <PageHeader title="Hypoxie" subtitle="Reconnaître. Comprendre. Prévenir." />

      <div className="callout">L'hypoxie peut tuer sans prévenir. Connais les signes. Utilise l'oxygène.</div>

      <div className="card">
        <h3 className="card-title">Qu'est-ce que l'hypoxie ?</h3>
        <p className="card-text">{hypoxiaInfo.definition}</p>
      </div>

      <div className="card">
        <h3 className="card-title">Types d'hypoxie</h3>
        <div className="knowledge-grid">
          {hypoxiaInfo.types.map((t) => (
            <div key={t.name}>
              <p className="card-label">{t.name}</p>
              <p className="card-text">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="knowledge-grid two-col">
        <div className="card">
          <h3 className="card-title">Causes (en aviation)</h3>
          <ul className="trait-list">
            {hypoxiaInfo.causes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Symptômes</h3>
          <ul className="trait-list">
            {hypoxiaInfo.symptoms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Temps de conscience utile (TUC)</h3>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Altitude</th>
                <th>TUC (approx.)</th>
              </tr>
            </thead>
            <tbody>
              {hypoxiaInfo.tuc.map((row) => (
                <tr key={row.altitude}>
                  <td>{row.altitude}</td>
                  <td>{row.tuc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="calc-note">{hypoxiaInfo.tucNote}</p>
      </div>

      <div className="knowledge-grid two-col">
        <div className="takeaway-box">
          <h3 className="card-title">Prévention &amp; gestion</h3>
          <ul className="trait-list">
            {hypoxiaInfo.prevention.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Facteurs aggravants</h3>
          <ul className="trait-list">
            {hypoxiaInfo.worseningFactors.map((f) => (
              <li key={f.name}>
                <strong>{f.name}</strong> — {f.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

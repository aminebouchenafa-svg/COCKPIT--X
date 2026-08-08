import PageHeader from '../../components/PageHeader'
import { stallInfo } from '../../data/knowledge'

export default function Stalls() {
  return (
    <div className="page">
      <PageHeader title="Décrochages" subtitle="La condition de vol la plus mal comprise" />

      <div className="card">
        <h3 className="card-title">Qu'est-ce qu'un décrochage ?</h3>
        <ul className="trait-list">
          {stallInfo.whatIsAStall.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="callout">
          Angle d'attaque critique : <strong>{stallInfo.criticalAoa}</strong>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Comment il se produit</h3>
        <ol className="numbered-list">
          {stallInfo.howItHappens.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </div>

      <div className="knowledge-grid two-col">
        <div className="card">
          <h3 className="card-title">Facteurs augmentant la Vs</h3>
          <ul className="trait-list">
            {stallInfo.speedIncreasingFactors.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Signes avant-coureurs</h3>
          <ul className="trait-list">
            {stallInfo.warningSigns.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Types de décrochage</h3>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Contexte</th>
                <th>Cause</th>
              </tr>
            </thead>
            <tbody>
              {stallInfo.types.map((t) => (
                <tr key={t.name}>
                  <td>{t.name}</td>
                  <td>{t.context}</td>
                  <td>{t.cause}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Vs selon l'inclinaison</h3>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Inclinaison</th>
                <th>Facteur Vs</th>
              </tr>
            </thead>
            <tbody>
              {stallInfo.stallSpeedByBank.map((row) => (
                <tr key={row.bank}>
                  <td>{row.bank}</td>
                  <td>{row.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="calc-note">Plus l'inclinaison augmente, plus la vitesse de décrochage augmente.</p>
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">Récupération (moyen mnémotechnique)</h3>
        <ol className="numbered-list">
          {stallInfo.recovery.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

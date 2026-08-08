import PageHeader from '../../components/PageHeader'
import { atcLightSignals } from '../../data/knowledge'

export default function AtcLightSignals() {
  return (
    <div className="page">
      <PageHeader title="Signaux lumineux ATC" subtitle="Communication visuelle en cas de perte radio" />

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Signal</th>
              <th>Au sol</th>
              <th>En vol</th>
            </tr>
          </thead>
          <tbody>
            {atcLightSignals.map((row) => (
              <tr key={row.signal}>
                <td>{row.signal}</td>
                <td>{row.ground}</td>
                <td>{row.air}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="takeaway-box">
        <h3 className="card-title">Moyen mnémotechnique</h3>
        <p className="card-text">Pas de radio ? Cherche les signaux à la lampe (light gun).</p>
      </div>
    </div>
  )
}

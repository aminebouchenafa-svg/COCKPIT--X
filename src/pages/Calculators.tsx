import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const calculators = [
  {
    to: '/calculateurs/altitude-pression',
    title: 'Altitude pression',
    desc: 'À partir de l\'élévation terrain et du QNH',
    icon: '📊',
  },
  {
    to: '/calculateurs/altitude-densite',
    title: 'Altitude densité',
    desc: 'À partir de l\'altitude pression et de la température',
    icon: '🌡️',
  },
  {
    to: '/calculateurs/plafond-nuageux',
    title: 'Plafond nuageux',
    desc: 'À partir de la température et du point de rosée',
    icon: '☁️',
  },
  {
    to: '/calculateurs/triangle-vent',
    title: 'Triangle du vent',
    desc: 'Correction de route, cap vrai et vitesse sol',
    icon: '🧭',
  },
  {
    to: '/calculateurs/vent-piste',
    title: 'Vent traversier / effectif',
    desc: 'Composantes de vent par rapport à une piste',
    icon: '🛬',
  },
]

export default function Calculators() {
  return (
    <div className="page">
      <PageHeader title="Calculateurs" subtitle="Choisis un outil" showBack={false} />
      <ul className="list">
        {calculators.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className="list-card">
              <span className="list-card-icon" aria-hidden="true">{c.icon}</span>
              <span className="list-card-body">
                <span className="list-card-title">{c.title}</span>
                <span className="list-card-desc">{c.desc}</span>
              </span>
              <span className="list-card-chevron" aria-hidden="true">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

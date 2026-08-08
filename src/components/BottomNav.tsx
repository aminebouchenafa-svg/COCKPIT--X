import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', icon: '⌂', end: true },
  { to: '/calculateurs', label: 'Calculateurs', icon: '⊞', end: false },
  { to: '/connaissances', label: 'Connaissances', icon: '☰', end: false },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className={({ isActive }) => 'bottom-nav-item' + (isActive ? ' active' : '')}
        >
          <span className="bottom-nav-icon" aria-hidden="true">
            {l.icon}
          </span>
          <span>{l.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

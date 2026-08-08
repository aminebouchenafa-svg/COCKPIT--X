import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <span className="hero-eyebrow">Cockpit Opérational Calculation &amp; Knowledge Toolbox</span>
        <h1 className="hero-title">Cockpit X</h1>
        <p className="hero-subtitle">La boîte à outils du pilote, prête pour le vol.</p>
      </header>

      <div className="home-grid">
        <Link to="/calculateurs" className="home-tile">
          <span className="home-tile-icon" aria-hidden="true">⊞</span>
          <span className="home-tile-title">Calculateurs</span>
          <span className="home-tile-desc">
            Altitude pression, altitude densité, plafond nuageux, correction de vent.
          </span>
        </Link>
        <Link to="/connaissances" className="home-tile">
          <span className="home-tile-icon" aria-hidden="true">☰</span>
          <span className="home-tile-title">Connaissances</span>
          <span className="home-tile-desc">
            Fiches mémo : météo, performances, réglementation, aérodynamique.
          </span>
        </Link>
      </div>
    </div>
  )
}

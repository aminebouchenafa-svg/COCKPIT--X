import { Link } from 'react-router-dom'
import { knowledgeCards } from '../data/knowledge'
import PageHeader from '../components/PageHeader'

export default function Knowledge() {
  return (
    <div className="page">
      <PageHeader title="Connaissances" subtitle="Fiches mémo pilote" showBack={false} />
      <ul className="list">
        {knowledgeCards.map((c) => (
          <li key={c.slug}>
            <Link to={`/connaissances/${c.slug}`} className="list-card">
              <span className="list-card-body">
                <span className="list-card-tag">{c.category}</span>
                <span className="list-card-title">{c.title}</span>
                <span className="list-card-desc">{c.subtitle}</span>
              </span>
              <span className="list-card-chevron" aria-hidden="true">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

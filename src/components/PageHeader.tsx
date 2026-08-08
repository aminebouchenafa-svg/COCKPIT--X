import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  subtitle?: string
  showBack?: boolean
}

export default function PageHeader({ title, subtitle, showBack = true }: PageHeaderProps) {
  const navigate = useNavigate()
  return (
    <header className="page-header">
      {showBack && (
        <button className="back-button" onClick={() => navigate(-1)} aria-label="Retour">
          ‹
        </button>
      )}
      <div>
        <h1>{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}

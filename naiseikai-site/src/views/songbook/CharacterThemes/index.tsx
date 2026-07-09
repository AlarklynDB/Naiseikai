import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <span className="text-[#00e5ff]">Character Themes</span>
    </nav>
  )
}

const TITLES = [
  { label: 'Karasu to Ninja (TQCTN)', to: '/songbook/character-themes/TQCTN', accent: '#00e5ff' },
  { label: 'Sorenao ANE', to: '/songbook/character-themes/SorenaoANE', accent: '#ffaad4' },
  { label: 'Dura Dekiru Koi', to: '/songbook/character-themes/DuraDekiruKoi', accent: '#7ef5ff' },
  { label: 'Hito Jinzo 2GF', to: '/songbook/character-themes/HitoJinzo2GF', accent: '#ffaad4' },
  { label: 'GyakuTEN', to: '/songbook/character-themes/GyakuTEN', accent: '#d49fff' },
]

export default function CharacterThemes() {
  return (
    <div className="page-container">
      <Breadcrumb />

      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-3 inline-block">Music</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Character Themes</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Original compositions tied to each major character in the Naiseikai Universe.
        </p>
      </div>

      <div className="section-divider mb-10" />

      <div className="grid sm:grid-cols-2 gap-4">
        {TITLES.map((t) => (
          <Link
            key={t.label}
            to={t.to}
            className="neon-card hover:border-white/20 transition-colors"
          >
            <p className="font-serif text-base text-text mb-1">{t.label}</p>
            <p className="text-xs font-mono text-text-faint">Character Themes →</p>
          </Link>
        ))}
      </div>

      <div className="section-divider mt-12" />
      <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
        <Link to="/songbook" className="text-xs font-mono text-text-faint hover:text-text transition-colors">← Back to Songbook</Link>
      </div>
    </div>
  )
}

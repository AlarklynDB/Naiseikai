import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <span className="text-[#d49fff]">Naiseikai Universe Themes</span>
    </nav>
  )
}

export default function NaiseikaiUniverseThemes() {
  return (
    <div className="page-container">
      <Breadcrumb />

      <div className="mb-10">
        <span className="neon-sign-purple text-[10px] mb-3 inline-block">Ambient</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Naiseikai Universe Themes</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Ambient tracks capturing the mood of Neo-Japan — from neon-lit streets to quiet hidden alleyways.
        </p>
      </div>

      <div className="section-divider mb-10" />

      <div className="callout callout-purple">
        <p className="text-sm font-mono text-[#d49fff] mb-1">🌃 Coming Soon</p>
        <p className="text-sm text-text-muted leading-relaxed">
          Naiseikai Universe Themes are being composed. Check back soon for ambient soundscapes and world music.
        </p>
      </div>

      <div className="section-divider mt-12" />
      <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
        <Link to="/songbook" className="text-xs font-mono text-text-faint hover:text-text transition-colors">← Back to Songbook</Link>
      </div>
    </div>
  )
}

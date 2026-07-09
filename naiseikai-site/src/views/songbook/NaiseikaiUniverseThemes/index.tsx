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

const SONGS = [
  {
    num: '01',
    title: 'You Can\'t Spell "Hope" without "Oops"',
    sub: '「希望」には「失敗」が隠れてる',
    voice: 'Little Bunny Aru',
    style: 'Upbeat · Medium · J-Pop',
    to: '/songbook/naiseikai-universe-themes/YouCantSpellHopeWithoutOops',
  },
]

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

      <div className="space-y-4">
        {SONGS.map((song) => (
          <Link
            key={song.title}
            to={song.to}
            className="neon-card flex gap-4 items-start hover:border-white/20 transition-colors group"
          >
            <span className="font-mono text-xs text-[#d49fff]/60 pt-0.5 flex-shrink-0">{song.num}</span>
            <div className="flex-1 min-w-0">
              <p className="font-serif text-base text-text group-hover:text-[#d49fff] transition-colors mb-0.5">
                {song.title}
              </p>
              <p className="font-mono text-xs text-text-faint mb-2">{song.sub}</p>
              <div className="flex flex-wrap gap-3 text-[10px] font-mono text-text-faint">
                <span>🎤 {song.voice}</span>
                <span>🎵 {song.style}</span>
              </div>
            </div>
            <span className="text-xs text-text-faint group-hover:text-[#d49fff] transition-colors flex-shrink-0 pt-0.5">→</span>
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

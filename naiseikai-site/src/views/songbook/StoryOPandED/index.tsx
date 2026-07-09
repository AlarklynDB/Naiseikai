import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <span className="text-[#00e5ff]">Story OP/EDs</span>
    </nav>
  )
}

const TITLES = [
  { label: 'Karasu to Ninja (TQCTN)', to: '/songbook/story-op-eds/TQCTN' },
  { label: 'Sorenao ANE', to: '/songbook/story-op-eds/SorenaoANE' },
  { label: 'Dura Dekiru Koi', to: '/songbook/story-op-eds/DuraDekiruKoi' },
  { label: 'Hito Jinzo 2GF', to: '/songbook/story-op-eds/HitoJinzo2GF' },
  { label: 'GyakuTEN', to: '/songbook/story-op-eds/GyakuTEN' },
]

export default function StoryOPandED() {
  return (
    <div className="page-container">
      <Breadcrumb />

      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-3 inline-block">Music</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Story OP/EDs</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Music that plays in the background of key story moments across all titles.
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
            <p className="text-xs font-mono text-text-faint">Story OP/EDs →</p>
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

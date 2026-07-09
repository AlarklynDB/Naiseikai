import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <Link to="/songbook/story-op-eds" className="hover:text-[#00e5ff] transition-colors">Story OP/EDs</Link>
      <span>/</span>
      <span className="text-[#00e5ff]">GyakuTEN</span>
    </nav>
  )
}

export default function StoryOPandED_GyakuTEN() {
  return (
    <div className="page-container">
      <Breadcrumb />

      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-3 inline-block">Story OP/EDs</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">GyakuTEN</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Opening and ending themes for GyakuTEN.
        </p>
      </div>

      <div className="section-divider mb-10" />

      <div className="callout">
        <p className="text-sm font-mono text-[#00e5ff] mb-1">📖 Coming Soon</p>
        <p className="text-sm text-text-muted leading-relaxed">
          Story OP/EDs for GyakuTEN are being produced. Check back soon.
        </p>
      </div>

      <div className="section-divider mt-12" />
      <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
        <Link to="/songbook/story-op-eds" className="text-xs font-mono text-text-faint hover:text-text transition-colors">← Story OP/EDs</Link>
        <Link to="/songbook" className="text-xs font-mono text-text-faint hover:text-text transition-colors">↑ Songbook</Link>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const characters = [
  {
    id: 'protagonist',
    name: 'Character Name',
    title: 'The Quiet Crow',
    series: 'tqctn',
    seriesLabel: 'The Quiet Crow and The Ninja!',
    role: 'Protagonist',
    color: 'cyan',
    tags: ['Main Cast', 'Neo-Japan'],
    desc: 'Character description goes here.',
  },
  // Add more characters here...
]

const colorBorder: Record<string, string> = {
  cyan:   'border-[rgba(0,229,255,0.4)]',
  purple: 'border-[rgba(191,95,255,0.4)]',
  pink:   'border-[rgba(255,110,180,0.4)]',
  amber:  'border-[rgba(255,179,71,0.4)]',
}
const colorLabel: Record<string, string> = {
  cyan:   'text-[#7ef5ff]',
  purple: 'text-[#d49fff]',
  pink:   'text-[#ffaad4]',
  amber:  'text-[#ffd080]',
}
const colorTag: Record<string, string> = {
  cyan:   'tag tag-cyan',
  purple: 'tag tag-purple',
  pink:   'tag tag-pink',
  amber:  'tag tag-amber',
}

type Character = {
  id: string
  name: string
  title: string
  series: string
  seriesLabel: string
  role: string
  color: string
  tags: string[]
  desc: string
}

function CharacterCard({ c }: { c: Character }) {
  return (
    <div className={`border rounded-xl overflow-hidden bg-surface transition-all duration-300 hover:bg-surface-raised ${colorBorder[c.color]}`}>

      {/* IMAGE PLACEHOLDER — drop your character art here */}
      {/* TODO: replace div below with: <img src={`/characters/${c.id}.jpg`} alt={c.name} className="w-full h-full object-cover" /> */}
      <div className="w-full aspect-[3/4] bg-[rgba(255,255,255,0.03)] border-b border-white/5 flex items-center justify-center">
        <span className="text-[10px] font-mono text-text-faint opacity-50">/characters/{c.id}.jpg</span>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <p className={`font-serif text-lg font-semibold mb-0.5 ${colorLabel[c.color]}`}>{c.name}</p>
          <p className="text-xs text-text-faint font-mono">{c.title}</p>
        </div>
        <p className="text-[10px] font-mono text-text-faint mb-3 border border-white/10 rounded px-2 py-1 inline-block">
          {c.seriesLabel}
        </p>
        <p className="text-sm text-text-muted leading-relaxed mb-4">{c.desc}</p>
        <div className="flex flex-wrap gap-2">
          <span className={colorTag[c.color]}>{c.role}</span>
          {c.tags.map((tag) => (
            <span key={tag} className={colorTag[c.color]}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Characters() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Cast & Characters</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Characters</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The people who breathe life into the Naiseikai Universe. Each character carries their own
          weight, their own shadows — and their own reason to keep moving forward.
        </p>
      </div>

      {/* Character Grid */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {characters.map((c) => <CharacterCard key={c.id} c={c} />)}
        </div>
      </section>

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← Titles</Link>
        <Link to="/universe" className="btn-neon-purple text-xs">Universe Overview →</Link>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const BASE = '/world-lore-and-timeline/the-world-of-neo-japan'

const TOPICS = [
  {
    slug: 'neo-japan-techno-geography',
    icon: '🗾',
    title: 'Techno-Geography',
    desc: 'The physical and technological landscape of Neo-Japan — megacities, floating districts, underground networks, and the neon sprawl.',
    color: '#7ef5ff',
  },
  {
    slug: 'neo-japan-prefectures',
    icon: '🏙️',
    title: 'Prefectures of Neo-Japan',
    desc: 'Each prefecture reimagined in Alt-Earth 2100 — urban identity, cultural shifts, and how yokai integration reshaped them.',
    color: '#7ef5ff',
  },
  {
    slug: 'yokai-citizens-of-neo-japan',
    icon: '🦊',
    title: 'Yokai Citizens',
    desc: 'Who are the yokai of Neo-Japan? Their classifications, social standing, civil rights history, and coexistence with humans.',
    color: '#d49fff',
  },
  {
    slug: 'religion-of-ujuukyo',
    icon: '⛩️',
    title: 'Religion of Ujuukyo',
    desc: 'The dominant spiritual faith of Neo-Japan. A syncretic religion blending ancient Shinto with post-yokai revelation theology.',
    color: '#ffd080',
  },
  {
    slug: 'yhca-yokaihuman-coalition-act',
    icon: '📜',
    title: 'YHCA — Yokai-Human Coalition Act',
    desc: 'The landmark legislation that formalized yokai citizenship. Its origins, controversies, enforcement gaps, and political legacy.',
    color: '#a8ff8a',
  },
  {
    slug: 'yokai-association-recovery-center',
    icon: '⚠️',
    title: 'Yokai Association Recovery Center',
    desc: 'The YARC — a government-sanctioned facility with a deeply dark history of yokai experimentation, abuse, and systemic corruption.',
    color: '#ffaad4',
  },
  {
    slug: 'ninja-yokai-association-quarters',
    icon: '🥷',
    title: 'Ninja-Yokai Association Quarters',
    desc: 'The NYAQ — governing body of registered yokai ninja. Structure, ranks, missions, and its complicated relationship with the YARC.',
    color: '#7ef5ff',
  },
  {
    slug: 'education-in-neo-japan',
    icon: '🎓',
    title: 'Education in Neo-Japan',
    desc: 'The schooling system in 2100 Alt-Earth Japan — integrated classrooms, yokai-specific programs, and the college landscape.',
    color: '#d49fff',
  },
  {
    slug: 'megacorps-and-brands',
    icon: '🏢',
    title: 'Megacorps & Brands',
    desc: 'The corporations and brands that shape Neo-Japan\'s economy — from April Industries to biotech firms and underground black markets.',
    color: '#ffd080',
  },
]

function Divider() {
  return <div className="section-divider my-8" />
}

export default function TheWorldOfNeoJapan() {
  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore & Timeline</Link>
        <span>/</span>
        <span className="text-[#7ef5ff]">The World of Neo-Japan</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign text-[10px] mb-4 inline-block">World-Building</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">The World of Neo-Japan</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Alt-Earth, year 2100. Japan has been rebuilt, reimagined, and reinhabited — by humans and yokai alike. This is everything that shapes the world your characters live in.
        </p>
        <p className="text-text-faint font-mono text-xs mt-2">{TOPICS.length} entries · Click any card to explore</p>
      </div>

      <Divider />

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOPICS.map((topic) => (
          <Link
            key={topic.slug}
            to={`${BASE}/${topic.slug}`}
            className="block group bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-5 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
            style={{ borderColor: `${topic.color}22` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl flex-shrink-0">{topic.icon}</span>
            </div>
            <p
              className="font-serif text-base font-medium mb-2 group-hover:opacity-90 transition-opacity"
              style={{ color: topic.color }}
            >
              {topic.title}
            </p>
            <p className="text-xs text-text-faint leading-relaxed">{topic.desc}</p>
            <p
              className="text-[10px] font-mono mt-4 opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ color: topic.color }}
            >
              Read more →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 section-divider" />
      <div className="mt-6">
        <Link to="/world-lore-and-timeline" className="btn-neon-cyan text-xs">← Back to Lore & Timeline</Link>
      </div>

    </div>
  )
}

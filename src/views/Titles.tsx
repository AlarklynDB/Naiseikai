import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const publishedTitles = [
  {
    id: 'tqctn',
    title: 'The Quiet Crow and The Ninja!',
    vol: 'Vol 1',
    status: 'published',
    color: 'cyan',
    tags: ['Slice of Life', 'Action', 'Found Family'],
    desc: 'The story that kicks off the Naiseikai Universe. A quiet crow and a ninja find their lives unexpectedly intertwined in Neo-Japan\'s hidden world.',
  },
]

const upcomingTitles = [
  {
    id: 'sorenaoane',
    title: "Nevertheless, You're Still My Sister!",
    subtitle: 'SorenaoANE',
    status: 'upcoming',
    color: 'pink',
    tags: ["Girls' Love", 'Slice of Life', 'Found Family'],
    desc: 'A story about sisterhood, identity, and the complicated love between those bound by blood — or something stronger.',
  },
  {
    id: 'dullahan',
    title: 'Can This Dullahan Fall in Love?',
    vol: 'Vol 1',
    status: 'upcoming',
    color: 'purple',
    tags: ["Girls' Love", 'Romance', 'Supernatural'],
    desc: 'A Dullahan navigates the world of emotions and connection in a society still learning what love means across species.',
  },
  {
    id: 'lonely-android',
    title: 'The Lonely Android and Her 2GFs',
    vol: 'Vol 1',
    status: 'upcoming',
    color: 'cyan',
    tags: ["Girls' Love", 'Sci-Fi', 'Romance', 'Slow Burn'],
    desc: 'An android grapples with the meaning of love, loneliness, and belonging when two girls enter her life.',
  },
]

const alternateTitles = [
  {
    id: 'gyakuten',
    title: 'GyakuTen – Paradoxical Reincarnation',
    status: 'upcoming',
    color: 'amber',
    tags: ['Alternate Reality', 'Mystery', 'Action'],
    desc: 'A paradox of reincarnation tears across the universe. Set in an alternate reality that challenges everything you know about the Naiseikai world.',
  },
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

type AnyTitle = {
  id: string
  title: string
  status: string
  color: string
  tags: string[]
  desc: string
  vol?: string
  subtitle?: string
}

const titleRoutes: Record<string, string> = {
  tqctn: '/titles/KarasuToNinja-TQCTN',
  sorenaoane: '/titles/SorenaoAne-Nevertheless',
  dullahan: '/titles/DuraDekiruKoi-Dullahan',
  'lonely-android': '/titles/HitoJinzo2GF-LonelyAndroid',
  'gyakuten': '/titles/GyakuTEN-ParadoxicalReincarnation',
}

function TitleCard({ t }: { t: AnyTitle }) {
  const route = titleRoutes[t.id]
  const cardClass = `border rounded-xl overflow-hidden bg-surface transition-all duration-300 hover:bg-surface-raised ${colorBorder[t.color]} ${route ? 'cursor-pointer hover:border-opacity-80' : ''}`
  const inner = (
    <div className={cardClass}
      style={{ boxShadow: t.status === 'published' ? `0 0 20px rgba(0,229,255,0.08)` : undefined }}>

      {/* IMAGE PLACEHOLDER — drop your cover art here */}
      {/* TODO: replace div below with: <img src={`/titles/${t.id}.jpg`} alt={t.title} className="w-full h-full object-cover" /> */}
      <div className="w-full aspect-[3/1] bg-[rgba(255,255,255,0.03)] border-b border-white/5 flex items-center justify-center">
        <span className="text-[10px] font-mono text-text-faint opacity-50">/titles/{t.id}.jpg</span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className={`font-serif text-xl font-semibold mb-0.5 ${colorLabel[t.color]}`}>{t.title}</p>
            {t.subtitle && (
              <p className="text-xs text-text-faint font-mono">{t.subtitle}</p>
            )}
            {t.vol && (
              <p className="text-xs text-text-faint font-mono">{t.vol}</p>
            )}
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono flex-shrink-0 ${
            t.status === 'published'
              ? 'border-[rgba(0,255,204,0.5)] text-[#00ffcc] bg-[rgba(0,255,204,0.08)]'
              : 'border-[rgba(150,150,220,0.4)] text-text-faint bg-[rgba(100,100,180,0.08)]'
          }`}>
            {t.status === 'published' ? '● Published' : '○ Upcoming'}
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed mb-4">{t.desc}</p>
        <div className="flex flex-wrap gap-2">
          {t.tags.map((tag) => (
            <span key={tag} className={colorTag[t.color]}>{tag}</span>
          ))}
        </div>
        {route && (
          <p className="text-[10px] font-mono text-text-faint mt-4 opacity-60">Click to explore →</p>
        )}
      </div>
    </div>
  )
  return route ? <Link to={route} className="block">{inner}</Link> : inner
}

export default function Titles() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-8">
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Story Order</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Naiseikai Titles</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          All published and upcoming light novels in The Naiseikai Universe, listed in story order.
          Each title exists within the same world, connected by shared lore and overlapping lives.
        </p>
      </div>

      {/* ── All Characters Banner ─────────────────────────────────────────── */}
      <Link
        to="/titles/all-characters"
        className="block group mb-12"
      >
        <div className="border border-[rgba(212,159,255,0.35)] rounded-xl bg-[rgba(212,159,255,0.04)] hover:bg-[rgba(212,159,255,0.08)] transition-all duration-300 p-5 flex items-center justify-between gap-4"
          style={{ boxShadow: '0 0 24px rgba(212,159,255,0.06)' }}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,159,255,0.12)] border border-[rgba(212,159,255,0.25)] flex items-center justify-center flex-shrink-0">
              <span className="text-lg">👥</span>
            </div>
            <div>
              <p className="font-serif text-base text-[#d49fff] mb-0.5 group-hover:opacity-90 transition-opacity">
                View all Naiseikai Characters
              </p>
              <p className="text-xs text-text-faint font-mono">
                18 characters across 5 titles — all profiles in one place
              </p>
            </div>
          </div>
          <span className="text-[#d49fff] text-sm font-mono opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
            →
          </span>
        </div>
      </Link>

      {/* Published */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="flex items-center gap-3 mb-6">
          <span className="neon-sign text-[10px]">Published</span>
          <span className="w-2 h-2 rounded-full bg-[#00ffcc]" style={{ boxShadow: '0 0 6px rgba(0,255,204,0.8)' }} />
        </div>
        <div className="space-y-5">
          {publishedTitles.map((t) => <TitleCard key={t.id} t={t} />)}
        </div>
      </section>

      {/* Upcoming */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="flex items-center gap-3 mb-6">
          <span className="neon-sign neon-sign-purple text-[10px]">Upcoming</span>
          <span className="text-xs text-text-faint font-mono">In Development</span>
        </div>
        <div className="space-y-5">
          {upcomingTitles.map((t) => <TitleCard key={t.id} t={t} />)}
        </div>
      </section>

      {/* Alternate Realities */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Alternate Realities</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Alternate Reality Stories</h2>
        <div className="space-y-5">
          {alternateTitles.map((t) => <TitleCard key={t.id} t={t} />)}
        </div>
      </section>

      {/* Disqus — Titles page thread */}
      <TitlesDisqus />

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/lore" className="btn-neon-cyan text-xs">Lore & Timeline →</Link>
        <Link to="/universe" className="btn-neon-purple text-xs">Universe Overview →</Link>
      </div>
    </div>
  )
}

function TitlesDisqus() {
  useEffect(() => {
    const SHORTNAME = 'naiseikaititles'
    const script = document.createElement('script')
    script.src = `https://${SHORTNAME}.disqus.com/embed.js`
    script.setAttribute('data-timestamp', String(+new Date()))
    script.async = true
    ;(document.head || document.body).appendChild(script)
    return () => {
      // clean up script on unmount
      script.remove()
    }
  }, [])

  return (
    <section className="mt-12">
      <div className="section-divider mb-8" />
      <div className="mb-6">
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Community</span>
        <h2 className="font-serif text-2xl text-text">Discussion</h2>
        <p className="text-sm text-text-muted mt-1">
          Talk about the titles, share theories, ask questions — all welcome.
        </p>
      </div>
      <div id="disqus_thread" className="min-h-[200px]" />
      <noscript>
        Please enable JavaScript to view the{' '}
        <a
          href="https://disqus.com/?ref_noscript"
          className="text-[#00e5ff] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          comments powered by Disqus.
        </a>
      </noscript>
    </section>
  )
}

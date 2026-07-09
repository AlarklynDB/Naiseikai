import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'characters'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function GyakuTENBanner() {
  return (
    <div
      data-magnify
      className="w-full rounded-xl overflow-hidden border border-white/10 cursor-zoom-in relative"
    >
      <img
        src="https://i.ibb.co/Zp8vVVgQ/Gyaku-TEN-Book-Banner.png"
        alt="GyakuTen — Paradoxical Reincarnation Book Banner"
        className="w-full h-auto object-cover select-none"
        draggable={false}
      />
      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-white/30 tracking-widest uppercase pointer-events-none">
        scroll to zoom · drag to pan
      </div>
    </div>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
          <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
          <p className="text-sm text-text-muted">{value}</p>
        </div>
      ))}
    </div>
  )
}

function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <GyakuTENBanner />

      {/* Title Block */}
      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Alternate Reality · Publishing to Honeyfeed</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-1">
          GyakuTen – Paradoxical Reincarnation
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">逆説的な転生 – GyakuTen</p>
        <p className="text-text-faint text-xs font-mono">JP Title: Gyakusetsu-tekina Tensei · Shortform: GyakuTEN</p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Status', value: 'Publishing to Honeyfeed' },
          { label: 'Category', value: 'Alternate Reality · Standalone Story' },
          { label: 'Setting', value: 'Neo Japan · Set in the year 2100+' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
          { label: 'By', value: 'Alarkius Elvya Jay' },
          { label: 'Note', value: 'A Standalone Story That Derails from the Themes of the Naiseikai Universe' },
        ]} />
      </div>

      <Divider />

      {/* Hook */}
      <div>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p className="font-serif text-base text-[#d49fff]">What if reincarnation wasn't a reward… but a punishment?</p>
          <p className="font-serif text-base text-[#d49fff]">What if karma didn't teach… it simply returned?</p>
          <p>
            From the indie mind behind <em>The Naiseikai Universe</em> and <em>The Hibrythian Saga</em>, comes a soul-shattering standalone tale that defies life, death, and everything in between. <strong className="text-text">Gyakusetsu-tekina Tensei</strong> (Paradoxical Reincarnation) is a psychological absurdist anime-inspired light novel that bends genre, breaks structure, and spirals into existential horror.
          </p>
          <p className="font-mono text-xs text-text-faint">A karmic loop has begun.</p>
        </div>
      </div>

      <Divider />

      {/* Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Blurb</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-muted leading-relaxed">
            Karma is Entropy—always present, never still, never dead. It's like a fly on a wall, as if it's watching you….and time itself. That is until time rewinds and dismantles everything you thought you once knew……<em>to ashes.</em>
          </p>
        </div>
      </div>

      <Divider />

      {/* Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">GyakuTEN Premise (Meta Style)</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
          <p>
            In a karmic loop narrated by an unhinged observer, where one character survives a tragedy, another individual reincarnates endlessly, from pet to human and to fly, each more absurd than the last one. What if reincarnation isn't just mercy, but cosmic cruelty…? And what if you can't stop observing, helpless to do anything and gawk like a ghost…?
          </p>
          <p className="italic text-text-faint">(well, you're in luck, because this story is on a whole different level!)</p>
        </div>
      </div>

      <Divider />

      {/* Genre Fusion */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">🎭 Genre Fusion</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Psychological Absurdism',
            'Slice-of-Life turned Existential Horror',
            'Philosophical Karma Comedy',
            'Tragedy with Dark Humor',
            'Satire and Dry Comedy',
            'Animal POV / Fly-on-the-Wall Tactic',
          ].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Thematic Anchors */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">📓 Thematic Anchors</h2>
        <ul className="space-y-2">
          {[
            'Karma is Entropy: inevitable, chaotic, cruel.',
            'Innocence vs. Guilt in reincarnation.',
            'Memory fragments as haunting.',
            'Cycle of violence, even in "cute" forms.',
            "The soul's decay through repeated lives.",
            'Dark and Dry Comedy through a Narrator',
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#d49fff] mt-0.5">◆</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Narrative Devices */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">📖 Narrative Devices</h2>
        <ul className="space-y-2">
          {[
            'Hybrid POV: 3rd Person Limited shifting to 1st in key moments',
            'Internal memory fragments (italicized)',
            'Non-linear visual cues (mirror scenes across episodes)',
            'Color theory: warm hues early, desaturated after each death',
            'An Unreliable Narrator who either is too invested, a menace, or a wall breaker.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#7ef5ff] mt-0.5">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Final Notes */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">🧼 Final Notes</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed">
            The story never offers redemption—only repetition. Audiences must confront the terrifying concept that some cycles are meant to <strong className="text-text">spiral</strong> instead of <strong className="text-text">heal</strong>.
          </p>
          <BlockQuote>"Karma doesn't teach. It returns."</BlockQuote>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters / Cast</h2>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {['Narrator-kun (Main Character)', 'Eina Arataki (Main Character)', 'Masato Ren "Killer-kun" (Antagonist)'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-faint mb-2">Supporting Cast</p>
            <div className="flex flex-wrap gap-2">
              {['The Arataki Family', 'The Mizuki Family / Mochi the Shiba — Runa Mizuki', 'The Hayasaka Family / Shobi the Pomsky — Junto "Junta" Hayasaka'].map(c => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Characters Tab ───────────────────────────────────────────────────────────

const CHARACTER_CARDS = [
  { label: 'Narrator-kun',  color: 'text-[#d49fff]', sub: 'Unreliable Narrator · Mascot',   route: '/titles/GyakuTEN-ParadoxicalReincarnation/Narrator-Kun' },
  { label: 'Eina Arataki',  color: 'text-[#7ef5ff]', sub: 'Main Character',                  route: '/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki' },
  { label: 'Masato Ren',    color: 'text-[#ffaad4]', sub: 'Antagonist · "Killer-kun"',      route: '/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun' },
]

const SUPPORTING_CAST = ['The Arataki Family', 'Runa Mizuki', 'Junto "Junta" Hayasaka']

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTER_CARDS.map(({ label, color, sub, route }) => (
          <Link
            key={label}
            to={route}
            className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
          >
            <p className={`font-serif text-lg ${color} mb-0.5 group-hover:underline`}>{label}</p>
            <p className="text-[10px] font-mono text-text-faint mb-2">{sub}</p>
            <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
          </Link>
        ))}
        {SUPPORTING_CAST.map(n => (
          <div key={n} className="border border-white/5 rounded-xl p-5 bg-[rgba(255,255,255,0.01)] opacity-40">
            <p className="font-serif text-lg text-text-faint mb-1">{n}</p>
            <p className="text-[10px] font-mono text-text-faint">Supporting Cast</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TOP_TABS: { key: Tab; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function GyakuTen() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  return (
    <div className="page-container">

      {/* Back */}
      <div className="mb-6">
        <Link to="/titles" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to Titles
        </Link>
      </div>

      {/* Top nav */}
      <div className="flex gap-2 mb-8 border-b border-white/10 pb-4 flex-wrap">
        {TOP_TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
              activeTab === key
                ? 'border-[rgba(191,95,255,0.6)] text-[#d49fff] bg-[rgba(191,95,255,0.08)]'
                : 'border-white/10 text-text-faint hover:border-white/20 hover:text-text-muted'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Character sub-nav — All Characters only */}
      {activeTab === 'characters' && (
        <div className="flex gap-2 mb-8 flex-wrap">
          <button className="px-3 py-1 rounded-full text-[10px] font-mono border border-white/30 text-text bg-[rgba(255,255,255,0.08)]">
            All Characters
          </button>
        </div>
      )}

      {/* Content */}
      {activeTab === 'overview'    && <OverviewTab />}
      {activeTab === 'characters'  && <CharactersIndex />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
      </div>

    </div>
  )
}

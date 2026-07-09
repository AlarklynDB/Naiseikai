import { useState } from 'react'
import { Link } from 'react-router-dom'
import DisqusComments from '../../components/DisqusComments'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'characters' | 'characters-haruhi' | 'characters-ruruka' | 'characters-reina' | 'characters-aru' | 'characters-asami'

// ─── Image Placeholder ───────────────────────────────────────────────────────

function TQCTNBookBanner() {
  return (
    <div
      data-magnify
      className="w-full rounded-xl overflow-hidden border border-white/10 cursor-zoom-in relative"
    >
      <img
        src="https://i.ibb.co/gMvLZcsh/BOok-Banner.png"
        alt="The Quiet Crow &amp; The Ninja — Book Banner"
        className="w-full h-auto object-cover select-none"
        draggable={false}
      />
      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-white/30 tracking-widest uppercase pointer-events-none">
        scroll to zoom · drag to pan
      </div>
    </div>
  )
}

function ImgPlaceholder({ label, aspect = 'aspect-[3/4]' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 my-6`}>
      <span className="text-3xl opacity-20">🖼</span>
      <span className="text-[10px] font-mono text-text-faint opacity-50">{label}</span>
    </div>
  )
}

// ─── Section divider ─────────────────────────────────────────────────────────

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Identity block ───────────────────────────────────────────────────────────

function IdentityBlock({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-left"
      >
        <span className="font-mono text-sm text-text-muted">
          <span className="mr-2">{icon}</span>{title}
        </span>
        <span className="text-text-faint text-xs font-mono">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-sm text-text-muted leading-relaxed space-y-2 bg-[rgba(255,255,255,0.01)] border-t border-white/5">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── Overview Tab ────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      {/* Book Banner */}
      <TQCTNBookBanner />

      {/* Title Block */}
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Vol 1 · Book 1 · Published</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#7ef5ff] mb-1">
          The Quiet Crow &amp; The Ninja
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">静かなカラスと忍者 / Shizukana Karasu to Ninja!</p>
        <p className="text-text-faint text-xs font-mono leading-relaxed">
          Also known as: The Crow and The Ninja / Karasu no Ninja! / The Crowless Crow and The Ninja
        </p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Date Created', value: '5/31/2025' },
          { label: 'Writing Finished', value: '7/16/2025' },
          { label: 'Series Status', value: 'Ongoing' },
          { label: 'Vol / Book', value: 'VOL 1 – Book 1 – Published' },
          { label: 'Original Publish', value: 'December 10, 2025' },
          { label: 'Republished (B&N)', value: 'March 5, 2026' },
          { label: 'Story Setting', value: 'Neo Tokyo — Ruruka\'s Apartment Complex or Haruhi\'s Usagi Cafe' },
          { label: 'Type', value: 'Original English Light Novel (OELN)' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-4">
            <p className="text-[10px] font-mono text-text-faint mb-1">{label}</p>
            <p className="text-sm text-text-muted">{value}</p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Girls' Love", "Romance", "Supernatural"].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
        <p className="text-[10px] font-mono text-text-faint mb-2">Sub-Genres</p>
        <div className="flex flex-wrap gap-2">
          {["Yuri (Shoujo AI, GL)", "Slice Of Life", "Drama", "Ecchi (Erotic)"].map(g => (
            <span key={g} className="tag">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed italic">
            "When exiled ninja Koa Ruruka becomes roommates with Hanako Reina—a gentle girl wrapped in urban legends…?
            The line between protection and love blurs..."
          </p>
        </div>
      </div>

      <Divider />

      {/* Book Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Blurb</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
          <p>
            Exiled ninja Koa Ruruka finds her world upended when she meets Hanako Reina, known as the Quiet Crow.
            Reina—a soft-spoken girl wrapped in yokai legend—is nothing like the enemies Ruruka has been trained to face.
            Yet something about her gentle presence cuts through all of Ruruka's defenses.
          </p>
          <p>
            When Ruruka offers Reina a place to stay after finding her in tears at a park, what begins as a protective
            gesture slowly becomes something neither of them expected. As roommates in Neo Tokyo's hidden world, lines blur—
            between guardian and beloved, between exile and belonging, between a crow too quiet for her own legend and a
            ninja too loud for her own silence.
          </p>
        </div>
      </div>

      <Divider />

      {/* Long Summary */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Summary</h2>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
          <p className="text-[#7ef5ff] font-serif italic text-base">Where Trauma and Patience mends with Love…..</p>
          <p>
            Koa Ruruka is a high-class ninja from the prestigious Koa Clan of Hiroshima Prefecture—wealthy,
            skilled, and raised in a world where bloodlines mean everything. She is exiled from her clan for
            the unforgivable crime of being a lesbian. Stripped of her name and ties, she rebuilds her life
            alone in Neo Tokyo, working as an interior designer by day and a bartender by night, keeping everyone
            at arm's length behind a warm, outgoing exterior.
          </p>
          <p>
            One night, she finds Hanako Reina—a girl with black hair and mismatched eyes, crying quietly alone
            in a park. Something about Reina stops Ruruka cold. She takes her home.
          </p>
          <p>
            Reina, known to urban legend as the Quiet Crow, carries her own scars: abusive parents who kicked
            her out, a retail job that let her go, an eviction that left her at a shelter. She is gentle,
            soft-spoken, and deeply lonely. She finds work at Haruhi's Usagi Cafe—a bunny café run by Ruruka's
            best friend—and slowly builds a new life from the wreckage of her old one.
          </p>
          <p>
            As the two become roommates, something shifts. Reina confesses her feelings first. Ruruka, who had
            seen Reina as a daughter figure, is caught off guard—and realizes, slowly, that her feelings are
            anything but simple. On Ruruka's birthday, Reina gives her a handmade ice snowflake necklace with
            both their names engraved. Ruruka cries. And then she asks Reina out.
          </p>
          <p>
            <em>The Quiet Crow & The Ninja</em> is a slow burn Girls' Love story about two women healing together—
            one who was exiled for loving, and one who was abandoned for being too much. It is about protection
            evolving into partnership, about the way trauma teaches you to hold yourself apart, and how
            patience—and the right person—can teach you to let someone in.
          </p>
        </div>
      </div>

      <Divider />

      {/* Books 2 & 3 */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book 2 &amp; 3</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-faint italic">Information Coming Soon</p>
        </div>
      </div>

      <Divider />

      {/* Perfect For */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Perfect For Readers Who Love…</h2>
        <ul className="space-y-2">
          {[
            "Slow burn romance that actually pays off",
            "Girls' Love (GL / Yuri / Shoujo AI)",
            "Deep, layered character development",
            "Soft supernatural elements woven into everyday life",
            "Trauma healing arcs that don't rush the process",
            "Found family dynamics",
            "Sapphic tenderness and emotional intimacy",
            "Emotionally repressed characters slowly opening up",
            "Poetic, lyrical writing with a cinematic feel",
            "Worlds shaped more by feelings than by fights",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#7ef5ff] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Plot Background */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">About the Book</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            <em>The Quiet Crow &amp; The Ninja</em> is an Original English Light Novel (OELN) by Alarkius Elvya Jay,
            published as part of the Naiseikai Universe. The novel blends drama, light fantasy, and slow-burn Girls' Love,
            written in the style of Japanese light novels with a JP-style trim. Originally published on Amazon Kindle and
            in paperback format.
          </p>
        </div>
      </div>

      <Divider />

      {/* Where to Read */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Avaliable on B&N!</h2>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-sm text-[#7ef5ff] mb-2">Barnes &amp; Noble</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>Paperback — <span className="text-text">$15.75 USD</span> <span className="text-text-faint text-xs">(no interior color)</span></p>
              <p>Premium Paperback — <span className="text-text">$17.99 USD</span> <span className="text-text-faint text-xs">(colored interior)</span></p>
            </div>
            <a
              href="https://www.barnesandnoble.com/s/alarkius-elvya-jay"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan text-xs mt-4 inline-block"
            >
              Buy on Barnes &amp; Noble →
            </a>
          </div>
          <div className="neon-card">
            <p className="font-mono text-sm text-[#d49fff] mb-1">Honeyfeed</p>
            <p className="text-sm text-text-faint">Also available on Honeyfeed — free to read online.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Characters Listed */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters</h2>
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-text-faint">Main Characters</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Hanako Reina', 'Koa Ruruka', 'Haruhi Aoi', 'Little Bunny Aru'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-text-faint">Support</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="tag">Fuuka Ryoko</span>
          </div>
          <p className="text-[10px] font-mono text-text-faint">Upcoming</p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Asami Kurose</span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Hanako Reina ────────────────────────────────────────────────────────────


// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-reina',  label: 'Hanako Reina',     color: 'text-[#7ef5ff]' },
  { key: 'characters-ruruka', label: 'Koa Ruruka',        color: 'text-[#d49fff]' },
  { key: 'characters-haruhi', label: 'Haruhi Aoi',        color: 'text-[#ffaad4]' },
  { key: 'characters-aru',    label: 'Little Bunny Aru',  color: 'text-[#ffaad4]' },
  { key: 'characters-asami',  label: 'Asami Kurose',      color: 'text-[#d49fff]' },
]

const CHARACTER_ROUTES: Record<string, string> = {
  'characters-reina':  '/titles/KarasuToNinja-TQCTN/Hanako-Reina',
  'characters-ruruka': '/titles/KarasuToNinja-TQCTN/Koa-Ruruka',
  'characters-haruhi': '/titles/KarasuToNinja-TQCTN/Haruhi-Aoi',
  'characters-aru':    '/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru',
  'characters-asami':  '/titles/KarasuToNinja-TQCTN/Asami-Kurose',
}

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTER_TABS.map(({ key, label, color }) => (
          <Link
            key={key}
            to={CHARACTER_ROUTES[key]}
            className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
          >
            <p className={`font-serif text-lg ${color} mb-1 group-hover:underline`}>{label}</p>
            <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
          </Link>
        ))}
      </div>
    </div>
  )
// ─── Main TQCTN Page ──────────────────────────────────────────────────────────

const TOP_TABS: { key: 'overview' | 'characters'; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function TQCTN() {
  const [activeTab, setActiveTab] = useState<'overview' | 'characters'>('overview')

  return (
    <div className="page-container">

      {/* Back to Titles */}
      <div className="mb-6">
        <Link to="/titles" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to Titles
        </Link>
      </div>

      {/* Top nav tabs */}
      <div className="flex gap-2 mb-8 border-b border-white/10 pb-4 flex-wrap">
        {TOP_TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
              activeTab === key
                ? 'border-[rgba(0,229,255,0.6)] text-[#7ef5ff] bg-[rgba(0,229,255,0.08)]'
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
      {activeTab === 'overview'   && <OverviewTab />}
      {activeTab === 'characters' && <CharactersIndex />}

      {/* Disqus reviews */}
      <DisqusComments
        pageUrl="https://naiseikaiuniverse.com/titles/KarasuToNinja-TQCTN"
        pageIdentifier="KarasuToNinja-TQCTN"
      />

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
      </div>

    </div>
  )
}

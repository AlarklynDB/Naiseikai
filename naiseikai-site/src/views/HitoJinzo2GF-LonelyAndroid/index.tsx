import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'characters'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ImgPlaceholder({ label, aspect = 'aspect-[3/4]' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 my-6`}>
      <span className="text-3xl opacity-20">🖼</span>
      <span className="text-[10px] font-mono text-text-faint opacity-50">{label}</span>
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

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/lonely-android-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">In Development · Vol 1</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#7ef5ff] mb-1">
          The Lonely Android and her 2GFs
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">人造人間、恋は二人の彼女？！</p>
        <p className="text-text-faint text-xs font-mono leading-relaxed">
          Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['HitoJinzo2Kanojo', 'HitoJinzo2GFs'].map(n => (
            <span key={n} className="tag text-[10px]">{n}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Creation Date', value: '7/20/2025' },
          { label: 'Status', value: '— to be determined —' },
          { label: 'Format', value: 'Original English Light Novel (OELN) · Vol 1' },
          { label: 'Story Setting', value: 'Neo Kyoto' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
          { label: 'By', value: 'Alarkius Elvya Jay' },
        ]} />
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Girls' Love / Yuri",
            'Romance',
            'Polyamory / Throuple Romance',
            'Slice of Life',
            'Magical Realism',
            'Drama',
            'Slow Burn',
            'Soft Sci-Fi / Near-Future',
            'Found Family / Queer Comfort',
          ].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
        <p className="text-xs text-text-faint mt-3 leading-relaxed">
          Ayane's digital form turning real gives that light sci-fi spice.
        </p>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed">
            Android Ayane Otokura was never built to feel love. After Ayafutsu's death, she shuts down completely—until Chisaki Akari came into her life and taught her to live freely. When Ayumi enters their lives, she doesn't threaten them. She's there to complete that love. And for the first time, Ayane chooses to become real.
          </p>
        </div>
      </div>

      <Divider />

      {/* Story Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Blurb</h2>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Ayane Otokura was never built to feel love. She was coded to assist, to analyze, to obey— a synthetic companion designed by an evil corporation (who met their demise). A kind person by the name Ayafutsu took her in and repaired her. She also cared too. Ayane called her "Mother." But after her Ayafutsu's death, Ayane is left behind… a heart without a purpose, a program without a future. Until one day, she's found. Well, rescued by Chisaki Akari, a chaotic bookworm with sunflower eyes and the audacity to treat Ayane like a <em>person.</em>
          </p>
          <p>
            Told to live by her own rules, Ayane begins to reconfigure herself. Slowly. Painfully. Beautifully.
          </p>
          <p>
            Then enters <strong className="text-text">Ayumi Kazehara</strong>, a breeze in human form. Calm, quiet, warm in all the ways Ayane isn't. She makes Ayane glitch—literally and emotionally. Chisaki and Ayane are already in love.
          </p>
          <p>
            But Ayumi? She doesn't threaten what they have. She <em>completes</em> it. What begins as unexpected friendship becomes a new operating system for love—a polyamorous bond written not in code, but in gentle moments, whispered confessions, and the fearsome freedom of choice.
          </p>
          <p className="font-serif text-base text-[#7ef5ff] italic">
            Ayane was never meant to be real.<br />
            But for the first time… she chooses to be.
          </p>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters</h2>
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-text-faint">Main Characters</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Otokura, Ayane', 'Chisaki, Akari', 'Kazehara, Ayumi'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-text-faint">Main Supporting Cast</p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">&quot;Ayafutsu-Sensei&quot;</span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Characters Tab ───────────────────────────────────────────────────────────

const CHARACTER_ROUTES = [
  { label: 'Otokura, Ayane',  color: 'text-[#7ef5ff]', route: '/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura' },
  { label: 'Chisaki, Akari',  color: 'text-[#ffaad4]', route: '/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki' },
  { label: 'Kazehara, Ayumi', color: 'text-[#d49fff]', route: '/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara' },
]

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTER_ROUTES.map(({ label, color, route }) => (
          <Link
            key={label}
            to={route}
            className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
          >
            <p className={`font-serif text-lg ${color} mb-1 group-hover:underline`}>{label}</p>
            <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
          </Link>
        ))}
        <div className="border border-white/5 rounded-xl p-5 bg-[rgba(255,255,255,0.01)] opacity-40">
          <p className="font-serif text-lg text-text-faint mb-1">&quot;Ayafutsu-Sensei&quot;</p>
          <p className="text-[10px] font-mono text-text-faint">Main Supporting Cast</p>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TOP_TABS: { key: Tab; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function LonelyAndroid() {
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
          <button
            className="px-3 py-1 rounded-full text-[10px] font-mono border border-white/30 text-text bg-[rgba(255,255,255,0.08)]"
          >
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

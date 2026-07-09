import { useState } from 'react'
import { Link } from 'react-router-dom'

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

// ─── Character Cards ──────────────────────────────────────────────────────────

function CharacterCards() {
  const chars = [
    { label: 'Yukino Kōri',  color: 'text-[#7ef5ff]', route: '/titles/DuraDekiruKoi-Dullahan/Kori-Yukino' },
    { label: 'Amane Hinoka', color: 'text-[#ffaad4]', route: '/titles/DuraDekiruKoi-Dullahan/Hinoka-Amane' },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {chars.map(({ label, color, route }) => (
        <Link
          key={label}
          to={route}
          className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
        >
          <p className={`font-serif text-lg ${color} mb-1 group-hover:underline`}>{label}</p>
          <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
        </Link>
      ))}
    </div>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/dullahan-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">In Development · Vol 1 · A Three Story Series</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-1">
          Can this Dullahan Fall in Love?!
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">このデュラハン、恋ができるの？</p>
        <p className="text-text-faint text-xs font-mono">Kono Dyurahan, koi ga dekiru no? · Shortform: DuraDekiruKoi</p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Creation Date', value: 'October 22, 2025' },
          { label: 'Status', value: '— to be determined —' },
          { label: 'Format', value: 'Original English Light Novel (OELN) · Vol 1' },
          { label: 'Series', value: 'A Three Story Series' },
          { label: 'Setting', value: 'Neo Hokkaido / Sapporo' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
        ]} />
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {["Girls' Love / Yuri", 'Romance', 'Slice of Life', 'Comedy', 'Magical Realism', 'Drama', 'Slow Burn'].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-muted leading-relaxed">
            The Sun's Flame, Hinoka Amane, is a Phoenix who is slowly flickering towards extinction. Kori Yukino is a Dullahan who has wandered for four centuries without a home. When they meet at a forgotten shrine in snowy Neo-Hokkaido, love sparks where myth tries to deny it. Can the two ancient beings at the end of their stories find a new beginning without having their flame burn out…?
          </p>
        </div>
      </div>

      <Divider />

      {/* Book's Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book's Blurb</h2>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>A phoenix losing her flame.</p>
          <p>A Dullahan searching for meaning.</p>
          <p>When their paths cross at a hidden shrine in snowy Neo-Hokkaido, love sparks where myth should end.</p>
          <p>But can a firebird destined to die… fall for a girl who was never meant to stay?</p>
          <p className="font-serif text-base text-[#d49fff] italic mt-2">
            A quiet, magical GL romance about healing, frozen mornings, and choosing love no matter what fate says.
          </p>
        </div>
      </div>

      <Divider />

      {/* Story Description */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Description</h2>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
          <p>
            In the quiet snows of Neo-Hokkaido, two mythic beings cross paths at the end of the world.
          </p>
          <p>
            Hinoka Amane is the last phoenix: an immortal firebird girl who once lived in a floating sky castle. Now, she resides in a hidden shrine atop a forgotten mountain, her eternal flame flickering toward extinction. Her lineage is gone. Her council, destroyed. Her magic, unstable. She is tired, alone... and slowly burning out.
          </p>
          <p>
            Then enters Yukino Kōri: a headless Dullahan from the Edo Era, riding with her familiars through frost and time. An ancient guardian of ice and blue flame, Kōri travels the earth with quiet laughter and stories from four centuries past. She carries no weapons now, only memories and soft smiles. And her soul has been waiting for a place to call home.
          </p>
          <p>
            When Kōri stumbles upon the abandoned Phoenix Shrine, what begins as an awkward encounter turns into something neither of them expected: companionship, healing, and the terrifying possibility of love. As their worlds begin to entwine—snow and ash, silence and spark—both girls must confront what it means to live, to love, and to let someone else carry your heart.
          </p>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Main Characters</h2>
        <CharacterCards />
      </div>

    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Dullahan() {
  return (
    <div className="page-container">

      {/* Back */}
      <div className="mb-6">
        <Link to="/titles" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to Titles
        </Link>
      </div>

      {/* Content */}
      <OverviewTab />

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
      </div>

    </div>
  )
}

import { Link } from 'react-router-dom'
import { useState } from 'react'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@alarkiusej.com'

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 font-mono text-sm text-[#d49fff] hover:text-white transition-colors cursor-pointer group"
      title="Click to copy"
    >
      <span className="underline underline-offset-2 decoration-[#d49fff]/40 group-hover:decoration-white/60 transition-colors">
        {email}
      </span>
      <span className="text-xs text-[#d49fff]/60 group-hover:text-[#d49fff] transition-colors">
        {copied ? '✓ copied!' : '⎘'}
      </span>
    </button>
  )
}

export default function Songbook() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign text-[10px] mb-4 inline-block">Music</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">The Naiseikai Songbook</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Music composed and curated for The Naiseikai Universe — thematic soundscapes that echo the silence
          between words, the weight of unspoken truths, and the heartbeat of Neo-Japan.
        </p>
      </div>

      {/* Placeholder content */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="callout callout-purple">
          <div>
            <p className="text-sm font-mono text-[#d49fff] mb-1">🎵 Songbook — Currently Developing</p>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              The Naiseikai Songbook is being curated. Music, compositions, and thematic tracks for each title
              will be catalogued here. Want to collaborate and make these lyrics come alive? Contact the author!:
            </p>
            <CopyEmail />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="mb-14">
        <span className="neon-sign text-[10px] mb-4 inline-block">What's Coming</span>
        <h2 className="font-serif text-2xl mb-6 text-text">What the Songbook Will Include</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: '🎼', title: 'Character Themes', desc: 'Original compositions tied to each major character in the Naiseikai Universe.', to: '/songbook/character-themes' },
            { icon: '🌃', title: 'Naiseikai Universe Themes', desc: 'Ambient tracks capturing the mood of Neo-Japan — from neon-lit streets to quiet hidden alleyways.', to: '/songbook/naiseikai-universe-themes' },
            { icon: '📖', title: 'Story OP/EDs', desc: 'Music that plays in the background of key story moments across all titles.', to: '/songbook/story-op-eds' },
            { icon: '🎙️', title: 'Vocal Tracks', desc: 'Songs with lyrics that reflect the themes of introspection, found family, and love.', to: '/songbook/vocal-tracks' },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="neon-card flex gap-3 hover:border-white/20 transition-colors">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-serif text-base mb-1 text-text">{item.title}</p>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Author's music channels */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Author's Music</span>
        <h2 className="font-serif text-2xl mb-4 text-text">Alarkius EJ's Music</h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Alarkius Elvya Jay runs music YouTube channels alongside this universe. Visit AlarkiusEJ.com to find links
          to the music channels and more.
        </p>
        <a
          href="https://www.alarkiusej.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon-purple inline-block"
        >
          Visit AlarkiusEJ.com ↗
        </a>
      </section>

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/universe" className="btn-neon-cyan text-xs">Universe Overview →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles & Stories →</Link>
      </div>
    </div>
  )
}

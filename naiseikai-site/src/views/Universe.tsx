import { useState } from 'react'
import { Link } from 'react-router-dom'

const coreThemes = [
  { label: 'Character-Driven Development', color: 'purple', desc: 'Stoic loners learn to cry. Overpowered girls get emotionally wrecked. Found families aren\'t just fluff — they\'re lifelines. Characters are forged into truths by the world around them.' },
  { label: 'Found Family over Blood Ties', color: 'cyan', desc: 'It\'s not just being related. It\'s a circle. A bond that lasts forever.' },
  { label: 'Identity, Memory, and Self-Worth', color: 'pink', desc: 'Where are you in this grand universe of Naiseikai? What memories will you make?' },
  { label: 'Emotional Healing through Shared Pain', color: 'amber', desc: 'Even the toughest and bravest need to heal. Recognizing one\'s worth and pain is equally important for self love.' },
  { label: 'Power, Restraint, and Control', color: 'purple', desc: 'The ability to show restraint when it comes to harsh decisions.' },
  { label: 'Silence, Loneliness, and Connection', color: 'cyan', desc: 'Friends are the power of connection. They help fill the emptiness.' },
  { label: 'Softness in Harsh Worlds', color: 'pink', desc: 'Even in the harshest worlds, being soft is enough for some people.' },
  { label: 'Hidden Truths and Long-Buried Secrets', color: 'amber', desc: 'Sometimes, it takes a leap of faith to trust someone to hold your pain.' },
  { label: 'Transformation through Love', color: 'purple', desc: 'Not always perfect. It can be broken or messy. But it changes you.' },
  { label: 'Grief as a Catalyst for Growth', color: 'cyan', desc: 'Grief is important for change.' },
  { label: 'Duality of Self', color: 'pink', desc: 'What You Show vs What You Hide.' },
  { label: 'Emotional Consequence & Spiritual Fallout', color: 'amber', desc: 'How our choices leave scars, how unhealed pain shapes others, and why consequences are essential for growth.' },
]

const lnGenres = [
  { emoji: '🌸', label: 'Slice of Life + CGDCT', desc: 'Beneath the chaos of shadows and spirits, people still laugh, cry, cook breakfast, and fall in love.' },
  { emoji: '💜', label: "Girls' Love (Yuri)", desc: 'Most works contain some aspect of GL. Every story starts with a confession — or a want. Never with broken people.' },
  { emoji: '🌙', label: 'Romance', desc: 'Under the moonlight of beautiful stars, even the broken-hearted can reach for something whole.' },
  { emoji: '🍵', label: 'Emotional Slow Burn', desc: 'Sometimes it takes more than one lifetime to say how you feel. Like a warm cup of tea being ready to serve.' },
  { emoji: '🌀', label: 'Mystery / Hidden Societies', desc: 'Secret factions, forbidden histories, and cloaked figures walk the streets, leaving only questions and traces of smoke.' },
  { emoji: '⚔️', label: 'Action with Heart', desc: 'Fights are conversations in movement. Every clash tells a story. Every victory has scars.' },
  { emoji: '💔', label: 'Soft Tragedy', desc: 'Not all stories are meant to be clean. There are cracks in these spirits — fractures that never fully heal, and yet… they shine anyway.' },
  { emoji: '🥹', label: 'Soft Comedy', desc: 'Even in the heaviest emotional outburst, laughter is the best medicine when awkwardness becomes too much.' },
  { emoji: '💫', label: 'Elemental Myth & Modern Mythos', desc: 'Wind, shadow, light, fire, and vapor — elemental forces that still whisper stories in this new era.' },
  { emoji: '🏮', label: 'Melancholy / Haunting Aesthetic', desc: 'The moonlight doesn\'t just glow. It remembers. And the streets carry echoes of things left unsaid.' },
]

const worldGenres = [
  {
    emoji: '🤖',
    label: 'Science Fiction',
    color: 'cyan',
    desc: 'From Technology and Science, comes engineered entities like Androids and Cyborgs! Artificial Yokai, along with hidden technological industries and organizations like the Yokai Association Recovery Center (YARC) and the Ninja Yokai Association Quarters.',
  },
  {
    emoji: '🏙️',
    label: 'Urban Fantasy',
    color: 'purple',
    desc: 'In the alleys between skyscrapers and the echoes of train tunnels, ancient bloodlines stir. Magic and mysticism thrive under modern lights, hidden in plain sight.',
  },
  {
    emoji: '👁️',
    label: 'Supernatural',
    color: 'pink',
    desc: 'The entire world is run by Yokai and Humans alike. From Spirits, Deities, Lesser Yokai, Demons…and more. This world brings a very diverse life of different hybridized creatures to life! Humans live alongside Yokai.',
  },
  {
    emoji: '🌏',
    label: 'Alternate History / Alternate Earth',
    color: 'amber',
    desc: 'This is not the Earth you know and love. Japan rose not through conquest, but through spiritual resonance. The global tongue is Japanese. The ancient pacts between Yokai and Humans became law — the Yokai & Human Coalition Act of the 1700s. Culture, power and identity were never colonized. They were reclaimed.',
  },
]

const beings = [
  { name: 'Shinobi', desc: 'Stealthy operatives, assassins, and spies who operate within hidden societies.' },
  { name: 'Yokai', desc: 'Ancient spiritual beings ranging from lesser spirits to powerful deities — now living alongside humans under legal protection.' },
  { name: 'Androids & Cyborgs', desc: 'Engineered beings of advanced bio-technology. Some are indistinguishable from humans. Some are artificial Yokai.' },
  { name: 'Demis', desc: 'Half-human, half-supernatural beings. Complex identities in a world that\'s still learning to accept them.' },
  { name: 'Elemental Majin', desc: 'Beings aligned with wind, shadow, light, fire, vapor — elemental forces made flesh.' },
  { name: 'Shifters', desc: 'Beings capable of changing form, shifting appearance or nature at will.' },
]

const colorMap: Record<string, string> = {
  purple: 'border-[rgba(191,95,255,0.3)] bg-[rgba(191,95,255,0.07)]',
  cyan:   'border-[rgba(0,229,255,0.3)]  bg-[rgba(0,229,255,0.06)]',
  pink:   'border-[rgba(255,110,180,0.3)] bg-[rgba(255,110,180,0.07)]',
  amber:  'border-[rgba(255,179,71,0.3)]  bg-[rgba(255,179,71,0.07)]',
}
const labelColorMap: Record<string, string> = {
  purple: 'text-[#d49fff]',
  cyan:   'text-[#7ef5ff]',
  pink:   'text-[#ffaad4]',
  amber:  'text-[#ffd080]',
}
const colorBorder: Record<string, string> = {
  cyan:   'border-[rgba(0,229,255,0.4)]',
  purple: 'border-[rgba(191,95,255,0.4)]',
  pink:   'border-[rgba(255,110,180,0.4)]',
  amber:  'border-[rgba(255,179,71,0.4)]',
}

export default function Universe() {
  const [themesExpanded, setThemesExpanded] = useState(false)
  const [genresExpanded, setGenresExpanded] = useState(false)

  const visibleThemes = themesExpanded ? coreThemes : coreThemes.slice(0, 4)
  const visibleGenres = genresExpanded ? lnGenres : lnGenres.slice(0, 4)

  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">Universe Overview</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">
          内省界 · The World of Introspection
        </h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The official light novel universe by Alarkius Elvya Jay. A saga of shadowed bloodlines, hidden truths,
          and self-introspection — set in Neo-Japan 2100+.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-14">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm text-text leading-relaxed italic">
              "There are those who walk unseen among us — whispers in the wind, shadows in the crowd. In the age of concrete cities
              and neon skies, beings of ancient bloodlines still move beneath the surface. They are shinobi, assassins, spies, demis,
              androids, yokai, elemental majin, and shifters — each gifted with strange powers that bend the rules of our world."
            </p>
            <p className="text-xs text-text-faint mt-2">— The Naiseikai Universe Introduction</p>
          </div>
        </div>
      </section>

      {/* Ma — The Philosophy */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">The Core Philosophy</span>
        <h2 className="font-serif text-2xl mb-4 text-text">"Ma" 間 — The Pause Between Actions</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-text-muted leading-relaxed mb-4">
              <strong className="text-text">"Ma" (間)</strong> literally means "gap," "space," or "pause." But in storytelling, art,
              music, and cinema — it's so much deeper than just silence or emptiness.
            </p>
            <p className="text-text-muted leading-relaxed">
              It is the meaningful space between things. The pause that makes a moment breathe. The silence that lets a word echo.
              The stillness that makes movement hit harder. The invisible force that gives rhythm to life.
            </p>
          </div>
          <div>
            <div className="callout callout-cyan h-full">
              <div>
                <p className="text-[#7ef5ff] font-serif text-lg mb-2">間</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  This principle will be present throughout all future titles in The Naiseikai Universe.
                  We let our characters grow from the silence that unfolds around them.
                  We allow awkwardness to flow silently, which helps us better understand the characters and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Core Themes</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Themes of the Naiseikai Saga</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {visibleThemes.map((t) => (
            <div key={t.label} className={`border rounded-lg p-4 ${colorMap[t.color]}`}>
              <p className={`font-serif text-base mb-1 font-semibold ${labelColorMap[t.color]}`}>{t.label}</p>
              <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        {!themesExpanded && (
          <button
            onClick={() => setThemesExpanded(true)}
            className="mt-4 text-sm text-text-muted hover:text-[#bf5fff] transition-colors flex items-center gap-1"
          >
            <span>Show all themes</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </section>

      {/* LN Genres */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">Genres</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Light Novel Genres</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {visibleGenres.map((g) => (
            <div key={g.label} className="neon-card flex gap-3">
              <span className="text-2xl flex-shrink-0">{g.emoji}</span>
              <div>
                <p className="font-serif text-base mb-1 text-text">{g.label}</p>
                <p className="text-sm text-text-muted leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {!genresExpanded && (
          <button
            onClick={() => setGenresExpanded(true)}
            className="mt-4 text-sm text-text-muted hover:text-[#00e5ff] transition-colors flex items-center gap-1"
          >
            <span>Show all genres</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </section>

      {/* ── WORLDBUILDING ─────────────────────────────────────── */}

      {/* Worldbuilding Genres */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">World Genres</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Worldbuilding Genres</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {worldGenres.map((g) => (
            <div
              key={g.label}
              className={`border rounded-xl p-5 bg-surface transition-all duration-300 hover:bg-surface-raised ${colorBorder[g.color]}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{g.emoji}</span>
                <div>
                  <p className={`font-serif text-lg mb-1 font-semibold ${labelColorMap[g.color]}`}>{g.label}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setting */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">Setting</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Neo-Japan 2100+</h2>
        <div className="callout callout-cyan mb-6">
          <div>
            <p className="text-sm font-mono text-[#7ef5ff] mb-1">📍 Location</p>
            <p className="text-sm text-text-muted">
              Neo-Japan · Tokyo · Beyond · Set in the year 2100+
            </p>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed mb-4">
          Known only to a few, this hidden society thrives in secrecy, bound by myth, magic, and the weight of unspoken wars.
          Some live in silence. Some carry out missions in the dark. And some… are still searching for where they belong.
        </p>
        <p className="text-text-muted leading-relaxed">
          The Yokai & Human Coalition Act of the 1700s established the legal co-existence of Yokai and humans — a pact that has
          shaped the political landscape, culture, and hidden power structures of this alternate Earth for centuries.
        </p>
      </section>

      {/* Beings */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Races & Beings</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Who Walks This World</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beings.map((b) => (
            <div key={b.name} className="neon-card">
              <p className="font-serif text-base mb-1 text-[#d49fff]">{b.name}</p>
              <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/lore" className="btn-neon-cyan text-xs">Lore & Timeline →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles & Stories →</Link>
      </div>
    </div>
  )
}

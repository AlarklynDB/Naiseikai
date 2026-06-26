import { Link } from 'react-router-dom'

const genres = [
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
const beings = [
  { name: 'Shinobi', desc: 'Stealthy operatives, assassins, and spies who operate within hidden societies.' },
  { name: 'Yokai', desc: 'Ancient spiritual beings ranging from lesser spirits to powerful deities — now living alongside humans under legal protection.' },
  { name: 'Androids & Cyborgs', desc: 'Engineered beings of advanced bio-technology. Some are indistinguishable from humans. Some are artificial Yokai.' },
  { name: 'Demis', desc: 'Half-human, half-supernatural beings. Complex identities in a world that\'s still learning to accept them.' },
  { name: 'Elemental Majin', desc: 'Beings aligned with wind, shadow, light, fire, vapor — elemental forces made flesh.' },
  { name: 'Shifters', desc: 'Beings capable of changing form, shifting appearance or nature at will.' },
]

export default function Worldbuilding() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign text-[10px] mb-4 inline-block">World Lore</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Worldbuilding</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The Naiseikai Universe is set in the year 2100+ in an age of Neo-Japan — a futuristic world with advanced societies and magic.
          From Yokai, Androids, Bio-Tech and Identity.
        </p>
      </div>

      {/* Worldbuilding Genres */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">World Genres</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Worldbuilding Genres</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {genres.map((g) => (
            <div
              key={g.label}
              className={`border rounded-xl p-5 bg-surface transition-all duration-300 hover:bg-surface-raised ${colorBorder[g.color]}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{g.emoji}</span>
                <div>
                  <p className={`font-serif text-lg mb-1 font-semibold ${colorLabel[g.color]}`}>{g.label}</p>
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

      {/* YARC Notice (fun lore element from Notion) */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="callout callout-red">
          <div>
            <p className="text-sm font-mono text-red-400 mb-1">⚠ Y.A.R.C. NOTICE — CLASS C PIRACY VIOLATION</p>
            <p className="text-sm text-text-muted">
              Unauthorized redistribution of Naiseikai-Encoded lore and Stories has been detected.
              This universe is heavily protected. The YARC might be evil in this universe, but don't let them get you too.
            </p>
          </div>
        </div>
      </section>

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/lore" className="btn-neon-cyan text-xs">Lore & Timeline →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles & Stories →</Link>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

const coreThemesMain = [
  { label: 'Character-Driven Development', sub: 'With Emotional Tropes That Actually Hit!', color: 'purple', desc: 'This is a world where tropes don\'t die—they evolve. Stoic loners learn to cry. Overpowered girls get emotionally wrecked. Found families aren\'t just fluff—they\'re lifelines. Characters might start as types, but they\'re forged into truths by the world around them. In The Naiseikai Universe, story shapes the soul.' },
  { label: 'Found Family over Blood Ties', color: 'cyan', desc: 'It\'s just just being related to each other. It\'s a circle. A bond that lasts forever.' },
  { label: 'Identity, Memory, and Self-Worth', color: 'pink', desc: 'Where are you in this grand universe of Naiseikai? What memories will you make?' },
]

const coreThemesOther = [
  { label: 'Emotional Healing through Shared Pain', color: 'amber', desc: 'Even the toughest and brave need to heal. Emotions and recognizing one\'s worth and pain is equally important for self love.' },
  { label: 'Drama with Emotional Weight', color: 'purple', desc: 'THE ANGST IS REAL!!! LITTLE BUNNY ARU CONFIRMS IT!!! RAAAHHHHH' },
  { label: 'Power, Restraint, and Control', color: 'cyan', desc: 'The ability to show restraint when it comes to harsh decisions.' },
  { label: 'Silence, Loneliness, and Connection', color: 'pink', desc: 'Friends are the power of connection. They help fill the emptiness.' },
  { label: 'Softness in Harsh Worlds', color: 'amber', desc: 'Even in the harshest worlds, being soft is enough for some people.' },
  { label: 'Hidden Truths and Long-Buried Secrets', color: 'purple', desc: 'Sometimes, it takes a leap of faith to trust someone to hold your pain.' },
  { label: 'Transformation through Love (not just romantic)', color: 'cyan', desc: 'It\'s not always perfect. it can be broken or messy.' },
  { label: 'Grief as a Catalyst for Growth', color: 'pink', desc: 'Grief is important for change.' },
  { label: 'Duality of Self', color: 'amber', desc: 'What You Show vs What You Hide.' },
  { label: 'Emotional Consequence and Spiritual Fallout', color: 'purple', desc: 'How our choices leaves scars, how unhealed pain shapes others, and why consequences are essential for growth.' },
]

const lnGenresMain = [
  { emoji: '🌸', label: 'Slice of Life + CGDCT', desc: 'Beneath the chaos of shadows and spirits, people still laugh, cry, cook breakfast, and fall in love. This is the quiet between the storms—the heartbeat of the world you don\'t see. The nuance and the daily life of Slice of Life and Cute Girls Doing Cool Things.' },
  { emoji: '💜', label: "Girls' Love (Yuri)", desc: 'Most works will contain some aspect of GL. Even if it\'s the main genre or a side genre. Every story starts with a confession: "I like you. Go out with me." Or even just, "I want her." But it never starts with broken people trying to find love when they are at their lowest.' },
  { emoji: '🌙', label: 'Adult Romance', desc: 'Under the moonlight of beautiful stars, even the broken-hearted can reach for something whole. Romance in this world is neither perfect or predictable. It\'s fragile, messy, and honest. However, it is always there. There is always a way for two souls to reach across lifetimes, timelines, and tragedies. This isn\'t just 18+ spicy romance. It\'s adults who are trying their best to love each other.' },
  { emoji: '🍵', label: 'Emotional Slow Burn', desc: 'Sometimes it takes more than one lifetime to say how you feel. This world lets silence speak, and feelings unravel over time, like mist in the morning. It\'s never too fast or too slow. It\'s just right. Like a warm cup of tea being ready to serve.' },
]

const lnGenresOther = [
  { emoji: '🌀', label: 'Mystery / Hidden Societies', desc: 'Not everything is as it seems. Secret factions, forbidden histories, and cloaked figures walk the streets, leaving only questions and traces of smoke.' },
  { emoji: '🌙', label: 'Coming-of-Age (Spiritual)', desc: 'To grow in Naiseikai is to learn not just who you are… but what you are. Power awakens when the soul is ready. Not before.' },
  { emoji: '⚔️', label: 'Action with Heart', desc: 'Fights are not just battles. They\'re conversations in movement. Every clash tells a story. Every victory has scars.' },
  { emoji: '💔', label: 'Soft Tragedy', desc: 'Not all stories are meant to be clean. There are cracks in these spirits—fractures that never fully heal, and yet… they shine anyway.' },
  { emoji: '🥹', label: 'Soft Comedy', desc: 'Even in the heaviest emotional outburst or a very deep connection, laughter is the best medicine when awkwardness becomes too much—HEY YOU FORGOT ME!!!', aruJoke: true },
  { emoji: '💫', label: 'Elemental Myth & Modern Mythos', desc: 'Wind, shadow, light, fire, and vapor—elemental forces that still whisper stories in this new era. The world has changed, but the myths remain.' },
  { emoji: '🏮', label: 'Melancholy / Haunting Aesthetic', desc: 'The moonlight doesn\'t just glow. It remembers. And the streets carry echoes of things left unsaid.' },
]

const worldGenres = [
  {
    emoji: '🤖',
    label: 'Science Fiction',
    color: 'cyan',
    desc: 'From Technology and Science, comes engineered entities like Androids and Cyborgs! Artificial Yokai, along with hidden technological industries and organizations like the Yokai Association Recovery Center and the Ninja Yokai Association Quarters!',
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
    desc: 'The entire world of Yokai are run by Yokai and Humans alike. From Spirits, Deities, Lesser Yokai, Demons…and more, this world brings a very diverse life of different hybridized creatures to life! Humans live alongside with Yokai!',
  },
  {
    emoji: '🌏',
    label: 'Alternate History / Alternate Earth (Isekai)',
    color: 'amber',
    desc: 'This is not the Earth you know and love. In this world, Japan rose not through conquest, but through spiritual resonance. The global tongue is Japanese. The ancient pacts between Yokai and Humans weren\'t lost, it became the law known as the Yokai & Human Coalition Act in the 1700s. Here, culture, power and identity were never colonized. They were reclaimed. The history within Naiseikai Earth differs from what we know! And no, this is not Isekai via reincarnation!',
  },
]

const upcomingTitles = [
  { label: 'GyakuTEN - Paradoxical Reincarnation', to: '/titles/GyakuTEN-ParadoxicalReincarnation' },
  { label: "SorenaoANE - Nevertheless, you're still my sister!", to: '/titles/SorenaoAne-Nevertheless' },
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

  return (
    <div className="page-container">

      {/* Piracy Notice */}
      <div className="mb-8 rounded-xl border border-red-500/40 bg-[rgba(255,0,0,0.06)] p-4">
        <p className="text-sm text-red-400 leading-relaxed">
          <strong>[<Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" className="underline hover:text-red-300">Y.A.R.C</Link> NOTICE - CLASS C PIRACY VIOLATION]</strong> Unauthorized redistribution of Naiseikai-Encoded lore and Stories has been detected.
        </p>
        <p className="text-sm text-red-400 leading-relaxed mt-1 pl-4">
          You're not trying to pirate this entire site, are you….<em>user</em>…? Well, you are not getting away with it!
        </p>
        <p className="text-sm text-red-400 leading-relaxed mt-1">
          This universe is heavily protected! Reuploading or stealing content will lead to legal consequences —and yes, we can track it. The YARC might be evil in this universe, but DON'T let them GET YOU TOO!!
        </p>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">Universe Overview</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-2 text-text">
          内省界 · The World of Introspection
        </h1>
        <p className="text-text-faint text-sm font-mono mb-1">内省の世界 - Naisei no Sekai | Official Light Novel Universe &amp; Website</p>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl italic mb-4">
          This Saga is where Pain mends and Molds the Heart &lt;3
        </p>
        <p className="text-text-faint text-xs mb-1">
          © All Rights Reserved | KarasuEJ / Alarkius Elvya Jay | <a href="https://www.alarkiusej.com/" target="_blank" rel="noopener noreferrer" className="text-[#ffd080] hover:underline">https://www.alarkiusej.com/</a>
        </p>
        <p className="text-text-faint text-xs mb-1">For Fanbase or sub-fandoms, please refer back to our official subreddits or this website!</p>
        <p className="text-text-faint text-xs italic mb-4">This universe's original source of inspiration is from Mob Psycho 100</p>
        <p className="text-sm font-mono text-[#7ef5ff] mb-4">📍 Setting: Neo Japan | Tokyo | Beyond | Set in the year 2100 +</p>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          A saga of shadowed bloodlines and hidden truths, and self introspection... This is a world where it will move your hearts.
        </p>
        <p className="text-xs text-text-faint mt-4">
          All references here that relates to our book, worldbuilding, or quotes, are coded in: <span className="text-yellow-300">yellow</span>, <span className="text-[#d4a96a]">pastel orange</span>, and <span className="text-text-faint underline">gray links</span>!
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-14">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm text-text leading-relaxed italic">
              "There are those who walk unseen among us—whispers in the wind, shadows in the crowd. In the age of concrete cities
              and neon skies, beings of ancient bloodlines still move beneath the surface. They are shinobi, assassins, spies, demis,
              androids, youkai, elemental majin, and shifters—each gifted with strange powers that bend the rules of our world."
            </p>
            <p className="text-xs text-text-faint mt-2">— The Naiseikai Universe Introduction</p>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed mt-6">
          Known only to a few, this hidden society thrives in secrecy, bound by myth, magic, and the weight of unspoken wars.
          Some live in silence. Some carry out missions in the dark. And some… are still searching for where they belong.
        </p>
        <p className="text-text font-serif text-lg mt-4">
          This is not the world you know.<br />This is The World of Introspection.
        </p>
      </section>

      {/* The Universal Premise */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">The Premise</span>
        <h2 className="font-serif text-2xl mb-4 text-text">The Universal Premise</h2>
        <p className="text-text-muted leading-relaxed">
          In Neo-Japan 2100, beings of ancient bloodlines live hidden among humans—powerful, ancient, and utterly alone. To survive,
          they must remain silent and safe. To live, they must be truly known and risk everything. In the world of introspection,
          being seen is the most dangerous power of all—but what does it cost to finally belong?
        </p>
      </section>

      {/* Ma — The Philosophy */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">The Core Philosophy</span>
        <h2 className="font-serif text-2xl mb-2 text-text">Silence is Key for this Universe</h2>
        <p className="text-text-muted leading-relaxed mb-6">
          We let our characters grow from the silence that unfolds around them. We allow awkwardness to flow silently, which helps
          us better understand the characters and the world here.
        </p>
        <h3 className="font-serif text-xl mb-4 text-text">"Ma" 間 — The Pause Between Actions</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-text-muted leading-relaxed mb-4">
              What is <strong className="text-text">"Ma" (間)</strong>?<br />
              <strong className="text-text">"Ma" (間)</strong> literally means "gap," "space," or "pause."
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              But in storytelling, art, music, cinema, and even architecture… It's so much deeper than just <em>silence</em> or <em>emptiness</em>. It is about:
            </p>
            <blockquote className="border-l-2 border-[#7ef5ff] pl-4 italic text-text-muted mb-4">
              The meaningful space between things.
            </blockquote>
            <p className="text-text-muted leading-relaxed">
              It's the <strong className="text-text">pause</strong> that makes a moment breathe. The <strong className="text-text">silence</strong> that lets a word echo.
              The <strong className="text-text">stillness</strong> that makes movement hit harder. It's the invisible force that <strong className="text-text">gives rhythm</strong> to life.
              This will be present throughout all future titles in The Naiseikai Universe.
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
        <h2 className="font-serif text-2xl mb-6 text-text">Core Themes of The Naiseikai Saga:</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {coreThemesMain.map((t) => (
            <div key={t.label} className={`border rounded-lg p-4 ${colorMap[t.color]}`}>
              <p className={`font-serif text-base font-semibold ${labelColorMap[t.color]}`}>{t.label}</p>
              {t.sub && <p className="text-xs text-text-faint italic mb-1">{t.sub}</p>}
              <p className={`text-sm text-text-muted leading-relaxed ${!t.sub ? 'mt-1' : ''}`}>{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-[#ffaad4] mb-4">─────⊰ Other Themes of the Naiseikai Universe</p>
        {!themesExpanded ? (
          <button
            onClick={() => setThemesExpanded(true)}
            className="text-sm text-text-muted hover:text-[#bf5fff] transition-colors flex items-center gap-1"
          >
            <span>Toggle me for a full list!</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {coreThemesOther.map((t) => (
              <div key={t.label} className={`border rounded-lg p-4 ${colorMap[t.color]}`}>
                <p className={`font-serif text-base mb-1 font-semibold ${labelColorMap[t.color]}`}>{t.label}</p>
                <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LN Genres */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">Genres</span>
        <h2 className="font-serif text-2xl mb-2 text-text">Light Novel Genres of The NaiseiKai Universe</h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Main Genres of this universe can vary, which depends on the story or plot. Here are the Four Main Genres!
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {lnGenresMain.map((g) => (
            <div key={g.label} className="neon-card flex gap-3">
              <span className="text-2xl flex-shrink-0">{g.emoji}</span>
              <div>
                <p className="font-serif text-base mb-1 text-text">{g.label}</p>
                <p className="text-sm text-text-muted leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {!genresExpanded ? (
          <button
            onClick={() => setGenresExpanded(true)}
            className="text-sm text-text-muted hover:text-[#00e5ff] transition-colors flex items-center gap-1"
          >
            <span>Toggle me for the rest of the list!</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {lnGenresOther.map((g) => (
              <div key={g.label} className="neon-card flex gap-3">
                <span className="text-2xl flex-shrink-0">{g.emoji}</span>
                <div>
                  <p className="font-serif text-base mb-1 text-text">{g.label}</p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {g.desc}
                    {g.aruJoke && (
                      <>
                        {' '}
                        <Link to="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" className="text-[#ffaad4] hover:underline">LITTLE BUNNY ARU!!!</Link> I'M THE META-WALL BREAKING BUNNY MASCOT OF THE NAISEIKAI UNIVER—(shovers her away)—Ok ok we get it Aru!!! Stop invading this section!!! Geez.
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── WORLDBUILDING ─────────────────────────────────────── */}

      {/* Worldbuilding Genres */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">World Genres</span>
        <h2 className="font-serif text-2xl mb-2 text-text">Worldbuilding Genres for The NaiseiKai Universe</h2>
        <p className="text-text-muted leading-relaxed mb-6">
          What makes the world tick from behind our novels…? What makes it feel immersive and real..? The World of Naiseikai is set
          in the year of <span className="text-[#ffd080]">2100+</span>, in an age of Neo-Japan of a futuristic world with advanced
          societies and magic! From Yokai, Androids, Bio-Tech and Identity!
        </p>
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

      {/* Upcoming Titles */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">In Development</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Upcoming Titles</h2>
        <p className="text-text-muted leading-relaxed mb-4">Here are some upcoming titles that are in development!</p>
        <ol className="space-y-2 list-decimal list-inside">
          {upcomingTitles.map((t) => (
            <li key={t.label} className="text-text-muted">
              <Link to={t.to} className="text-[#7ef5ff] hover:underline">{t.label}</Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Author's Note */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-6">
          <p className="text-text font-serif text-lg mb-3">💡‼️ —A Word from The Author—</p>
          <p className="text-text-muted leading-relaxed mb-3">
            Lastly, as an Author, I want to say something important:
          </p>
          <p className="text-text-muted leading-relaxed mb-3">
            Respect this universe and it's works. <span className="text-red-400">I will not tolerate anything related to:</span>
          </p>
          <ul className="space-y-1 text-sm text-text-muted mb-4 ml-2">
            <li>• misogynistic or heavily sexualized NSFW works or content of my characters.
              <ul className="ml-4 mt-1">
                <li>◦ that includes really suggestive content or non-consensual content.</li>
              </ul>
            </li>
            <li>• Derogatory Fan Content that twists my characters' uniqueness into fetishization or more</li>
            <li>• or anything that disrupts the themes of my universe.</li>
            <li>• AI Generated Content is <span className="text-red-400">forbidden, full stop.</span></li>
          </ul>
          <div className="section-divider" />
          <p className="text-text-muted leading-relaxed mt-4 mb-2">
            I've crafted something I consider a treasure, and it might hit home for some people who like content like this, even if
            it deeply moves or is emotional. Thank you for understanding!
          </p>
          <p className="text-xs text-text-faint italic">(if fan service is requested for a new title, I could consider that!)</p>
        </div>
      </section>

      {/* Quick links */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/world-lore-and-timeline" className="btn-neon-cyan text-xs">Lore &amp; Timeline →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles &amp; Stories →</Link>
      </div>
    </div>
  )
}

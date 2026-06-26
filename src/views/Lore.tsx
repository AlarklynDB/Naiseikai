import { useState } from 'react'
import { Link } from 'react-router-dom'

const LINK = 'text-[#7ab8f5] hover:underline'
const BASE = '/world-lore-and-timeline/the-world-of-neo-japan'

// ─── Card Component ────────────────────────────────────────────────────────────
interface TimelineCardProps {
  icon: string
  title: string
  accentColor: string
  defaultOpen?: boolean
  children: React.ReactNode
}

function TimelineCard({ icon, title, accentColor, defaultOpen = true, children }: TimelineCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: `${accentColor}44`, background: `rgba(0,0,0,0.25)` }}
    >
      {/* Card Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
        style={{ borderBottom: open ? `1px solid ${accentColor}33` : 'none' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-serif text-lg" style={{ color: accentColor }}>{title}</span>
        </div>
        <span className="text-text-faint text-sm flex-shrink-0">{open ? '▲' : '▼'}</span>
      </button>

      {/* Card Body */}
      {open && (
        <div className="px-5 py-5 space-y-4 text-sm text-text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── Era Label ─────────────────────────────────────────────────────────────────
function EraLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <p className="font-semibold" style={{ color }}>{children}</p>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Lore() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-4 inline-block">History</span>
        <h1 className="font-serif text-3xl sm:text-4xl mb-4 text-text">🌋 Lore &amp; Timeline</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The history of an alternate Earth — where Yokai and humans have lived side by side for centuries,
          and where Japan rose not through conquest, but through spiritual resonance.
        </p>
      </div>

      {/* Setting callout */}
      <section className="mb-8">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm font-mono text-[#d49fff] mb-1">📍 World Setting</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-text">This is not the Earth you know.</strong> In this world, Japan rose through spiritual resonance.
              The global tongue is Japanese. The ancient pacts between Yokai and Humans became law. Culture, power, and identity were
              never colonized — they were reclaimed. The history within Naiseikai Earth differs from what we know.
            </p>
            <p className="text-xs text-text-faint mt-2 italic">A saga of shadowed bloodlines and hidden truths, and self introspection... This is a world where it will move your hearts.</p>
          </div>
        </div>
      </section>

      {/* ── The World of Neo-Japan Banner ─────────────────────────────────── */}
      <div className="mb-10">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="block group">
          <div
            className="border border-[rgba(126,245,255,0.35)] rounded-xl bg-[rgba(126,245,255,0.04)] hover:bg-[rgba(126,245,255,0.08)] transition-all duration-300 p-5 flex items-center justify-between gap-4"
            style={{ boxShadow: "0 0 24px rgba(126,245,255,0.06)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(126,245,255,0.12)] border border-[rgba(126,245,255,0.25)] flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🗾</span>
              </div>
              <div>
                <p className="font-serif text-base text-[#7ef5ff] mb-0.5 group-hover:opacity-90 transition-opacity">
                  The World of Neo-Japan
                </p>
                <p className="text-xs text-text-faint font-mono">
                  9 entries — geography, prefectures, yokai, religion, law, megacorps &amp; more
                </p>
              </div>
            </div>
            <span className="text-[#7ef5ff] text-sm font-mono opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
              →
            </span>
          </div>
        </Link>
      </div>

      {/* ── Lore & Timeline Section Label ─────────────────────────────────── */}
      <div className="mb-6">
        <div className="section-divider" />
        <h2 className="font-serif text-2xl text-text mt-4">🗓️ Lore &amp; Timeline</h2>
        <p className="text-sm text-text-faint font-mono mt-1">The chronological history of the Naisei-Kai Universe</p>
      </div>

      {/* ── Timeline Cards ────────────────────────────────────────────────── */}
      <div className="space-y-4">

        {/* Card 1 — Overview */}
        <TimelineCard icon="📖" title="Overview" accentColor="#d49fff">
          <p>The Lore Timeline for the Naisei-Kai Universe, its history, and also stories! Since the Worldbuilding Genres here are: Sci-Fi, Urban Fantasy, Supernatural, and Alternate History, the entire earth is now labeled in this world as <strong className="text-text">Alt-Earth.</strong></p>
          <p>A chronological compilation of key character birthdays, lore events, and mystical timestamps across the interconnected stories of:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Shizukana Karasu to Ninja (SKTN)</li>
            <li>Nevertheless, You're Still My Sister! (SorenaoAne)</li>
            <li>The Lonely Android and Her Two GFs (HitoJinzo2GF)</li>
            <li>Can This Dullahan Fall in Love? (DuraDekiruKoi)</li>
          </ul>
        </TimelineCard>

        {/* Card 2 — Primordial & Foundational */}
        <TimelineCard icon="🌑" title="Primordial & Foundational Timeline" accentColor="#ffd080">
          <div>
            <EraLabel color="#ffd080">Year 0</EraLabel>
            <p>The Naisei-Kai Universe begins.</p>
          </div>
          <div>
            <EraLabel color="#ffd080">Year 5 — 1599 · The Great Yokai Descent</EraLabel>
            <p>Appearance of Yokai and Supernatural beings begins to show in Ancient Japan. It's not just Japan though — Yokai began to show up around the world!</p>
            <ul className="list-none mt-2 space-y-2">
              <li>• <span className="text-[#d4a96a]"><Link to={`${BASE}/religion-of-ujuukyo#yokai-relinquishment`} className={LINK}>Yokai Relinquishment</Link></span> — A dangerous powerful act for Yokai Shrines. It takes away the yokai status, powers, and the ability to change into their yokai counterparts, turning them into a human. But the cost? Emotions are taken away. Only for a vessel to walk adrift across the Earth. The only place to do this is at Tenshi Shima (Angel Island) and Ryuu no Shima (Dragon Island). This act is more of a forced relinquishment for yokais who have committed atrocities. Total Relinquishment must be done through Ujuukyo Practices.</li>
              <li>• <span className="text-[#ffd080]">May 05, 050</span> AD — <strong className="text-text"><Link to={`${BASE}/religion-of-ujuukyo`} className={LINK}>The Religion of Ujuukyō forms.</Link></strong></li>
              <li>• <span className="text-[#d4a96a]">Sept 18th, 1465</span> — Japan Imperialists and Immigrants (500k of them) traverse the world to spread their Japanese influence to different cultures. On September 18th, The Japanese Language has been immortalized worldwide. Japanese is now the main native language. This is now regarded as a National Holiday.</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">1600 · Yokai-Edo Japan Era Begins</EraLabel>
            <p><span className="text-[#ffd080]">Jan 7th, 1650</span> — Kori Yukino is born from a line of Dullahans, Warriors, and Martial Artists (DuraDekiruKoi)</p>
            <p>March 25th, 1675 — <Link to={`${BASE}/education-in-neo-japan`} className={LINK}>Education in Neo Japan has been Formed.</Link></p>
          </div>
          <div>
            <EraLabel color="#d49fff">1700 · The Yokai &amp; Human Coalition Act (YHCA)</EraLabel>
            <p>A formal agreement that integrates both societies in balance.</p>
            <ul className="list-none mt-2 space-y-2">
              <li>• <span className="text-[#d4a96a]"><Link to={`${BASE}/yhca-yokaihuman-coalition-act`} className={LINK}>The Y&amp;H Coalition Act</Link></span> — The YHCA was formed exactly on 1700. Yokai cannot kill or murder humans because it is illegal, even if it's the other way around. It's about moral laws and ambiguity between parties. However, it is NOT illegal for Yokai to kill Yokai. It has been a tradition since the early yokai settlements from Year 5 - 1599.</li>
              <li>• <Link to={`${BASE}/yokai-association-recovery-center`} className={LINK}>The Yokai Association Recovery Center (YARC)</Link> — Formed in 1779 AD by the YHCA. The YARC rehabilitates repeat offenders into making them relive their past errors so that they can make up for it.</li>
              <li>• <Link to={`${BASE}/ninja-yokai-association-quarters`} className={LINK}>The Ninja Yokai Association Quarters (NYAQ)</Link> — Formed in 1795 by the YHCA. There are a lot of yokai and humans who band together to become Ninjas through wealth, fame, and mercenaries.</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">1809</EraLabel>
            <p>Birth of the Reinishi Karasu Generational Family (precursor to Hanako Reina's bloodline in SKTN).</p>
            <p className="mt-1"><span className="text-[#d4a96a]">18XX (Late 1800s):</span> Karasu Reinishi disappears and places a curse on the Reina generation, splitting it from the original Reinishi Tree.</p>
            <p className="mt-1"><span className="text-[#d4a96a]">YARC - Ties Are Cut (1875):</span> During Death Eater's reign, he had cut ALL official ties off from the YHCA including the Yokai Side of the YHCA. This organization has gone rogue.</p>
          </div>
          <div>
            <EraLabel color="#ffd080">1900</EraLabel>
            <p>Spirits and astral beings begin descending into Pre-Industrial Japan.</p>
          </div>
          <div>
            <EraLabel color="#ffd080">1945</EraLabel>
            <p>Yokai-Imperial Japan era begins. Cultural clashes and supernatural tensions rise.</p>
          </div>
        </TimelineCard>

        {/* Card 3 — NEO-Japan Era */}
        <TimelineCard icon="🌆" title="NEO-Japan Era (2000–2060)" accentColor="#7ef5ff">
          <div>
            <EraLabel color="#7ef5ff">2000</EraLabel>
            <p>NEO-Japan begins — an era of spiritual rebirth and technological renaissance.</p>
          </div>
          <div>
            <EraLabel color="#ffaad4">April 22, 2000</EraLabel>
            <p><strong className="text-text">Ayumi Kazehara</strong> manifests as a spirit due to her contract with the Goddess of Nature (HitoJinzo2GF).</p>
          </div>
          <div>
            <EraLabel color="#7ef5ff">2010</EraLabel>
            <p>Holotech and illusionary advanced technology begins development.</p>
          </div>
          <div>
            <EraLabel color="#7ef5ff">2020–2022</EraLabel>
            <p>Tsukihiko Virus Pandemic sweeps through the world, deeply affecting both humans and yokai alike.</p>
          </div>
          <div>
            <EraLabel color="#7ef5ff">2030–2050</EraLabel>
            <p>Android and Cybernetic Synthetics are perfected. They are now real, living entities capable of biological reproduction.</p>
          </div>
          <div>
            <EraLabel color="#7ef5ff">2060</EraLabel>
            <p>Rise of Cyborgs as a distinct identity class. They are not androids or cybernetic synthetics — they're a carbon based copy on titanium alloy and Vapor Spirits.</p>
          </div>
        </TimelineCard>

        {/* Card 4 — Modern-Era Birthdays */}
        <TimelineCard icon="🎂" title="Modern-Era Birthdays (2070s–2080s)" accentColor="#ffd080">
          <div>
            <EraLabel color="#ffd080">2075 Birthdays</EraLabel>
            <ul className="list-none ml-2 space-y-1">
              <li>• <strong className="text-text">May 23</strong> — Cyllvia April (SorenaoANE)</li>
              <li>• <strong className="text-text">July 16</strong> — Haruhi Aoi (KarasuToNinja)</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">2076 Birthdays</EraLabel>
            <ul className="list-none ml-2 space-y-1">
              <li>• <strong className="text-text">July 7</strong> — Hinoka Amane (DuraDekiruKoi)</li>
              <li>• <strong className="text-text">August 1</strong> — Reiko Nanako (SorenaoANE)</li>
              <li>• <strong className="text-text">September 22</strong> — Ayane Otokura, human birthday (HitoJinzo2GF)</li>
              <li>• <strong className="text-text">October 31</strong> — Chisaki Akari (HitoJinzo2GF)</li>
              <li>• <strong className="text-text">November 2</strong> — Koa Ruruka (KarasuToNinja)</li>
              <li>• <strong className="text-text">November 16</strong> — Hanako Reina (KarasuToNinja)</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">2077 Birthdays</EraLabel>
            <ul className="list-none ml-2 space-y-1">
              <li>• <strong className="text-text">May 22</strong> — Koharu Inoue (SorenaoANE)</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">2080 Birthdays</EraLabel>
            <ul className="list-none ml-2 space-y-1">
              <li>• <strong className="text-text">July 13</strong> — Shion Nozomi (SorenaoANE)</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">2081 Birthdays</EraLabel>
            <ul className="list-none ml-2 space-y-1">
              <li>• <strong className="text-text">July 17</strong> — Asahi Nanako (SorenaoANE)</li>
              <li>• <strong className="text-text">June 13</strong> — Ayane Otokura, android activation (HitoJinzo2GF)</li>
            </ul>
          </div>
          <div>
            <EraLabel color="#ffd080">2090</EraLabel>
            <p><strong className="text-text">April 22</strong> — Ayumi Kazehara takes on human form (HitoJinzo2GF)</p>
          </div>
        </TimelineCard>

        {/* Card 5 — 2100 and Beyond */}
        <TimelineCard icon="🔮" title="2100 and Beyond" accentColor="#7ef5ff">
          <p>The present-day timeline where all current stories take place across the Naisei-Kai Universe. Events from SKTN, SorenaoAne, HitoJinzo2GF, and DuraDekiruKoi all converge and unfold here.</p>
        </TimelineCard>

        {/* Card 6 — Meta-Timeline */}
        <TimelineCard icon="🌀" title="Meta-Timeline: Major Emotional & Lore Events" accentColor="#d49fff">
          <ul className="space-y-2 list-none">
            <li>• <strong className="text-text">Asahi's 20th birthday (2081)</strong> — Reiko disappears due to suicidal depression and reappears at Koharu's place. Emotional confrontation ensues.</li>
            <li>• <strong className="text-text">Hanako Reina unlocks Black Halo (EP 10, SKTN)</strong> — Triggered by fear and rage when Ruruka is endangered. Symbolic hair color change occurs.</li>
            <li>• <strong className="text-text">Phoenix Sky Castle Attack</strong> — Hinoka loses her lineage and nearly dies, her Eternal Flame begins to fade. Event predates DuraDekiruKoi.</li>
            <li>• <strong className="text-text">Ayumi loses Kazuki to shark attack (2094)</strong> — Formative grief moment; her wind powers spiral. Leads to emotional rebirth.</li>
            <li>• <strong className="text-text">Ayane self-deactivates (2087)</strong> — After Ayafutsu's death. Later found by Akari and rehabilitated.</li>
            <li>• <strong className="text-text">EP XII (SKTN)</strong> — Birth of Little Bunny Aru, summoned via Bamboo Magic by Haruhi Aoi. Technically only 3 days old.</li>
          </ul>
        </TimelineCard>

      </div>

      {/* Nav */}
      <div className="mt-12 section-divider" />
      <div className="flex flex-wrap gap-3 mt-4">
        <Link to="/worldbuilding" className="btn-neon-cyan text-xs">Worldbuilding →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles &amp; Stories →</Link>
      </div>

    </div>
  )
}

import { Link } from 'react-router-dom'

// ─── Data ─────────────────────────────────────────────────────────────────────

type Rank = {
  id: string
  label: string
  subtitle: string
  color: 'gray' | 'green' | 'cyan' | 'blue' | 'purple' | 'pink' | 'amber' | 'red' | 'white'
  description: string
  subranks: { rank: string; desc: string; note?: string }[]
  note?: string
}

const ranks: Rank[] = [
  {
    id: 'E',
    label: 'RANK E',
    subtitle: 'Human Level',
    color: 'gray',
    description:
      'The lowest tier, Rank E measures only the user\'s mental and physical limitations as a baseline human. No supernatural force amplifies them here — only raw willpower and instinct. Emotional influence at this level is unconscious and unrefined.',
    subranks: [
      { rank: 'E-1', desc: 'Murder/Cannibalism (or any form of deliberate lethal violence)' },
    ],
  },
  {
    id: 'D',
    label: 'RANK D',
    subtitle: 'Inhuman / Non Human',
    color: 'green',
    description:
      'Rank D elevates physical attributes beyond natural human limits. These individuals have developed — or were born with — a body that surpasses normal biology. Emotionally, their connection to power is instinctual rather than intentional. Capable of lifting weights limited to 200 heunix.',
    subranks: [
      { rank: 'D-1', desc: 'Car Destruction' },
      { rank: 'D-2', desc: 'Appliance Damages' },
      { rank: 'D-3', desc: 'Wrecking Ball Damage' },
      { rank: 'D-4', desc: 'Can deadlift a house or small apartment' },
    ],
  },
  {
    id: 'C',
    label: 'RANK C',
    subtitle: 'Superhuman',
    color: 'cyan',
    description:
      'Rank C marks the first emergence of conscious emotional influence on power. The individual\'s mental and physical attributes are amplified by internalized emotional states — whether they realize it or not. Rank C measures both the capacity to destroy and create at a structural level.',
    subranks: [
      { rank: 'C-1', desc: 'Destroy or partially collapse Houses, Apartment Complexes, Skyscrapers' },
      { rank: 'C-2', desc: 'Construct or reinforce Houses, Apartment Complexes, Skyscrapers' },
      { rank: 'C-3', desc: 'Devastation or Creation spanning Small to Large Towns' },
    ],
  },
  {
    id: 'B',
    label: 'RANK B',
    subtitle: 'Power Gifted',
    color: 'blue',
    description:
      'Rank B individuals have received power from an external source — a being, an artifact, or a spiritual event. Their emotional spectrum is broader than average, but borrowed. The cap of Power Gifted is limited to 5 output levels, as externally granted power has a ceiling unless the individual emotionally bonds deeply with it.',
    subranks: [
      { rank: 'B-1', desc: 'City Level Destruction or Creation' },
      { rank: 'B-2', desc: 'Nuclear-scale Destruction — Country Level' },
      { rank: 'B-3', desc: 'State-wide Destruction (measured at emotional restraint)' },
      { rank: 'B-4', desc: 'Small to Large Mountain Level — raw emotional surges required' },
      { rank: 'B-5', desc: 'Max output threshold — emotional bond with source fully realized' },
    ],
  },
  {
    id: 'A',
    label: 'RANK A',
    subtitle: 'Supernatural',
    color: 'purple',
    description:
      'Rank A beings are those whose supernatural abilities are intrinsic — born from within or gifted by a Potent Spirit. Their emotional depth directly shapes the nature of their power. The stronger their emotional identity, the more defined and powerful their abilities become. Those of the Naiseikai\'s supernatural lineage often fall here.',
    subranks: [
      { rank: 'A-1', desc: 'Country Level Destruction x10 or Creation — driven by deep emotional conviction' },
      { rank: 'A-2', desc: 'Continental Destruction / Continental Rifts — emotional instability at this tier is catastrophic' },
      { rank: 'A-3', desc: 'Island Level Destruction — emotional eruptions at Pompeii scale, amplified 20x' },
    ],
  },
  {
    id: 'S',
    label: 'RANK S',
    subtitle: 'Hypernatural',
    color: 'pink',
    description:
      'At Rank S, emotions stop being a catalyst and begin acting as a cosmic force. Magic users and aura users at this tier can manifest or erase matter at a molecular and planetary level. Their emotional state is no longer private — it radiates outward, affecting the world around them whether they intend it or not.',
    subranks: [
      { rank: 'S-1', desc: 'Ocean and Sea Destruction / Vaporization at Magma-level intensity' },
      { rank: 'S-2', desc: 'Particle Destruction — matter dissolved at the atomic and molecular level' },
      { rank: 'S-3', desc: 'Materialization of objects and anti-matter — emotional will made physical' },
      { rank: 'S-4', desc: 'Planetary Level Destruction (meteor-scale included) — contained emotional detonation. Think: destroying a Jupiter-class body' },
    ],
  },
  {
    id: 'X',
    label: 'RANK X',
    subtitle: 'Omni-Natural',
    color: 'amber',
    description:
      'Rank X beings have transcended individual emotional experience. Their feelings are no longer personal — they are universal. A moment of grief could restructure timelines. A surge of joy could seed galaxies. Divine Power, in Naiseikai, is the expression of emotions so vast they can no longer be contained by a single universe.',
    subranks: [
      { rank: 'X-1', desc: 'Hyperverse Level — emotional resonance reaches beyond dimensional boundaries' },
      { rank: 'X-2', desc: 'Stellarkinesis — Galaxy Manipulation through sustained emotional projection' },
      { rank: 'X-3', desc: 'Timeline creation and destruction. Universal and Multiversal scale — emotion as the axis of existence itself' },
    ],
  },
  {
    id: 'N',
    label: 'RANK N',
    subtitle: 'Unknown Power',
    color: 'white',
    description:
      'Rank N remains a mystery even within the Tier Scaling System itself. It is theorized that Rank N is not a power tier — but an emotional state of existence that transcends categorization entirely. No individual has consciously reached this point, as it may require a complete dissolution of the self into the Emotional Spectrum itself.',
    subranks: [
      {
        rank: 'N-1',
        desc: 'Unaffected by concepts. Nullifies any ill-intent concepts and or/destroying a concept — the self is no longer bound by emotional law, but is the law, or of an equal force to something unknown and nearly impossible.',
      },
    ],
  },
]

// ─── Color maps ───────────────────────────────────────────────────────────────

const rankBadgeColor: Record<string, string> = {
  gray:   'bg-[rgba(150,150,150,0.15)] border-[rgba(150,150,150,0.4)] text-[#aaa]',
  green:  'bg-[rgba(80,200,120,0.12)]  border-[rgba(80,200,120,0.4)]  text-[#6eefaa]',
  cyan:   'bg-[rgba(0,229,255,0.1)]    border-[rgba(0,229,255,0.4)]    text-[#7ef5ff]',
  blue:   'bg-[rgba(80,130,255,0.12)]  border-[rgba(80,130,255,0.4)]  text-[#99b4ff]',
  purple: 'bg-[rgba(191,95,255,0.12)]  border-[rgba(191,95,255,0.4)]  text-[#d49fff]',
  pink:   'bg-[rgba(255,110,180,0.12)] border-[rgba(255,110,180,0.4)] text-[#ffaad4]',
  amber:  'bg-[rgba(255,179,71,0.12)]  border-[rgba(255,179,71,0.4)]  text-[#ffd080]',
  red:    'bg-[rgba(255,70,70,0.12)]   border-[rgba(255,70,70,0.4)]   text-[#ff9999]',
  white:  'bg-[rgba(255,255,255,0.07)] border-[rgba(255,255,255,0.3)] text-[#e8e3f5]',
}

const rankBorderLeft: Record<string, string> = {
  gray:   'border-[rgba(150,150,150,0.5)]',
  green:  'border-[rgba(80,200,120,0.6)]',
  cyan:   'border-[rgba(0,229,255,0.6)]',
  blue:   'border-[rgba(80,130,255,0.6)]',
  purple: 'border-[rgba(191,95,255,0.6)]',
  pink:   'border-[rgba(255,110,180,0.6)]',
  amber:  'border-[rgba(255,179,71,0.6)]',
  red:    'border-[rgba(255,70,70,0.6)]',
  white:  'border-[rgba(255,255,255,0.4)]',
}

const rankSubColor: Record<string, string> = {
  gray:   'text-[#aaa]',
  green:  'text-[#6eefaa]',
  cyan:   'text-[#7ef5ff]',
  blue:   'text-[#99b4ff]',
  purple: 'text-[#d49fff]',
  pink:   'text-[#ffaad4]',
  amber:  'text-[#ffd080]',
  red:    'text-[#ff9999]',
  white:  'text-[#e8e3f5]',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PowerScaling() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">Universe System</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">
          🎮 Naiseikai Tier Scaling System
        </h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          A classification method for supernatural powers rooted in the <span className="text-[#d49fff]">Emotional Spectrum</span>.
        </p>
      </div>

      {/* Intro */}
      <section className="mb-12">
        <div className="callout callout-purple">
          <div>
            <h2 className="font-serif text-xl text-text mb-3">Power Scaling System</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              In the Naiseikai Universe, there is a system called the <strong className="text-text">Tier Scaling System</strong> — a classification method for supernatural powers rooted in the <strong className="text-[#d49fff]">Emotional Spectrum</strong>. Unlike conventional power systems, Naiseikai acknowledges that raw strength alone does not determine a being's true tier. Here, emotions are the catalyst, the amplifier, and sometimes the very <em>source</em> of power itself. The stronger the emotional depth, the more volatile — and extraordinary — the power output becomes.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              This system measures the power each individual carries, whether born with it, inherited, or unlocked through emotional evolution. Most individuals' power can vary, and this system places them where their power level should be. This can also apply to characters who have abnormal strengths even as a human.
            </p>
          </div>
        </div>
      </section>

      {/* Rank cards */}
      <section className="space-y-8">
        {ranks.map((rank) => (
          <div
            key={rank.id}
            className={`border-l-4 ${rankBorderLeft[rank.color]} bg-surface rounded-r-xl p-5 sm:p-6`}
          >
            {/* Rank header */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${rankBadgeColor[rank.color]}`}>
                {rank.label}
              </span>
              <span className={`font-serif text-lg font-semibold ${rankSubColor[rank.color]}`}>
                {rank.subtitle}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {rank.description}
            </p>

            {/* Sub-ranks */}
            <div className="space-y-2">
              {rank.subranks.map((sr) => (
                <div key={sr.rank} className="flex gap-3 items-start">
                  <span className={`font-mono text-xs pt-0.5 shrink-0 w-10 ${rankSubColor[rank.color]}`}>
                    {sr.rank}
                  </span>
                  <span className="text-text-faint text-xs font-mono mr-1 pt-0.5 shrink-0">&gt;&gt;</span>
                  <span className="text-sm text-text-muted leading-relaxed">
                    {sr.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <section className="mt-12">
        <div className="section-divider" />
        <div className="callout">
          <div>
            <p className="text-xs text-text-faint font-mono">
              🎮 Tier Scaling System — Naiseikai Universe Internal Lore Document
            </p>
            <p className="text-sm text-text-muted mt-1">
              Power tiers may shift depending on emotional evolution, spiritual bonds, or narrative events within a title. This system is a guide, not a ceiling.
            </p>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="section-divider mt-10" />
      <div className="flex flex-wrap gap-3">
        <Link to="/universe" className="btn-neon-purple text-xs">← Universe Overview</Link>
        <Link to="/lore" className="btn-neon-cyan text-xs">Lore & Timeline →</Link>
      </div>

    </div>
  )
}

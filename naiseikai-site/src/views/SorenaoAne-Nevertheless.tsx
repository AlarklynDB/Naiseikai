import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab =
  | 'overview'
  | 'characters'

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

function Accordion({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
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

// ─── Crisis Banner ────────────────────────────────────────────────────────────

function CrisisBanner() {
  return (
    <div className="border border-red-500/30 bg-[rgba(255,60,60,0.05)] rounded-xl p-4 text-sm text-text-muted leading-relaxed space-y-1">
      <p className="font-mono text-xs text-red-400 mb-2">⚠ Content Warning</p>
      <p>This story contains mature themes including <strong>depression, suicidal thoughts, martyrdom, self-loathing, and negligence.</strong> Rated R (18+).</p>
      <p className="mt-2 text-text-faint text-xs">
        If you or someone you know is struggling with thoughts of self-harm or suicide, please reach out to a mental health
        professional or contact your local crisis hotline. <strong>You are not alone. You are not weak for asking for help.</strong>
      </p>
    </div>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/nevertheless-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">In Development · One Shot</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#ffaad4] mb-1">
          Nevertheless, You're Still My Sister!
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">それでもなお、あなたは私の姉！</p>
        <p className="text-text-faint text-xs font-mono">Soredemo nao, Anata wa Watashi no Ane! · Shortform: SorenaoANE</p>
      </div>

      <CrisisBanner />

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Creation Date', value: 'July 8, 2025' },
          { label: 'Status', value: '— to be determined —' },
          { label: 'Format', value: 'Original English Light Novel (One Shot)' },
          { label: 'Rating', value: 'R (18+)' },
          { label: 'Setting', value: 'Neo Japan · Tokyo · Set in the year 2100+' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
        ]} />
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <p className="text-[10px] font-mono text-text-faint mb-2">Main</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['Sibling Drama', 'Mature Themes'].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
        <p className="text-[10px] font-mono text-text-faint mb-2">Side</p>
        <div className="flex flex-wrap gap-2">
          {["Girls' Love", 'Wholesome Development', 'Romance'].map(g => (
            <span key={g} className="tag">{g}</span>
          ))}
        </div>
        <p className="text-xs text-text-faint mt-3 leading-relaxed">
          The Girls' Love is not between Asahi and Reiko (they are sisters). Only <span className="text-text">Asahi × Nozomi</span> and <span className="text-text">Cyllvia × Koharu</span>.
        </p>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Reiko Nanako. She's the older sister of Asahi, and she's <em>too perfect.</em> She's juggling between jobs
            while going to therapy. But now — she's falling apart like glass and sand.
          </p>
          <p>
            Asahi is the younger sister Reiko has been trying to take care of — but she's grown up already. That sibling
            bond they once had felt like a giant bridge, now broken.
          </p>
          <p>
            Even when everything is in shambles, will there be enough time to heal through silence before that bond breaks…?
          </p>
        </div>
      </div>

      <Divider />

      {/* The Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Blurb</h2>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
          <p>
            At 24, Reiko Nanako is overwhelmed. Her parents abandoned her and her younger sister, Asahi, when they were just
            kids, leaving Reiko to shoulder the burden of everything. Now that Asahi is of coming age, Reiko still struggles to
            maintain herself. She's already an adult and she's juggling college, a waitress job, therapy, and a psychiatric ward.
            Now, she's at her breaking point — exhausted and desperate for a way out of this relentless cycle.
          </p>
          <p>
            Reiko's only solace comes from her three friends: Koharu Inoue, fiery yet fiercely loyal; Cyllvia April, the
            international student from London; and Shion Nozomi, a quiet girl with a heart of gold — who has a secret just
            waiting to come to light. But even with her friends' support, they can't ease the growing distance between Reiko
            and Asahi.
          </p>
          <p>
            As Asahi nears her 20th birthday, the gap between the sisters widens, as if a massive bridge had formed. Despite
            living under the same roof, Asahi is desperate to close the emotional chasm her sister has built. She wants her
            sister to see that she doesn't need to be a martyr — she just wants the sisterly bond they once had.
          </p>
          <p>
            Will Reiko finally let go of the weight she's carried all these years, or will the distance between them grow too
            great to fix? Journey into the story, <em>"Nevertheless, You're Still My Sister!,"</em> to discover how she will
            overcome her struggles of trying to be invincible, all while fixing her relationship with her sister, Asahi!
          </p>
        </div>
      </div>

      <Divider />

      {/* Mature Themes */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Mature Themes</h2>
        <ul className="space-y-2">
          {['Depression', 'Suicide (Suicidal Thoughts)', 'Martyrdom', 'Negligence', 'Self Loathing / Harm'].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-red-400 mt-0.5">◆</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Dedication */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Dedication</h2>
        <div className="callout callout-purple space-y-3 text-sm text-text-muted leading-relaxed">
          <p className="italic">
            To anyone who's ever felt like they had to be strong all the time. You're allowed to fall apart too. And still be loved.
            If you ever get to the point of having suicidal thoughts, please call your local hotline.
          </p>
          <p>
            This novel is not meant to be a tool for professional help, rather, to help explore the themes of Martyrdom, Suicide,
            Depression, Negligence, and Self Loathing / Harm.
          </p>
          <p className="font-mono text-xs text-text-faint">
            This story is a work of fiction. Reiko's journey is not just about pain — it's about choosing to live, even when it's hard. Thank you for reading.
          </p>
        </div>
      </div>

      <Divider />

      {/* Characters Summary */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters</h2>
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-text-faint">Main Characters</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Asahi Nanako', 'Reiko Nanako', 'Shion Nozomi', 'Koharu Inoue', 'Cyllvia April'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-text-faint">Supporting / Cameo</p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Haruhi Aoi</span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTERS = [
  { label: 'Asahi Nanako',  color: 'text-[#d49fff]', path: '/titles/SorenaoAne-Nevertheless/Asahi-Nanako' },
  { label: 'Reiko Nanako',  color: 'text-[#7ef5ff]', path: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi' },
  { label: 'Shion Nozomi',  color: 'text-[#ffaad4]', path: '/titles/SorenaoAne-Nevertheless/Shion-Nozomi' },
  { label: 'Koharu Inoue',  color: 'text-[#ffaad4]', path: '/titles/SorenaoAne-Nevertheless/Koharu-Inoue' },
  { label: 'Cyllvia April', color: 'text-[#7ef5ff]', path: '/titles/SorenaoAne-Nevertheless/Cyllvia-April' },
]

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTERS.map(({ label, color, path }) => (
          <Link
            key={label}
            to={path}
            className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
          >
            <p className={`font-serif text-lg ${color} mb-1 group-hover:underline`}>{label}</p>
            <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
          </Link>
        ))}
        {/* Cameo */}
        <div className="border border-white/5 rounded-xl p-5 bg-[rgba(255,255,255,0.01)] opacity-50">
          <p className="font-serif text-lg text-text-faint mb-1">Haruhi Aoi</p>
          <p className="text-[10px] font-mono text-text-faint">Supporting / Cameo</p>
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

export default function Nevertheless() {
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
                ? 'border-[rgba(255,170,212,0.6)] text-[#ffaad4] bg-[rgba(255,170,212,0.08)]'
                : 'border-white/10 text-text-faint hover:border-white/20 hover:text-text-muted'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Character sub-nav */}
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
      {activeTab === 'overview'            && <OverviewTab />}
      {activeTab === 'characters'          && <CharactersIndex />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
        
      </div>

    </div>
  )
}

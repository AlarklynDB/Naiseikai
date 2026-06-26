import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="hover:text-[#00e5ff] transition-colors">GyakuTen — Paradoxical Reincarnation</Link>
      <span>/</span>
      <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#d49fff]">Narrator-kun</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NarratorKunPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#d49fff] mb-1">📜 Narrator-kun</h2>
          <p className="text-text-faint font-mono text-sm italic">aka Gyaku-kun · Glyph-kun · "That bastard in the margins"</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Project', value: 'GyakuTEN | Paradoxical Reincarnation' },
              { label: 'Role', value: 'Unreliable Narrator / Mascot / Glyph Entity / Emotional Menace' },
              { label: 'Name(s)', value: 'Narrator-kun, Gyaku-kun, Glyph-kun, "That bastard in the margins"' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Kanji Origin */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Kanji Origin</h3>
          <div className="callout space-y-2 text-sm text-text-muted leading-relaxed">
            <p className="font-serif text-base text-[#d49fff]">逆 (gyaku) – "Reverse", "Against", "Inversion"</p>
            <p>Symbolic of karmic resistance, narrative contradiction, and cyclical rebellion. Design integrates stylized form of 逆 with added limbs, eye, and expression.</p>
          </div>
        </div>

        <Divider />

        {/* Concept Summary */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Concept Summary</h3>
          <div className="callout space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Narrator-kun (aka Gyaku-kun) is the living embodiment of repetition, reversal, and reluctant commentary. Once a glyph in the divine script of karma, he broke free from the margins of the page and now mocks the reincarnation cycle while still guiding it. He is not a friend. Not a guide. Not a moral compass. But he is always there.</p>
            <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic mt-3">
              "You again? Yeah, I remember this loop. You fail here."
            </blockquote>
          </div>
        </div>

        <Divider />

        {/* Visual Description */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Visual Description</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Form', value: 'The character 逆 brought to life, limbs emerging from strokes' },
              { label: 'Primary Color', value: 'Deep karmic purple-black, ink-like, gradient fades' },
              { label: 'Aura', value: 'Subtle violet glow, glitchy shimmer, shadow smudges' },
              { label: 'Eye', value: 'One lidded, sarcastic eye; often tired, annoyed, or smug' },
              { label: 'Faceplate', value: 'Orange/yellow bar over the eye – like a narrative visor' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="space-y-3">
            <div className="neon-card">
              <p className="font-mono text-xs text-[#d49fff] mb-3">Traits:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-text-muted">
                <li><strong>Voice:</strong> Sarcastic, dry, slightly bored narrator energy</li>
                <li><strong>Tone:</strong> Passive-aggressive, jaded, emotionally exhausted</li>
                <li><strong>Alignment:</strong> Neutral-Cursed</li>
                <li><strong>Catchphrases:</strong> "Loop detected." / "Try harder this time." / "F**k you, but not really."</li>
                <li><strong>Relationship to Reader:</strong> Intimately rude. Knows you better than you do.</li>
              </ul>
            </div>
            <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-muted">
              "He's the narrator that remembers every failure, but still narrates your story… begrudgingly."
            </blockquote>
          </div>
        </div>

        <Divider />

        {/* Functions in the Story */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Functions in the Story</h3>
          <div className="callout space-y-2 text-sm text-text-muted leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>Narrative glue between reincarnation episodes</li>
              <li>Adds meta-commentary, fourth wall pokes, and emotional texture</li>
              <li>Switches between omniscient, first-person, and sarcastic voiceover</li>
              <li>Sometimes scribbles into the story itself</li>
              <li>Refuses redemption arcs but still allows them to play out</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Symbolism */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Symbolism</h3>
          <div className="neon-card space-y-2 text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-2">
              <li>Reversal of fate</li>
              <li>Resistance to narrative finality</li>
              <li>Karmic backlog personified</li>
              <li>Emotional whiplash mascot</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Potential Merch Quotes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Potential Merch Quotes</h3>
          <div className="space-y-3">
            {[
              '"You\'re back already?"',
              '"Don\'t worry, I hated this scene too."',
              '"Spoiler alert: you mess it up again."',
              '"F**k you, but I\'m still here."',
            ].map((quote) => (
              <blockquote key={quote} className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-muted">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>

        <Divider />

        {/* Extra Notes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Extra Notes</h3>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div className="neon-card">
              <ul className="list-disc list-inside space-y-2">
                <li>Often appears in story transitions, title cards, or memory fragments</li>
                <li>Sometimes leaks out of the narration box or glitches the scene</li>
                <li>May be worshipped by some karmic cults within the world of GyakuTEN</li>
                <li>Has never once spoken kindly, but still gives closure</li>
              </ul>
            </div>
            <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic mt-3">
              "Narrator-kun is not just the voice. He is the loop."
            </blockquote>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki" className="btn-neon-cyan text-xs">← Eina Arataki</Link>
        </div>
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun" className="btn-neon-cyan text-xs">Masato Ren →</Link>
        </div>
      </div>
    </div>
  )
}

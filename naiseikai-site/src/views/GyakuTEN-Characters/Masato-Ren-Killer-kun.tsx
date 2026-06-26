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
      <span className="text-[#ffaad4]">Masato Ren "Killer-kun"</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MasatoRenKillerkunPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign-pink text-[10px] mb-3 inline-block">Antagonist</span>
          <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Masato Ren "Killer-kun"</h2>
          <p className="text-text-faint font-mono text-sm italic">🔪</p>
        </div>

        <Divider />

        {/* Overview */}
        <div>
          <h3 className="font-serif text-lg text-text mb-3">Overview</h3>
          <div className="text-sm text-text-muted leading-relaxed space-y-2">
            <p>Masato Ren, known as <strong>"Killer-kun,"</strong> is the primary antagonist of <em>GyakuTEN – Paradoxical Reincarnation</em>. A serial killer with contradictory traits, he operates with a blend of hygiene obsession, moral ambiguity, and chilling efficiency that makes him both terrifying and disturbingly charismatic.</p>
          </div>
        </div>

        <Divider />

        {/* Physical Description */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Physical Description</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Height', value: '6\'2"' },
              { label: 'Build', value: 'Lean, toned physique with defined eight-pack abs and broad shoulders (described as "fireman physique")' },
              { label: 'Hair', value: 'Brown' },
              { label: 'Eyes', value: 'Red (giving him distinct "final boss" energy)' },
              { label: 'Notable Features', value: 'Muscular legs, athletic build that allows him to run extensive laps without tiring' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Personality & Traits */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Killer-kun embodies a paradox that even the narrator struggles to comprehend:</p>
            <div className="neon-card">
              <p className="font-mono text-xs text-[#ffaad4] mb-3">The Contradictions:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Hygienic Serial Killer:</strong> Meticulously cleans his knife and shoes after each murder.</li>
                <li><strong>Morally Grey:</strong> Targets criminals, pedophiles, bullies, and yakuza bosses, yet also kills innocent victims(?)</li>
                <li><strong>Polite &amp; Human:</strong> Tips well at cafés, thanks waitresses, exercises regularly, enjoys amusement parks</li>
                <li><strong>Deranged Yet Calculated:</strong> Questions like "How do I kill oxygen?" while jogging, plants explosives strategically.</li>
              </ul>
            </div>
            <div className="neon-card">
              <p className="font-mono text-xs text-[#ffaad4] mb-3">Behavioral Patterns:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintains physical fitness through extensive jogging (100+ laps)</li>
                <li>Needs to eat between killing sprees</li>
                <li>Enjoys mundane activities (brunch at cafés, amusement park rides)</li>
                <li>Shows selective mercy based on unknown criteria</li>
                <li>Operates with "final boss" confidence</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Equipment */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Equipment</h3>
          <div className="space-y-3">
            {[
              { label: 'Primary Weapon', value: 'Knife (consistently cleaned after use)' },
              { label: 'Secondary', value: 'Explosives with remote detonator' },
              { label: 'Concealment', value: 'Various hoodies (muted gray being his go-to)' },
            ].map(({ label, value }) => (
              <div key={label} className="neon-card text-sm text-text-muted">
                <p className="font-mono text-xs text-text-faint mb-1">{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Thematic Role */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Thematic Role</h3>
          <div className="callout space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Killer-kun represents the absurdist horror at the heart of <em>GyakuTEN</em>. He's a character who:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Blurs the line between vigilante and villain</li>
              <li>Embodies "karmic justice" while simultaneously being its antithesis</li>
              <li>Draws obsessive fascination from both narrators (Gyaku-kun and Eina-ten)</li>
              <li>Operates as a force of chaos in a world already defined by absurd tragedy</li>
            </ul>
            <p className="mt-2">His existence raises the central question: <em>Can evil that punishes evil ever be justified?</em></p>
          </div>
        </div>

        <Divider />

        {/* Narrator Commentary */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Narrator Commentary</h3>
          <div className="space-y-3">
            <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-muted">
              "This is the most hygenic serial killer ever! I have never seen this in my life!" — <span className="not-italic font-mono text-xs text-text-faint">Narrator-kun</span>
            </blockquote>
            <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic text-sm text-text-muted">
              "Something about him reminds me about Light from Death Note. Like he's exorcising people of their crimes yet he is a criminal yet killer." — <span className="not-italic font-mono text-xs text-text-faint">Eina-ten</span>
            </blockquote>
            <p className="text-sm text-text-muted">Both narrators admit to "simping" for his physical appearance despite his heinous actions, adding a layer of dark comedy to his characterization.</p>
          </div>
        </div>

        <Divider />

        {/* Status */}
        <div>
          <h3 className="font-serif text-lg text-text mb-3">Status</h3>
          <div className="neon-card text-sm text-text-muted">
            <p><strong>Currently Alive</strong> due to Plot Armor</p>
            <p className="mt-1">Currently at large, never apprehended despite extensive kill count and public operations.</p>
          </div>
        </div>

        <Divider />

        {/* Name Meaning */}
        <div>
          <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
          <div className="space-y-4 text-sm text-text-muted">
            <div className="callout">
              <p className="font-serif text-base text-[#ffaad4] mb-2">Masato (正人)</p>
              <p className="font-mono">正 (<em>masa</em>) = "righteous, correct, justice"</p>
              <p className="font-mono">人 (<em>to</em>) = "person"</p>
              <p className="mt-2 italic">Literal meaning: "Righteous person" or "person of justice"</p>
            </div>
            <div className="callout">
              <p className="font-serif text-base text-[#ffaad4] mb-2">Ren (錬)</p>
              <p className="font-mono">錬 (<em>ren</em>) = "to refine, to polish, to discipline"</p>
              <p className="mt-2 italic">Literal meaning: "Refinement" or "polishing"</p>
            </div>
            <div className="callout">
              <p className="font-mono text-xs text-text-faint mb-2">Full Name Irony:</p>
              <p>Masato Ren's name carries a deeply ironic meaning that perfectly embodies the absurdist satire of <em>GyakuTEN</em>. His first name suggests a "righteous person" or "person of justice," yet he's a serial killer who operates on his own twisted moral code—deciding who deserves to live or die based on criteria only he understands.</p>
              <p className="mt-2">His surname "Ren" (refinement/polishing) reflects his obsessive hygiene and the meticulous way he "polishes" his knife after every kill, as if trying to cleanse himself of his actions. This creates a darkly comedic contrast: a killer who literally <em>refines</em> his craft while believing himself to be <em>righteous</em>.</p>
              <p className="mt-2">Together, <strong>"Righteous Refinement"</strong> or <strong>"The Polished Judge"</strong> captures his self-appointed role as both executioner and hygiene enthusiast—a walking contradiction that makes him both horrifying and absurdly compelling.</p>
              <p className="mt-3 italic text-text-faint">It's as if his parents knew he'd grow up to be a serial killer with OCD tendencies and a god complex.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki" className="btn-neon-cyan text-xs">← Eina Arataki</Link></div>
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div></div>
      </div>
    </div>
  )
}

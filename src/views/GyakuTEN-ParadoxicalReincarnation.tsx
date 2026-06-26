import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab =
  | 'overview'
  | 'characters'
  | 'characters-narrator'
  | 'characters-eina'
  | 'characters-masato'

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

function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/gyakuten-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Alternate Reality · Publishing to Honeyfeed</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-1">
          GyakuTen – Paradoxical Reincarnation
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">逆説的な転生 – GyakuTen</p>
        <p className="text-text-faint text-xs font-mono">JP Title: Gyakusetsu-tekina Tensei · Shortform: GyakuTEN</p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Status', value: 'Publishing to Honeyfeed' },
          { label: 'Category', value: 'Alternate Reality · Standalone Story' },
          { label: 'Setting', value: 'Neo Japan · Set in the year 2100+' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
          { label: 'By', value: 'Alarkius Elvya Jay' },
          { label: 'Note', value: 'A Standalone Story That Derails from the Themes of the Naiseikai Universe' },
        ]} />
      </div>

      <Divider />

      {/* Hook */}
      <div>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p className="font-serif text-base text-[#d49fff]">What if reincarnation wasn't a reward… but a punishment?</p>
          <p className="font-serif text-base text-[#d49fff]">What if karma didn't teach… it simply returned?</p>
          <p>
            From the indie mind behind <em>The Naiseikai Universe</em> and <em>The Hibrythian Saga</em>, comes a soul-shattering standalone tale that defies life, death, and everything in between. <strong className="text-text">Gyakusetsu-tekina Tensei</strong> (Paradoxical Reincarnation) is a psychological absurdist anime-inspired light novel that bends genre, breaks structure, and spirals into existential horror.
          </p>
          <p className="font-mono text-xs text-text-faint">A karmic loop has begun.</p>
        </div>
      </div>

      <Divider />

      {/* Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Blurb</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-muted leading-relaxed">
            Karma is Entropy—always present, never still, never dead. It's like a fly on a wall, as if it's watching you….and time itself. That is until time rewinds and dismantles everything you thought you once knew……<em>to ashes.</em>
          </p>
        </div>
      </div>

      <Divider />

      {/* Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">GyakuTEN Premise (Meta Style)</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
          <p>
            In a karmic loop narrated by an unhinged observer, where one character survives a tragedy, another individual reincarnates endlessly, from pet to human and to fly, each more absurd than the last one. What if reincarnation isn't just mercy, but cosmic cruelty…? And what if you can't stop observing, helpless to do anything and gawk like a ghost…?
          </p>
          <p className="italic text-text-faint">(well, you're in luck, because this story is on a whole different level!)</p>
        </div>
      </div>

      <Divider />

      {/* Genre Fusion */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">🎭 Genre Fusion</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Psychological Absurdism',
            'Slice-of-Life turned Existential Horror',
            'Philosophical Karma Comedy',
            'Tragedy with Dark Humor',
            'Satire and Dry Comedy',
            'Animal POV / Fly-on-the-Wall Tactic',
          ].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Thematic Anchors */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">📓 Thematic Anchors</h2>
        <ul className="space-y-2">
          {[
            'Karma is Entropy: inevitable, chaotic, cruel.',
            'Innocence vs. Guilt in reincarnation.',
            'Memory fragments as haunting.',
            'Cycle of violence, even in "cute" forms.',
            "The soul's decay through repeated lives.",
            'Dark and Dry Comedy through a Narrator',
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#d49fff] mt-0.5">◆</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Narrative Devices */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">📖 Narrative Devices</h2>
        <ul className="space-y-2">
          {[
            'Hybrid POV: 3rd Person Limited shifting to 1st in key moments',
            'Internal memory fragments (italicized)',
            'Non-linear visual cues (mirror scenes across episodes)',
            'Color theory: warm hues early, desaturated after each death',
            'An Unreliable Narrator who either is too invested, a menace, or a wall breaker.',
          ].map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#7ef5ff] mt-0.5">◆</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Final Notes */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">🧼 Final Notes</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed">
            The story never offers redemption—only repetition. Audiences must confront the terrifying concept that some cycles are meant to <strong className="text-text">spiral</strong> instead of <strong className="text-text">heal</strong>.
          </p>
          <BlockQuote>"Karma doesn't teach. It returns."</BlockQuote>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters / Cast</h2>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {['Narrator-kun (Main Character)', 'Eina Arataki (Main Character)', 'Masato Ren "Killer-kun" (Antagonist)'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-faint mb-2">Supporting Cast</p>
            <div className="flex flex-wrap gap-2">
              {['The Arataki Family', 'The Mizuki Family / Mochi the Shiba — Runa Mizuki', 'The Hayasaka Family / Shobi the Pomsky — Junto "Junta" Hayasaka'].map(c => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Narrator-kun ─────────────────────────────────────────────────────────────

function NarratorTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/gyakuten/narrator-kun-banner.png" aspect="aspect-[3/1]" />
      <ImgPlaceholder label="/characters/gyakuten/narrator-kun.png" aspect="aspect-square" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character · Unreliable Narrator · Mascot</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Narrator-kun</h2>
        <p className="text-text-faint font-mono text-sm">aka Gyaku-kun · Glyph-kun · "That bastard in the margins"</p>
        <p className="text-text-faint font-mono text-xs mt-1">Project: GyakuTEN | Paradoxical Reincarnation · Role: Unreliable Narrator / Mascot / Glyph Entity / Emotional Menace</p>
      </div>

      <Divider />

      {/* Kanji Origin */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🈷️ Kanji Origin</h3>
        <div className="callout callout-purple space-y-2 text-sm text-text-muted leading-relaxed">
          <p><span className="font-mono text-[#d49fff]">Base Kanji: 逆 (gyaku)</span> – "Reverse", "Against", "Inversion"</p>
          <p>Symbolic of karmic resistance, narrative contradiction, and cyclical rebellion</p>
          <p>Design integrates stylized form of 逆 with added limbs, eye, and expression</p>
        </div>
      </div>

      <Divider />

      {/* Concept Summary */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🧠 Concept Summary</h3>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Narrator-kun (aka Gyaku-kun) is the living embodiment of <strong className="text-text">repetition, reversal, and reluctant commentary</strong>. Once a glyph in the divine script of karma, he broke free from the margins of the page and now mocks the reincarnation cycle while still guiding it.
          </p>
          <p>He is <strong className="text-text">not a friend. Not a guide. Not a moral compass.</strong></p>
          <p>But he is <em>always there</em>.</p>
          <BlockQuote>"You again? Yeah, I remember this loop. You fail here."</BlockQuote>
        </div>
      </div>

      <Divider />

      {/* Visual Description */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🎨 Visual Description</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="font-mono text-xs text-text-faint">Form —</span> The character 逆 brought to life, limbs emerging from strokes</p>
          <p><span className="font-mono text-xs text-text-faint">Primary Color —</span> Deep karmic purple-black, ink-like, gradient fades</p>
          <p><span className="font-mono text-xs text-text-faint">Aura —</span> Subtle violet glow, glitchy shimmer, shadow smudges</p>
          <p><span className="font-mono text-xs text-text-faint">Eye —</span> One lidded, sarcastic eye; often tired, annoyed, or smug</p>
          <p><span className="font-mono text-xs text-text-faint">Faceplate —</span> Orange/yellow bar over the eye – like a narrative visor</p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">💬 Personality</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left font-mono text-xs text-text-faint pb-2 pr-4">Trait</th>
                <th className="text-left font-mono text-xs text-text-faint pb-2">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              {[
                { trait: 'Voice', desc: 'Sarcastic, dry, slightly bored narrator energy' },
                { trait: 'Tone', desc: 'Passive-aggressive, jaded, emotionally exhausted' },
                { trait: 'Alignment', desc: 'Neutral-Cursed' },
                { trait: 'Catchphrases', desc: '"Loop detected.", "Try harder this time.", "F**k you, but not really."' },
                { trait: 'Relationship to Reader', desc: 'Intimately rude. Knows you better than you do.' },
              ].map(({ trait, desc }) => (
                <tr key={trait} className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-xs text-[#d49fff] whitespace-nowrap">{trait}</td>
                  <td className="py-2 leading-relaxed">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-faint mt-3 italic">He's the narrator that <strong>remembers every failure</strong>, but still narrates your story… begrudgingly.</p>
      </div>

      <Divider />

      {/* Functions in the Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">📚 Functions in the Story</h3>
        <ul className="space-y-2">
          {[
            'Narrative glue between reincarnation episodes',
            'Adds meta-commentary, fourth wall pokes, and emotional texture',
            'Switches between omniscient, first-person, and sarcastic voiceover',
            'Sometimes scribbles into the story itself',
            'Refuses redemption arcs but still allows them to play out',
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#d49fff] mt-0.5">◆</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Symbolism */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🪞 Symbolism</h3>
        <div className="flex flex-wrap gap-2">
          {['Reversal of fate', 'Resistance to narrative finality', 'Karmic backlog personified', 'Emotional whiplash mascot'].map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Merch Quotes */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🛒 Potential Merch Quotes</h3>
        <div className="space-y-2">
          {[
            '"You\'re back already?"',
            '"Don\'t worry, I hated this scene too."',
            '"Spoiler alert: you mess it up again."',
            '"F**k you, but I\'m still here."',
          ].map((q, i) => (
            <BlockQuote key={i}>{q}</BlockQuote>
          ))}
        </div>
      </div>

      <Divider />

      {/* Extra Notes */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">🔮 Extra Notes</h3>
        <ul className="space-y-2">
          {[
            'Often appears in story transitions, title cards, or memory fragments',
            'Sometimes leaks out of the narration box or glitches the scene',
            'May be worshipped by some karmic cults within the world of GyakuTEN',
            'Has never once spoken kindly, but still gives closure',
          ].map((n, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#d49fff] mt-0.5">◆</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
        <BlockQuote>Narrator-kun is not just the voice. He is the loop.</BlockQuote>
      </div>
    </div>
  )
}

// ─── Eina Arataki ─────────────────────────────────────────────────────────────

function EinaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/gyakuten/eina-arataki.png" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Eina Arataki</h2>
        <p className="text-text-faint font-mono text-sm">映奈 荒滝</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Eina | 映奈' },
          { label: 'Last Name', value: 'Arataki | 荒滝' },
          { label: 'Age', value: '19' },
          { label: 'Height', value: "5'4" },
          { label: 'Gender', value: 'Female' },
          { label: 'Birthday', value: '06/06/06' },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
          <p>
            Eina Arataki is the daughter of the Arataki Household. And she is a famous martial artist from her school, She's a number one student, diligent, and book smart. She's in her last year of High School. She was the kind of girl who made herself small so others could shine. She's an older sister to her brother, Mako Arataki, who is in grade school. She's the emotional glue to the family.
          </p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="callout text-sm text-text-muted leading-relaxed">
          <p>
            Eina is gentle-hearted, soft-spoken, and emotionally intuitive. But that <em>innocence</em> becomes her curse. She's the girl who remembers <em>just enough</em> to grieve, but never enough to escape. Her kindness isn't passive—it's her rebellion against karmic apathy.
          </p>
        </div>
      </div>

      <Divider />

      {/* Hobbies & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Practices martial arts — Kung Fu, Karate, Taekwondo, Tai-Chi…and a lot more</li>
              <li>• Loves manga and anime</li>
              <li>• Plays games with her younger brother</li>
              <li>• Making meals (she's the glue to the whole family)</li>
              <li>• Draws from time to time</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Likes Girls (yes, she's gay)</li>
              <li>• Likes Cats</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Creeps and toxic people.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Visual Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p><span className="font-mono text-xs text-text-faint">Hair —</span> Blue hair, medium long with red accent tips. Often puts her hair up in a bun when wearing her martial arts uniform.</p>
          <p><span className="font-mono text-xs text-text-faint">Eyes —</span> Blue.</p>
          <div className="neon-card mt-2">
            <p className="font-mono text-xs text-text-faint mb-2">School Uniform</p>
            <p>Designed like a sailor uniform with a long white skirt. The shirt is brown with white stripes, an orange loose ribbon tie, with buttons that hold it in place.</p>
          </div>
          <p><span className="font-mono text-xs text-text-faint">Workout —</span> Compression tights and sports wear.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Name Meaning</h3>
        <div className="space-y-4">
          <div className="callout space-y-3 text-sm text-text-muted font-mono">
            <p className="text-[#7ef5ff] text-base not-italic font-sans font-serif">映奈 — Eina</p>
            <p><span className="text-text">映 (Ei)</span> — Means to reflect, project, cast or shine. To reflect or show. Implies memory, reflection, something seen.</p>
            <p><span className="text-text">奈 (na)</span> — Often used phonetically in all girl names which sounds soft, but can also imply endurance. Feminine softness.</p>
          </div>
          <div className="callout space-y-3 text-sm text-text-muted font-mono">
            <p className="text-[#7ef5ff] text-base not-italic font-sans font-serif">荒滝 — Arataki</p>
            <p><span className="text-text">荒 (Ara)</span> — Means rough, wild, savage, raw. Harshness of fate or chaos of karma.</p>
            <p><span className="text-text">滝 (taki)</span> — Means Waterfall, which symbolizes sudden change, uncontrollable, or emotion overflowing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Masato Ren ───────────────────────────────────────────────────────────────

function MasatoTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/gyakuten/masato-ren.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Antagonist · Currently Alive (Plot Armor)</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Masato Ren</h2>
        <p className="text-text-faint font-mono text-sm">"Killer-kun"</p>
      </div>

      <Divider />

      {/* Overview */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Overview</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Masato Ren, known as <strong className="text-text">"Killer-kun,"</strong> is the primary antagonist of <em>GyakuTEN – Paradoxical Reincarnation</em>. A serial killer with contradictory traits, he operates with a blend of hygiene obsession, moral ambiguity, and chilling efficiency that makes him both terrifying and disturbingly charismatic.
          </p>
        </div>
      </div>

      <Divider />

      {/* Physical Description */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Physical Description</h3>
        <InfoGrid items={[
          { label: 'Height', value: '6\'2"' },
          { label: 'Build', value: 'Lean, toned physique with defined eight-pack abs and broad shoulders ("fireman physique")' },
          { label: 'Hair', value: 'Brown' },
          { label: 'Eyes', value: 'Red (giving him distinct "final boss" energy)' },
          { label: 'Notable Features', value: 'Muscular legs, athletic build that allows him to run extensive laps without tiring' },
        ]} />
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-3">The Contradictions</p>
            <div className="space-y-2">
              {[
                { label: 'Hygienic Serial Killer', desc: 'Meticulously cleans his knife and shoes after each murder.' },
                { label: 'Morally Grey', desc: 'Targets criminals, pedophiles, bullies, and yakuza bosses, yet also kills innocent victims(?)' },
                { label: 'Polite & Human', desc: 'Tips well at cafés, thanks waitresses, exercises regularly, enjoys amusement parks' },
                { label: 'Deranged Yet Calculated', desc: 'Questions like "How do I kill oxygen?" while jogging, plants explosives strategically.' },
              ].map(({ label, desc }) => (
                <div key={label} className="border-l-2 border-[#ffaad4]/30 pl-3">
                  <p className="font-mono text-xs text-[#ffaad4] mb-0.5">{label}</p>
                  <p className="text-sm text-text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-3">Behavioral Patterns</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Maintains physical fitness through extensive jogging (100+ laps)</li>
              <li>• Needs to eat between killing sprees</li>
              <li>• Enjoys mundane activities (brunch at cafés, amusement park rides)</li>
              <li>• Shows selective mercy based on unknown criteria</li>
              <li>• Operates with "final boss" confidence</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* Equipment */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Equipment</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="font-mono text-xs text-text-faint">Primary Weapon —</span> Knife (consistently cleaned after use)</p>
          <p><span className="font-mono text-xs text-text-faint">Secondary —</span> Explosives with remote detonator</p>
          <p><span className="font-mono text-xs text-text-faint">Concealment —</span> Various hoodies (muted gray being his go-to)</p>
        </div>
      </div>

      <Divider />

      {/* Thematic Role */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Thematic Role</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Killer-kun represents the absurdist horror at the heart of <em>GyakuTEN</em>. He's a character who:</p>
          <ul className="space-y-1 ml-2">
            {[
              'Blurs the line between vigilante and villain',
              'Embodies "karmic justice" while simultaneously being its antithesis',
              'Draws obsessive fascination from both narrators (Gyaku-kun and Eina-ten)',
              'Operates as a force of chaos in a world already defined by absurd tragedy',
            ].map((r, i) => (
              <li key={i} className="flex items-start gap-2"><span className="text-[#ffaad4] mt-0.5">◆</span><span>{r}</span></li>
            ))}
          </ul>
          <p className="font-serif italic text-[#ffaad4]">His existence raises the central question: Can evil that punishes evil ever be justified?</p>
        </div>
      </div>

      <Divider />

      {/* Narrator Commentary */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Narrator Commentary</h3>
        <div className="space-y-3">
          <div className="neon-card text-sm text-text-muted space-y-1">
            <p className="font-mono text-xs text-text-faint">Narrator-kun —</p>
            <p className="italic">"This is the most hygenic serial killer ever! I have never seen this in my life!"</p>
          </div>
          <div className="neon-card text-sm text-text-muted space-y-1">
            <p className="font-mono text-xs text-text-faint">Eina-ten —</p>
            <p className="italic">"Something about him reminds me about Light from Death Note. Like he's exorcising people of their crimes yet he is a criminal yet killer."</p>
          </div>
          <p className="text-xs text-text-faint italic">Both narrators admit to "simping" for his physical appearance despite his heinous actions, adding a layer of dark comedy to his characterization.</p>
        </div>
      </div>

      <Divider />

      {/* Status */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Status</h3>
        <div className="neon-card text-sm text-text-muted">
          <p><span className="text-green-400 font-mono text-xs">● CURRENTLY ALIVE</span> — due to Plot Armor</p>
          <p className="mt-1">Currently at large, never apprehended despite extensive kill count and public operations.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Name Meaning</h3>
        <div className="space-y-4">
          <div className="callout space-y-2 text-sm text-text-muted font-mono">
            <p className="text-[#ffaad4] text-base not-italic font-sans font-serif">Masato (正人)</p>
            <p><span className="text-text">正 (masa)</span> = "righteous, correct, justice"</p>
            <p><span className="text-text">人 (to)</span> = "person"</p>
            <p className="font-sans text-xs text-text-faint italic">Literal meaning: "Righteous person" or "person of justice"</p>
          </div>
          <div className="callout space-y-2 text-sm text-text-muted font-mono">
            <p className="text-[#ffaad4] text-base not-italic font-sans font-serif">Ren (錬)</p>
            <p><span className="text-text">錬 (ren)</span> = "to refine, to polish, to discipline"</p>
            <p className="font-sans text-xs text-text-faint italic">Literal meaning: "Refinement" or "polishing"</p>
          </div>
          <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
            <p className="font-mono text-xs text-[#ffaad4]">Full Name Irony</p>
            <p>
              Masato Ren's name carries a deeply ironic meaning that perfectly embodies the absurdist satire of <em>GyakuTEN</em>. His first name suggests a "righteous person" or "person of justice," yet he's a serial killer who operates on his own twisted moral code—deciding who deserves to live or die based on criteria only he understands.
            </p>
            <p>
              His surname "Ren" (refinement/polishing) reflects his obsessive hygiene and the meticulous way he "polishes" his knife after every kill, as if trying to cleanse himself of his actions. This creates a darkly comedic contrast: a killer who literally <em>refines</em> his craft while believing himself to be <em>righteous</em>.
            </p>
            <p>
              Together, <strong className="text-text">"Righteous Refinement"</strong> or <strong className="text-text">"The Polished Judge"</strong> captures his self-appointed role as both executioner and hygiene enthusiast—a walking contradiction that makes him both horrifying and absurdly compelling.
            </p>
            <p className="italic text-text-faint">It's as if his parents knew he'd grow up to be a serial killer with OCD tendencies and a god complex.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string; sub: string }[] = [
  { key: 'characters-narrator', label: 'Narrator-kun',       color: 'text-[#d49fff]', sub: 'Unreliable Narrator · Mascot' },
  { key: 'characters-eina',     label: 'Eina Arataki',       color: 'text-[#7ef5ff]', sub: 'Main Character' },
  { key: 'characters-masato',   label: 'Masato Ren',         color: 'text-[#ffaad4]', sub: 'Antagonist · "Killer-kun"' },
]


const CHARACTER_ROUTES: Record<string, string> = {
  'characters-narrator': '/titles/GyakuTEN-ParadoxicalReincarnation/Narrator-Kun',
  'characters-eina': '/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki',
  'characters-masato': '/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun',
}

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTER_TABS.map(({ key, label, color, sub }) => (
          <Link
            key={key}
            to={CHARACTER_ROUTES[key]}
            className="block border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.07)] transition-all text-left group"
          >
            <p className={`font-serif text-lg ${color} mb-0.5 group-hover:underline`}>{label}</p>
            <p className="text-[10px] font-mono text-text-faint mb-2">{sub}</p>
            <p className="text-[10px] font-mono text-text-faint">View full profile →</p>
          </Link>
        ))}
        {/* Supporting */}
        {['The Arataki Family', 'Runa Mizuki', 'Junto "Junta" Hayasaka'].map(n => (
          <div key={n} className="border border-white/5 rounded-xl p-5 bg-[rgba(255,255,255,0.01)] opacity-40">
            <p className="font-serif text-lg text-text-faint mb-1">{n}</p>
            <p className="text-[10px] font-mono text-text-faint">Supporting Cast</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TOP_TABS: { key: Tab; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function GyakuTen() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  const isCharTab = activeTab.startsWith('characters-')
  const activeCharTab = CHARACTER_TABS.find(c => c.key === activeTab)

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
        {TOP_TABS.map(({ key, label }) => {
          const active = activeTab === key || (key === 'characters' && isCharTab)
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                active
                  ? 'border-[rgba(191,95,255,0.6)] text-[#d49fff] bg-[rgba(191,95,255,0.08)]'
                  : 'border-white/10 text-text-faint hover:border-white/20 hover:text-text-muted'
              }`}
            >
              {label}
            </button>
          )
        })}
        {isCharTab && activeCharTab && (
          <>
            <span className="text-text-faint text-xs font-mono self-center">/</span>
            <button className="px-4 py-1.5 rounded-full text-xs font-mono border border-[rgba(191,95,255,0.6)] text-[#d49fff] bg-[rgba(191,95,255,0.08)]">
              {activeCharTab.label}
            </button>
          </>
        )}
      </div>

      {/* Character sub-nav */}
      {(activeTab === 'characters' || isCharTab) && (
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('characters')}
            className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all border ${
              activeTab === 'characters'
                ? 'border-white/30 text-text bg-[rgba(255,255,255,0.08)]'
                : 'border-white/10 text-text-faint hover:text-text-muted'
            }`}
          >
            All Characters
          </button>
          {CHARACTER_TABS.map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all border ${
                activeTab === key
                  ? `border-white/30 ${color} bg-[rgba(255,255,255,0.06)]`
                  : 'border-white/10 text-text-faint hover:text-text-muted'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      {activeTab === 'overview'               && <OverviewTab />}
      {activeTab === 'characters'             && <CharactersIndex />}
      {activeTab === 'characters-narrator'    && <NarratorTab />}
      {activeTab === 'characters-eina'        && <EinaTab />}
      {activeTab === 'characters-masato'      && <MasatoTab />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
        
      </div>

    </div>
  )
}

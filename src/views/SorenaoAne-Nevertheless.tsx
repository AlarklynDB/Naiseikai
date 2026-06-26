import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab =
  | 'overview'
  | 'characters'
  | 'characters-asahi'
  | 'characters-reiko'
  | 'characters-shion'
  | 'characters-koharu'
  | 'characters-cyllvia'

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

// ─── Asahi Nanako ─────────────────────────────────────────────────────────────

function AsahiTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/nevertheless/asahi-nanako.jpg" aspect="aspect-[3/4]" />
      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character · WIP</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Asahi Nanako</h2>
        <p className="text-text-faint font-mono text-sm italic">Cold-shouldered beauty with a sharp tongue and wounded heart.</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Asahi' },
          { label: 'Last Name', value: 'Nanako' },
          { label: 'Age', value: '19' },
          { label: 'Birthday', value: 'July 17th, 2081' },
          { label: 'Race', value: 'Human' },
          { label: 'Height', value: "5'1" },
          { label: 'Gender', value: 'Female' },
          { label: 'Relation', value: "Reiko's younger sister · Shion's GF" },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Asahi Nanako is the younger sister of Reiko. At a young age, both their parents left them due to a severe flu season.
            The two were alone, with Reiko shouldering everything — bills, jobs, funding, and more. Because of this, Asahi noticed
            the huge gap in their sibling dynamic. Her sister stopped feeling like a sister; she became a parent. The sibling bond
            they once had disappeared overnight.
          </p>
          <p>
            As a result, Asahi became cold and distant from Reiko — harsh, even. Reiko tries to reach her, but is met with scowls
            and resentment. A few weeks into July, Asahi turns 20 on the 17th, and that birthday becomes a turning point.
          </p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Dark Chestnut, sometimes in a low messy ponytail or left to hang with subtle waves. Often has <strong>overgrown bangs</strong> that slightly
              cover one eye — an unspoken visual wall between her and the world. Strands that frame her face make her look perpetually tired or uninterested.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Muted purple, deep grey, or stormy blue — like thunderclouds in the summer. Heavy eyelids, slightly downturned outer corners
              (tsurime-meets-tareme hybrid), like she's always a bit annoyed or lowkey sad. Rarely makes direct eye contact unless she's
              mad or feels betrayed.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🧥 Outfit Style</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Casual but aloof. Oversized off-shoulder knits or hoodies in dusty colors (mauve, grey, pale navy). Legs always warm: long socks,
              black tights, or soft sweats — but her upper half is often bare or slouchy. Symbolic, maybe? Guarded below, exposed above.
              Rarely dresses for style — more out of mood or emotional state. (Reiko used to dress her up cutely as a kid… not anymore.)
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🌬 Expressions &amp; Body Language</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Only relaxes when alone — her body sags a bit when Reiko's not in the room. You might catch her biting her lip while waiting
              for Reiko to speak first: she wants to talk, but pride is a fortress. A soft cold stare, often drifting elsewhere.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🎧 Accessories</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Bluetooth earbuds always in — not for music, just for disconnection. Sometimes seen with a cheap plastic phone charm
              Reiko got her years ago. Doesn't want to admit she still keeps it.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Likes to doodle from time to time.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
          <p className="text-sm text-text-muted">Listening to the rain pattering on the window. It soothes her.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
          <p className="text-sm text-text-muted">Her sister (slightly).</p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Shion Nozomi — Girlfriend</p>
      </div>
    </div>
  )
}

// ─── Reiko Nanako ─────────────────────────────────────────────────────────────

function ReikoTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/nevertheless/reiko-nanako.jpg" aspect="aspect-[3/4]" />
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character · WIP</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Reiko Nanako</h2>
        <p className="text-text-faint font-mono text-sm italic">Stoic, tired beauty with too many burdens for one back to carry.</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Reiko' },
          { label: 'Last Name', value: 'Nanako' },
          { label: 'Age', value: '24' },
          { label: 'Birthday', value: 'August 1st, 2076' },
          { label: 'Race', value: 'Human' },
          { label: 'Height', value: "5'1" },
          { label: 'Gender', value: 'Female' },
          { label: 'Relation', value: "Asahi's older sister" },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Reiko Nanako is the older sister of Asahi. She's hardworking, studious, open, and kind. She goes to college and works
            a waitress job. In college, she is friends with Cyllvia April, an international student from London who aims to be a
            teacher; Koharu Inoue, a fiery girl with fierce drive; and Shion Nozomi, a quiet and intelligent girl. These three are
            very close to her, and they know she's trying her best.
          </p>
          <p>
            At a young age, both their parents left due to a severe flu season. Reiko bore everything — bills, jobs, funding, and more.
            She practically raised Asahi as a daughter. Despite the nagging and the protection she showed, Asahi showed resentment.
            Her younger sister sees this as annoying — she's not a child anymore, and Reiko insists, strongly.
          </p>
          <div className="callout border-red-500/20 bg-[rgba(255,60,60,0.04)]">
            <p className="font-mono text-xs text-red-400 mb-2">⚠ Trigger Warning — Suicidal Ideation</p>
            <p>
              As the relationship grew harsh and the bridge widened, Reiko tried to end her life on multiple occasions.
            </p>
            <ul className="mt-2 space-y-1 ml-2">
              <li>• <strong>Bridge</strong> — She tried to jump, but couldn't.</li>
              <li>• <strong>Sleeping Pills</strong> — Very high doses, but she still couldn't.</li>
            </ul>
            <p className="mt-3">
              All the burden became too much. She hid the pills in her car along with a note before her friends found her, completely
              drowning in low self-esteem. What felt like a week in the psychiatric ward was actually a month. She had neglected
              everything — friends, sister, herself. She didn't care. She wanted it to end.
            </p>
          </div>
          <p>
            On July 17th — Asahi's birthday — Reiko didn't want to go home. Too afraid to look at Asahi. She went to Koharu's
            apartment instead. But Asahi was there. Asahi, finally seeing her, broke down angrily: ranting about her sister's
            disappearances, shortcomings, and worst of all — the suicide note.
          </p>
          <p>
            Reiko explains. Her friends were furious — because they secretly knew Reiko couldn't be all things at once: a mom,
            a dad, a sister, all while balancing college, work, therapy, and a psychiatric ward. She had become a martyr.
          </p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Long dark chestnut, tied in a low bun or ponytail — often messy from running around. A few strands fall loose,
              a visual metaphor for losing control no matter how hard she holds it together. Sometimes wears a clip Asahi gifted
              her long ago — forgotten in her hair, still there.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Deep brown with noticeable under-eye fatigue. Slightly sharp almond shape — stares that feel like a judgment even
              when she's just thinking. Occasionally soften when drunk: eyes go watery, lashes heavy, like she's begging to
              be loved again.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🧣 Outfits</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Layered and practical — a work uniform top with a jacket tossed over, or a simple turtleneck and slacks for school.
              Sometimes wears old aprons over cute skirts — mismatched between her student life and adulting chaos. Her therapist
              recommended "color therapy," so she tries to wear pastel socks (she rolls them down).
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">☁ Expressions &amp; Body Language</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Hands always full, but never shaking — she has to hold it together. Straight-backed posture from years of pretending
              to be okay. When drunk? She stumbles, laughs with her whole chest, and goes "hehe… you're kinda cute…" before
              crying about her bills.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🍺 Drunk Reiko Mode (Toggle Form™)</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Hair down. Slight blush. Unbuttoned top button of whatever she's wearing. She giggles. Teases. Leans against
              you and says too much. Then wakes up the next day and becomes cold and silent. Doesn't want to talk about it. <em>("You saw nothing.")</em>
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🎧 Accessories</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Wristwatch always 5 minutes behind (she never has time to fix it). Wears a cheap ring on a chain around her
              neck — her mom's. She touches it whenever overwhelmed. Sometimes keeps a photo of baby Asahi in her wallet.
              She looks at it after fights.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Stoic and strict, almost like how a protective mother would act. Although she's the big sister, she sacrificed
            everything to care for Asahi. She juggles college, her waitressing job, therapy, and a psychiatrist. Her personality
            shifts drastically: strict, caring, controlling, and sometimes even hostile. When she's drunk on beer, it's the
            complete opposite — straightforward, flirty, open, and timid.
          </p>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">She barely has time for hobbies aside from hanging out with Koharu, Shion, and Cyllvia.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
          <p className="text-sm text-text-muted">Her sister, Asahi. It's not just "likes" — she has a huge complex of overprotection.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
          <p className="text-sm text-text-muted">Insects.</p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Asahi's older sister. Best friends with Koharu Inoue, Shion Nozomi, and Cyllvia April.</p>
      </div>
    </div>
  )
}

// ─── Shion Nozomi ─────────────────────────────────────────────────────────────

function ShionTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/nevertheless/shion-nozomi.jpg" aspect="aspect-[3/4]" />
      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character · WIP</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Shion Nozomi</h2>
        <p className="text-text-faint font-mono text-sm italic">Timid behind a strong bravado.</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Shion' },
          { label: 'Last Name', value: 'Nozomi' },
          { label: 'Age', value: '20' },
          { label: 'Birthday', value: 'July 13th, 2080' },
          { label: 'Yokai', value: 'Owl (3% Yokai Blood)' },
          { label: 'Height', value: "5'1" },
          { label: 'Gender', value: 'Female' },
          { label: 'Relation', value: "Asahi's GF · Friends with Cyllvia, Koharu, and Reiko" },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Shion Nozomi is Reiko's best friend from college. Quiet and not one to talk much — but very smart. She excels in her
            studies. She can act reserved, but becomes extroverted when given time to open up. Her unique personality is what drew
            Reiko to her: Reiko had a very patient nature, and Shion responded to that.
          </p>
          <p>
            Shion comes from a wealthy line of martial arts masters, but she doesn't care much about wealth. She skipped
            several school levels due to her exceptional IQ of 185–200 (boosted by 3% owl yokai blood), placing her at the
            same college level as her friends — though she's smarter than all three combined. She holds back significantly.
          </p>
          <p>
            When Asahi reached out, Shion was the first to respond. She went to Asahi's place, and their friendship blossomed
            into something more. Shion deeply cared for Asahi, and that's when Asahi confessed. They started dating in secret
            behind Reiko's back — both too scared to tell her.
          </p>
        </div>
      </div>

      <Divider />

      {/* Yokai Heritage */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Yokai Heritage — Owl Ninja Clan</h3>
        <div className="callout space-y-2 text-sm text-text-muted leading-relaxed">
          <p>
            Shion is the last descendant of an Owl Ninja Yokai Clan that lived for over ~10 estimated generations. Despite
            having only 3% yokai blood, she is a graceful martial arts fighter who holds back significantly. When the time
            is called for, however, she would do anything to protect her friends.
          </p>
          <p>
            Behind that shy exterior, she outmatches even Koharu (a Fire Flamingo) in terms of aerial ability.
          </p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted">Bob-cut light brown. Soft and pretty. Doesn't get in the way.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted">Heterochromatic — dark brown and dark purple. Unique!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🧣 Outfits</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Casual martial arts clothing that doesn't stick out. Worn almost every day. Also loves oversized shirts and hoodies —
              it's like she wants to be cuddled~!
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">☁ Expressions &amp; Body Language</p>
            <p className="text-sm text-text-muted">Soft, gentle, caring. The kind of friend who will care for you no matter what. Elegant with her words.</p>
          </div>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Listening to music, reading, and writing.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
          <p className="text-sm text-text-muted">Cute stuff. Animals.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
          <p className="text-sm text-text-muted">Loud people. Rude people.</p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Dating Asahi.</p>
      </div>
    </div>
  )
}

// ─── Koharu Inoue ─────────────────────────────────────────────────────────────

function KoharuTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/nevertheless/koharu-inoue.jpg" aspect="aspect-[3/4]" />
      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character · WIP</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Koharu Inoue</h2>
        <p className="text-text-faint font-mono text-sm italic">
          The kind of girl who slams her textbook on the table when someone insults her friend.
        </p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Koharu' },
          { label: 'Last Name', value: 'Inoue' },
          { label: 'Age', value: '23' },
          { label: 'Birthday', value: 'May 22nd, 2077' },
          { label: 'Yokai', value: 'Fire Flamingo' },
          { label: 'Height', value: "5'4" },
          { label: 'Gender', value: 'Female' },
          { label: 'Relation', value: "Cyllvia's GF · Reiko's Best Friend" },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Koharu Inoue is Reiko's best friend at college — hot-tempered but with a fierce and loyal heart. She knows Reiko's
            younger sister, Asahi, having been introduced once. She loves teaching children because her family is full of younger
            siblings, and she grew fond of that role. She discovered an innate skill for teaching and wants to become a Psychology
            and Biology teacher — two subjects she genuinely loves.
          </p>
          <p>
            Even when Reiko didn't tell her the full story, Koharu knew. She is also quite open: her loyalty shows so strongly that
            it can become overwhelming. She's also close with Shion, Cyllvia, and Asahi.
          </p>
        </div>
      </div>

      <Divider />

      {/* Yokai Heritage */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Yokai Heritage — Fire Flamingo</h3>
        <div className="callout text-sm text-text-muted leading-relaxed">
          <p>
            Koharu is a Fire Flamingo. Not much of her yokai heritage has been revealed — she keeps parts of it a secret.
            Reiko, Asahi, and Cyllvia know she is a Fire Flamingo, but they still don't know the full extent of her yokai abilities.
          </p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Orange-red with reddish undertones that shimmer in sunlight. Shoulder-length, often tied up messily when studying or
              in a ponytail with strands falling in her face. Sometimes wears a clip or pin — a little star or lightning motif,
              something energetic.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Copper orange, sharp and piercing when annoyed. Her resting expression looks intense even when she's just deep in thought.
              When she softens, her eyes wrinkle slightly at the corners — that rare softness is devastating.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🎒 Outfit Style</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Casual, a bit sporty, unbothered by elegance — graphic hoodies, cargo pants, sneakers. Sleeves often rolled up, hands
              always moving (tactile learner). Has that "not trying to look hot but she is" aura. Always has pens in her pocket.
              Or behind her ear. Or both.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality Layers</h3>
        <div className="space-y-3">
          {[
            { icon: '🔥', title: 'Hot-headed', desc: 'Snaps easily, especially at injustice or people who don\'t take responsibility.' },
            { icon: '🛡', title: 'Protective to a fault', desc: 'Covers for Reiko when she can. Checks in on Asahi even when it\'s awkward.' },
            { icon: '💬', title: 'Open about feelings', desc: 'Bad at knowing when she\'s too loud. Thinks honesty is always the solution.' },
            { icon: '🍎', title: 'Teacher energy', desc: 'Loves children — instinctively patient with them, even when she has none for adults. Wants to reform how kids understand mental health and biology. Her final thesis is probably about how trauma manifests in siblings across caregiving structures. Reiko inspired it.' },
          ].map(({ icon, title, desc }) => (
            <Accordion key={title} icon={icon} title={title}>
              <p>{desc}</p>
            </Accordion>
          ))}
        </div>
      </div>

      <Divider />

      {/* Emotional cues */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Emotional Cues</h3>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Teases Cyllvia a lot, especially about her accent — but also holds her hand when she\'s nervous.',
            'Puts her coat on Reiko when she sees her shivering at a bus stop.',
            'Remembers every birthday of her friends, even if she forgets her own.',
            'Absolute menace when drunk — tells you her entire thesis paper out loud while crying about how proud she is of you.',
          ].map((c, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#ffaad4] mt-0.5">✦</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Teaching. Drawing. Avid geek.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
          <p className="text-sm text-text-muted">All kinds of animals. Pandas are her favorite.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
          <p className="text-sm text-text-muted">Snakes.</p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Cyllvia's Girlfriend · Reiko's Best Friend · Shion's Best Friend · Actual big sister energy to Asahi.</p>
      </div>
    </div>
  )
}

// ─── Cyllvia April ────────────────────────────────────────────────────────────

function CyllviaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/nevertheless/cyllvia-april.jpg" aspect="aspect-[3/4]" />
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Cyllvia April</h2>
        <p className="text-text-faint font-mono text-sm italic">
          The elegant British honor student — poised, warm, and so hopelessly gay for Koharu.
        </p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Cyllvia' },
          { label: 'Last Name', value: 'April' },
          { label: 'Age', value: '25' },
          { label: 'Birthday', value: 'May 23rd, 2075' },
          { label: 'Race', value: 'Human' },
          { label: 'Height', value: "5'6" },
          { label: 'Gender', value: 'Female' },
          { label: 'Origin', value: 'London, UK (International Student)' },
          { label: 'Relation', value: "Koharu's GF · Reiko's Best Friend" },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="callout">
            <p className="text-text-faint text-xs font-mono mb-1">Character Inspiration</p>
            <p className="italic">Imagine if Karen Kujou and Tsumugi Kotobuki had a child… this is what Cyllvia would be!</p>
          </div>
          <p>
            Cyllvia April hails from London, UK, as an international student studying Japanese in Japan. She comes from a wealthy
            family company called <strong>April Industries</strong>, which is women-owned and founded by her mother, Regina April.
            Both her mother and her siblings respect each other's differences and get along well. Her mother fully supports her
            daughter's future career as a Japanese/English Teacher.
          </p>
          <p>
            Cyllvia is fascinated by Japanese culture and wanted to deepen her knowledge — she had two years of Japanese before
            furthering her studies. She is studiou, great at connecting with others, and infectiously open. She's a light brown
            brunette who loves wearing her London school uniform even in Japanese college.
          </p>
          <p>
            She's best friends with Reiko Nanako and knows her very well, along with Shion and Koharu. She also knows Asahi.
          </p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Light brown with subtle brunette-gold undertones — smooth, shiny, immaculately brushed. Often styled in a half-up
              ponytail, or loosely braided with a pale scrunchie when studying. Side-swept bangs and faint curls at the tips —
              not too straight, not too wild.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Soft teal or jade green — a color that glimmers in sunlight. Almond-shaped, bright with curiosity: the kind of
              eyes that widen when she hears Japanese spoken fluently. Wears round-rimmed glasses when reading or writing essays.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🎓 Outfit Style</p>
            <p className="text-sm text-text-muted leading-relaxed">
              London-style school uniform vibes even in Japan — classy blazer, pleated skirt, necktie or bow. In Japanese college:
              clean cardigans, flowy skirts, Mary Janes or Oxford shoes. Color palette is always refined — pastel beige, navy blue,
              dusty lavender, and cherry blossom pink accents.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Speech Traits</h3>
        <div className="space-y-3">
          <div className="neon-card space-y-1 text-sm text-text-muted leading-relaxed">
            <p>Polite, well-mannered, extremely conscious of respecting space and culture.</p>
            <p>Has a slight British accent when speaking Japanese — endearing to everyone, but she's self-conscious about it.</p>
            <p>When excited: <em>"Oh! That's simply fascinating~!"</em></p>
            <p>When flustered: hides behind her notebook and blushes while peeking over it.</p>
          </div>
          <div className="space-y-2">
            {[
              { icon: '🌍', title: 'Super sociable', desc: 'Loves meeting people and learning their stories. The "ambassador" of the friend group.' },
              { icon: '💛', title: 'Loyal to a fault', desc: 'Once she chooses you, she will always root for you.' },
              { icon: '💗', title: 'Absolutely smitten with Koharu', desc: 'Always praising her with sparkly eyes and gentle teasing.' },
            ].map(({ icon, title, desc }) => (
              <Accordion key={title} icon={icon} title={title}>
                <p>{desc}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* Emotional Details */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Emotional Details</h3>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Keeps a journal of Japanese words that moved her emotionally.',
            'Has stickers from her time in London still decorating her pencil case.',
            'Sends video messages to her mom Regina, updating her on Reiko and Koharu — with hidden hearts drawn at the end.',
          ].map((d, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#7ef5ff] mt-0.5">✦</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Teaching. Drawing. Avid geek.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
          <p className="text-sm text-text-muted">All kinds of animals. Pandas are her favorite.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
          <p className="text-sm text-text-muted">Snakes.</p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted leading-relaxed">
          Strong preference for women. Has been dating Koharu for eight months. She's Reiko's best friend — but Reiko doesn't know
          she's dating Koharu.
        </p>
      </div>
    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-asahi',   label: 'Asahi Nanako',  color: 'text-[#d49fff]' },
  { key: 'characters-reiko',   label: 'Reiko Nanako',  color: 'text-[#7ef5ff]' },
  { key: 'characters-shion',   label: 'Shion Nozomi',  color: 'text-[#ffaad4]' },
  { key: 'characters-koharu',  label: 'Koharu Inoue',  color: 'text-[#ffaad4]' },
  { key: 'characters-cyllvia', label: 'Cyllvia April', color: 'text-[#7ef5ff]' },
]


const CHARACTER_ROUTES: Record<string, string> = {
  'characters-asahi': '/titles/SorenaoAne-Nevertheless/Asahi-Nanako',
  'characters-reiko': '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi',
  'characters-shion': '/titles/SorenaoAne-Nevertheless/Shion-Nanako',
  'characters-koharu': '/titles/SorenaoAne-Nevertheless/Koharu-Inoue',
  'characters-cyllvia': '/titles/SorenaoAne-Nevertheless/Cyllvia-April',
}

function CharactersIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl text-text mb-2">Characters</h2>
        <p className="text-sm text-text-muted">Select a character to view their full profile.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTER_TABS.map(({ key, label, color }) => (
          <Link
            key={key}
            to={CHARACTER_ROUTES[key]}
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
                  ? 'border-[rgba(255,170,212,0.6)] text-[#ffaad4] bg-[rgba(255,170,212,0.08)]'
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
            <button className="px-4 py-1.5 rounded-full text-xs font-mono border border-[rgba(255,170,212,0.6)] text-[#ffaad4] bg-[rgba(255,170,212,0.08)]">
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
      {activeTab === 'overview'            && <OverviewTab />}
      {activeTab === 'characters'          && <CharactersIndex />}
      {activeTab === 'characters-asahi'    && <AsahiTab />}
      {activeTab === 'characters-reiko'    && <ReikoTab />}
      {activeTab === 'characters-shion'    && <ShionTab />}
      {activeTab === 'characters-koharu'   && <KoharuTab />}
      {activeTab === 'characters-cyllvia'  && <CyllviaTab />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
        
      </div>

    </div>
  )
}

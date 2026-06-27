import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Divider() {
  return <div className="section-divider my-8" />
}

function SectionHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="font-serif text-lg text-text mb-4 scroll-mt-24">
      {children}
    </h3>
  )
}

function PowerCard({
  icon,
  title,
  symbolizes,
  children,
  danger = false,
}: {
  icon: string
  title: string
  symbolizes: string
  children: ReactNode
  danger?: boolean
}) {
  return (
    <div
      className={`neon-card text-sm text-text-muted space-y-2 border-l-2 ${
        danger ? 'border-l-[#ff6b6b]' : 'border-l-[#7ef5ff]/40'
      }`}
    >
      <div className="flex items-start gap-2 flex-wrap">
        <span className="text-base leading-none">{icon}</span>
        <span className={`font-serif text-base ${danger ? 'text-[#ff9a9a]' : 'text-[#7ef5ff]'}`}>
          {title}
        </span>
      </div>
      <p className="font-mono text-[10px] text-text-faint">
        Symbolizes: <span className="text-text-muted">{symbolizes}</span>
      </p>
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">The Quiet Crow &amp; The Ninja</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN/Hanako-Reina" className="hover:text-[#00e5ff] transition-colors">Hanako Reina</Link>
      <span>/</span>
      <span className="text-[#7ef5ff]">Powers &amp; Abilities</span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HanakoPowersAndAbilities() {
  return (
    <div className="page-container">
      <Breadcrumb />

      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Hanako Reina · TQCTN</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">🪄 Powers &amp; Abilities</h2>
          <p className="text-text-faint font-mono text-sm italic">Powers of The Quiet Crow, The Legend Itself 🪶</p>
        </div>

        {/* Quote */}
        <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic text-sm text-text-muted">
          "I want to protect those I love, so I hold back and cling onto humanity." — Reina
        </blockquote>

        <Divider />

        {/* Passive Powers */}
        <div>
          <SectionHeading id="passive-powers">🔹 Passive Powers (Safe, Ambient Use)</SectionHeading>
          <p className="text-sm text-text-muted mb-5 leading-relaxed">
            These powers manifest gently and support life or convey symbolic emotions. They make her mysterious, graceful, and divine — but not immediately threatening. Some of Hanako's passive powers don't affect her surroundings directly — but instead heighten her mind. Reina, who was once an Anchor Being, her emotional evolution has gifted her with mental faculties far beyond human norms.
          </p>

          <h4 className="font-mono text-xs text-text-faint uppercase tracking-widest mb-4">Daily Powers &amp; Abilities</h4>

          <div className="space-y-4">
            <PowerCard icon="🧠" title="Anchor Mind" symbolizes="Stillness / Self-Awareness (Omniscient)">
              <p>Her exposure to multiversal timelines and emotional compression has given her a brain that operates on quantum logic. She sees probability, cause-effect, and emotional consequence faster than any artificial system. Hanako never needed school or higher education — her understanding of the universe comes from living as its center. Even though she is no longer the anchor of the Naiseikai Universe, she still has her omniscient powers.</p>
            </PowerCard>

            <PowerCard icon="💗" title="Freezing Touch / Air Chill" symbolizes="Love / Healing">
              <p>Her Ice Abilities, along with Temperature Regulation allows her to heal major or minor injuries like wounds or more. It's cold and freezing. Can also soothe trauma and manifest snow.</p>
            </PowerCard>

            <PowerCard icon="🕊️" title="Flying / Flight Manipulation" symbolizes="Freedom / Tranquility">
              <p>Can float, fly, or make herself weightless to move through space like a feather in the wind. Used during high-speed sky traversal. She can also manifest her Crow Wings in her human form, in where she can also take flight too.</p>
            </PowerCard>

            <PowerCard icon="🖤" title="Prolific Eyes" symbolizes="Curiosity">
              <p>Gets to know the full history of a person, including who they are, what they do, and what they like. However, she will never use this to invalidate someone's opinion, because they are entitled to their own bias.</p>
            </PowerCard>

            <PowerCard icon="⚙️" title="Shapeshifting / Morph / Camouflage" symbolizes="Versatility / Adaptation">
              <p>This power allows Reina to adapt to her surroundings no matter the challenges. She can slightly alter her appearance, can change her atomic structure to something else, and can also use her arms to morph into weapons and blades if she wanted. This is both a Passive and Combat Ability.</p>
            </PowerCard>

            <PowerCard icon="🤫" title="Crow Cloak (Invisibility) / Double Perception" symbolizes="Silence / Guardedness">
              <p>She can become partially invisible or blurred, making her harder to perceive or track — connected to her quiet nature. She can make cameras take pictures of their invisible form to show up as actual images.</p>
            </PowerCard>

            <PowerCard icon="🤍" title="Empathetic Telepathy (Telempathy)" symbolizes="Empathy / Observation">
              <p>Reina can subconsciously pick up on someone's past emotional pain and expresses understanding without words. Unlike Telepathy, this only picks up emotions. Not exactly Mind Reading Capabilities.</p>
            </PowerCard>

            <PowerCard icon="😌" title="Warmth Manipulation / Regulation" symbolizes="Endure / Durability">
              <p>She can raise her bodily temperature to hot, warm, cool, or cold. Sometimes for pranks. But it's important when she gets a fever. Fever is hot, and to cure it, she goes cold. It works the opposite way too. Got a cold? Raise it.</p>
            </PowerCard>

            <PowerCard icon="🛞" title="Telekinesis / Psychokinesis" symbolizes="Willpower">
              <p>A power that comes from the mind. She can manipulate energy type aura and control them telekinetically. Her psychokinetic and telekinesis pools are IMMENSE and powerful when used to their max. But she doesn't fully use their full power. She just likes to play with them for fun. Can be both offense and defense when needed. She likes to prank Haruhi with this.</p>
            </PowerCard>
          </div>

          {/* Background Development callout */}
          <div className="callout mt-5 text-sm text-text-muted leading-relaxed">
            <p className="font-mono text-xs text-text-faint mb-2">Background Development</p>
            <p>Hanako's abilities and powers constantly change and evolve subconsciously even when she doesn't know it is happening. New powers come and go, some stay, some leave, and some even change due to Hanako's limitless knowledge of the Multiverse. As The Quiet Crow, her supernatural powers, even her physical abilities, know no limits. She herself states that they feel limitless.</p>
          </div>
        </div>

        <Divider />

        {/* Neutral Abilities */}
        <div>
          <SectionHeading id="neutral-abilities">✨ Neutral Abilities</SectionHeading>
          <div className="space-y-4">
            <PowerCard icon="✨" title="Mythic Rewrite" symbolizes="Selflessness">
              <p>Hanako can rewrite and modify her powers and also narrative lores, along with multiversal labels. She can change their structure, potency, and limits. However, she hasn't used this once, ever, because she thinks it is unnecessary unless there is a reason to. But due to the recent events after Book 1 - EP 10+, she can now use this power freely when given the chance.</p>
              <p className="mt-2">She can also extend this power to rewrite lore of another person if they wanted to change something. But it cannot alter their biological history or DNA markings.</p>
              <p className="mt-2">This ability can also grant people the ability to breathe underwater or in space.</p>
            </PowerCard>

            <PowerCard icon="🌑" title="Dark Confines" symbolizes="Domain / Space Expansion (Manipulation)">
              <p>She considers this ability unnecessary only when given a special case use. She can use this to create a spatial room out of thin air. Can span from a room-size room or infinitely.</p>
            </PowerCard>
          </div>
        </div>

        <Divider />

        {/* Enhanced Physical Abilities */}
        <div>
          <SectionHeading id="physical-abilities">💨 Enhanced Physical Abilities</SectionHeading>
          <p className="text-sm text-text-muted mb-5 leading-relaxed">
            Aside from her supernatural powers, her physical abilities like strength and speed triumph greatly.
          </p>
          <div className="space-y-3 text-sm text-text-muted">
            <div className="neon-card">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">⚡ Speed near FTL (Faster Than Light) and FTT (Faster Than Time)</p>
              <p>In EP 4 of Book 1: When she was young, she broke through time due to her ever growing speed and ran into the Multiversal Gap (Dimensional Edge). She was able to access the Multiverse. But after this event, she is now holding back her speed. She can easily create sonic booms without effort.</p>
            </div>
            <div className="neon-card">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">💪 Immense Strength</p>
              <p>Her strength alone is immense. Despite having a frail look, she can pack a punch. Reina states that her raw strength alone could obliterate a giant mountain into small debris. If she held back immensely, she could destroy a car.</p>
            </div>
            <div className="neon-card">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">⚡ Reflexive Reactions</p>
              <p>Her reflexes are top notch and can sense threats coming from miles away.</p>
            </div>
            <div className="neon-card">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">👁️ Enhanced Senses</p>
              <p>Hearing and Perception are her enhanced senses. She can hear from miles away, and she can see miles away.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Suppressed / Dangerous Powers */}
        <div>
          <SectionHeading id="dangerous-powers">🔸 Suppressed Abilities / Dangerous Powers</SectionHeading>
          <p className="text-sm text-text-muted mb-5 leading-relaxed">
            These powers are sealed or controlled by intense emotional restraint. They show how <em>terrifyingly divine</em> Hanako becomes when pushed beyond her quiet nature.
          </p>
          <div className="space-y-4">
            <PowerCard icon="💔" title='Temporal Collapse ("Universal Peering")' symbolizes="Grief & Regret" danger>
              <p>When submerged in profound sorrow, Hanako's consciousness slips into alternate universes. These timelines show <em>what could have been</em> — but she is absent in all of them, as the <strong>only</strong> Hanako. This power nearly broke time in EP 4. Suppressed since.</p>
            </PowerCard>

            <PowerCard icon="😖" title='Ionic Fracture ("Pulse of the Paralyzed")' symbolizes="High-Induced Anxiety / Panic" danger>
              <p>An uncontrollable cascade of <strong>ionic pulses</strong> triggered by overwhelming anxiety. Creates invisible implosions: crushing air pressure, electronic meltdowns, and microbursts in space. Her version of a panic attack causes environmental breakdowns. She subconsciously isolates herself to avoid this from triggering in social scenarios.</p>
            </PowerCard>

            <PowerCard icon="😡" title='Black Halo ("Crowstorm")' symbolizes="Rage / Frightened" danger>
              <p>A whirlwind of cutting black feathers and violent dark energy surrounds her like a <strong>halo of ruin</strong>. Triggered only when someone she loves is in existential danger. First hinted at during her confrontation with Haruhi in EP 10.</p>
            </PowerCard>

            <PowerCard icon="😱" title="Agonizing Tears" symbolizes="Doleful / Dolefulness" danger>
              <p>When terrified beyond comprehension, if she screams and cries at the same time, her voice acts like a gravitational distortion — bending air, cracking glass, and collapsing nearby spatial anchors. Tears would come out as very potent bombs. She once destroyed a solar system light years away, which also caused rebirth. The power of Ying and Yang.</p>
            </PowerCard>

            <PowerCard icon="💤" title='Feather Memory ("Dreamwalk")' symbolizes="Nostalgia" danger>
              <p>Hanako can walk into others' dreams or memories — but if she's hurting, she may <em>remove herself from them</em>. This memory self-deletion is a silent form of self-harm. She's done this at least once before the series began.</p>
            </PowerCard>
          </div>
        </div>

        <Divider />

        {/* Anchor Being Status */}
        <div>
          <SectionHeading id="anchor-being">🕊️ Anchor Being Status</SectionHeading>
          <div className="callout text-sm text-text-muted leading-relaxed space-y-3">
            <p className="font-mono text-[10px] text-text-faint">MYTHDROP REFERENCE (EP 4, 9, EP 10, & 11)</p>
            <p>Hanako Reina is not just <em>a</em> Quiet Crow — she was <strong>the only one</strong> across the entire multiverse, which was changed after EP 10+.</p>
            <p>Her existence <em>anchors</em> this specific universe's emotional, spiritual, and metaphysical structure.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Other universes have no Hanako.</li>
              <li>When she glimpsed alternate timelines (via <strong>Temporal Collapse</strong>), she realized this terrifying truth:</li>
            </ul>
            <blockquote className="border-l-2 border-[#7ef5ff]/30 pl-4 italic">
              ➤ She's alone not by circumstance… but by <strong>design</strong>.
            </blockquote>
            <p>The implications? If she <strong>died or lost control</strong>, <em>this entire universe</em> could unravel. Her silence is sacred. Her love is cosmic. Her sorrow is <strong>universal</strong>.</p>
            <p>But after she rewrote her status as the Anchor to be free of the Multiverse, it no longer unravels and just obeys the linear timeflow of all time-related physics. Her powers are still intact too. Plus, new Hanako Reinas across the multiverse eventually came to be.</p>
          </div>
        </div>

        <Divider />

        {/* Hidden Symbolism Table */}
        <div>
          <SectionHeading id="symbolism">🧩 Hidden Symbolism in Her Powers</SectionHeading>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm text-text-muted">
              <thead>
                <tr className="border-b border-white/10 bg-[rgba(255,255,255,0.03)]">
                  <th className="text-left font-mono text-xs text-text-faint px-4 py-3 w-1/3">Power</th>
                  <th className="text-left font-mono text-xs text-text-faint px-4 py-3">Real-World Symbolism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { power: 'Crow Cloak', symbolism: 'In many cultures, crows represent mystery, death, or truth hidden in shadows. Her cloak is both protective and a reflection of being unseen.' },
                  { power: 'Temporal Collapse', symbolism: "Mirrors the myth of Odin's ravens (Huginn & Muninn), which represent thought and memory — she transcends them." },
                  { power: 'Featherfall', symbolism: 'Japanese folklore connects feathers to angelic beings or tengu, both of which exist between worlds. Hanako floats between life and oblivion.' },
                  { power: 'Vocal Collapse', symbolism: 'Echoes the Biblical Angelic Proclamation, where the voice of heaven shakes the Earth — thus why she must stay silent.' },
                  { power: 'Freezing Touch', symbolism: "Ice is often used to preserve the purest emotions — her love is so cold because it never decays. It also heals her emotionally." },
                ].map(({ power, symbolism }) => (
                  <tr key={power} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-[#7ef5ff]">{power}</td>
                    <td className="px-4 py-3 leading-relaxed">{symbolism}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Divider />

        {/* Powers Come at a Cost */}
        <div>
          <SectionHeading id="cost">🧊 Her Powers Come at a Cost</SectionHeading>
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            <p>While Hanako Reina's powers stem from love, sorrow, and emotional resonance, their use comes with <strong>devastating personal and cosmic consequences</strong>:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Ionic Fracture</strong> resulted in the destruction of <strong>2,300 ward buildings and countless lives</strong>. Her anxiety became weaponized, leading to irreversible tragedy.</li>
              <li>In <strong>EP 10 of Book 1</strong>, under intense emotional pressure, her <strong>hair changed from brown to black and red</strong>, symbolizing the irreversible toll of stress. It happened from childhood all the way to her teen years — akin to how humans grow grey hair from trauma, but <strong>faster and more violently</strong>.</li>
              <li>After the disaster, she <strong>fled to isolation</strong>, often choosing remote ends of the Earth like the <strong>South Pole</strong>, or even the <strong>Moon</strong>, thanks to a passive mutation: her body developed an adaptive trait that allows her to <strong>breathe in space</strong>, a byproduct of her dangerous powers evolving over time.</li>
            </ul>

            <div className="neon-card mt-2">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">❄️ Cryostasis Egg Reformation</p>
              <p>When alone, her body naturally cocoons itself in an <strong>ice-layered shell</strong> — an igloo-like form that manifests as a protective <strong>cryostasis</strong>, keeping her dormant for up to a day. This is when her physical form began changing — her hair losing its warmth and taking on black and red hues permanently. This happens when her volatile emotions are triggered.</p>
              <p className="mt-3 font-mono text-xs text-text-faint mb-1">Her Heterochromatic Eyes</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><span className="text-[#c8a060]">Right Eye — Brown:</span> signifies her humanity with humans. She covers this with an ice-patch (eyepatch) that can be seen through like a one way glass. If she wanted, she can override her supernatural status to shift brown to red when needed.</li>
                <li><span className="text-[#ff6b6b]">Left Eye — Red:</span> signifies her mythic and supernatural powers. The origin of her abilities, along with the Karasu Reinishi Status. This supernatural color is interlocked — it stays there.</li>
              </ul>
              <p className="mt-3 italic text-text-faint text-xs">These changes are not just physical. They mark her spiritual withdrawal from humanity — the emotional scar tissue of a being who is both protector and a catastrophic threat to her own world.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Nav */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <Link to="/titles/KarasuToNinja-TQCTN/Hanako-Reina" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
            ← Hanako Reina
          </Link>
          <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
            ↑ All Characters
          </Link>
        </div>

      </div>
    </div>
  )
}

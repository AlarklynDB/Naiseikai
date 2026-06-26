import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// ─── Shared helpers ───────────────────────────────────────────────────────────
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

function IdentityBlock({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
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

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">The Quiet Crow &amp; The Ninja</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#ff6b9d]">Hanako Reina</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────

function HanakoReinaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/hanako-reina.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Hanako Reina</h2>
        <p className="text-text-faint font-mono text-sm italic">"My love burns like ice, even if it's hot"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Hanako' },
            { label: 'Last Name', value: 'Reina' },
            { label: 'Nickname', value: 'Rei-chan, Hana' },
            { label: 'Gender', value: 'Female / Futa / Intersex (She/Her/Hers)' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 16th, 2076' },
            { label: 'OC Date of Creation', value: '2025' },
            { label: 'Height', value: '154.94 cm (5\'1")' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
              <p className="text-sm text-text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Nicknames */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Nicknames</h3>
        <div className="space-y-3 text-sm text-text-muted">
          <div className="neon-card">
            <p className="text-[10px] font-mono text-text-faint mb-2">General</p>
            <p>Rei-chan, Hana</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Rei-Rei by Asami (and sometimes from Haruhi)</li>
              <li>Hana (used by Ruruka)</li>
              <li>Inaha from Haruhi</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="text-[10px] font-mono text-text-faint mb-2">Aru's Nicknames for Reina!!!</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sometimes Reina-chii, Mother Crow, or Crow Lady from Little Bunny Aru</li>
              <li>Nako Nako</li>
              <li>Big Dark Emo Bird from Little Aru if unhinged</li>
              <li>Crow Mommy #2</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Hanako's Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Hanako Reina, is an estranged girl who grew up in an abusive relationship with her parents. Her parents viewed her as inferior and she was later kicked from the family. Despite her shortcomings, Hanako is very optimistic, and knows what is right or wrong. However, even though people shun her for who she is, it puts a lot of anxiety and stress. She suffers from trauma and PTSD, and often has severe anxiety attacks out of nowhere, and people don't help her despite some that do. It still doesn't change the fact that her emotions are very fragile, easy to break.</p>
          <p>She was laid off her job, Customer Service from retail, and evicted from her apartment. The only place she could turn to is a free shelter, and works at a cat daycare as a temporary job. The people there are nice and mean no harm to her.</p>
          <p>One day, however, alone at a park, her cries to herself escaped from her voice (loud but quiet). She was saved by a lovely person by the name, Koa Ruruka, who saw nothing but pity and sadness for Hanako. She took her in to care for her. The first two days, Ruruka recommended Hanako to work a Bunny Cafe, since she noticed that Hanako loves bunnies (Haruhi's Usagi Cafe!).</p>
          <p>A few months living with Ruruka, Hanako confessed her feelings to Ruruka, unable to contain her emotions for her. She loves her in a romantic way, but Koa dodges that until her feelings for Hanako change.</p>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Lighthearted and chill (literally). She opens to those who aren't intrusive or loud. But other than that? She's very laidback with the people she meets. In fact, she's friends with almost everyone in the Usagi Cafe she works at, not just Haruhi, but even regular customers! The people there love how far she has come as a person, from that soft timid girl to a girl with an open personality. She always holds back just in case something happens.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>With her closest friends Haruhi and Ruruka (Ruruka being her girlfriend now), Reina becomes warm and bubbly around them. Best friends with Haruhi since she allowed Reina to grow naturally at her own pace. In fact, Haruhi doesn't know this but Reina deeply treasures her for who she is right now, not just her past. But with Ruruka…..<em>oh things are spicy.</em> Ruruka craves affection and touch now that she's trying to change for the better. She often asks Reina for kisses and hugs even if she doesn't. Reina is warm and bubbly around Ruruka because she loves her very much now. In fact, Ruruka doesn't know this but Reina loves her so much, that she would kill anyone who stands in their way (Not Haruhi). Reina is a gremlin whenever Little Aru is around.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self with her Powers">
          <p>Reina's powers aren't all that dangerous. She has passive powers that she likes to use daily when the opportunity arises. She took Ruruka on a ride in her giant bird form once. Pranked Ruruka with her small bird form! Often likes to prank Haruhi with Telekinesis. She can also extend her powers to make both her friends feel equal to her if they request of it. Freezing Touch is one of her favorite abilities.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>The silence that Reina treats to is how she heals herself. It's not just her powers telling her how to heal, it's how she survives, even at a young age. Often cold and quiet, sometimes shrinks when arguments arise, but she never takes it too personally. Despite being intersex with male and female systems, she tries not to degrade her own body or feel insecure about it. Because of Ruruka's words that she accepts her for who she is, Reina is trying her best to treasure her own body for who she is.</p>
          <p>Sometimes would get….<em>aroused</em> if Ruruka does something…….off putting or….<em>tempting</em>.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self with her Powers">
          <p>Reina holds back, obviously. But even with these absurd supernatural powers, she doesn't want to hurt Ruruka or Haruhi. Because she's trying to love them equally as they love her for who she is, even if its the front she puts on, or her own hidden self.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Trauma is the root of her hidden self which is why she retreats to her core self. Ever since a child, she's been victimized by her parents and also from people who abuse her out of nothing. It's not just abuse, but also verbal through gossip and other means, which hurts her soul. Even her own parents (now dead) viewed her as inferior and a tool. Tried to strip her agency by trying to get surgery for both of her "uniqueness." She'd often end up getting sent to different wards from the YARC so that they could test her capabilities as a yokai, not as a human or a person. Each time she goes, her anxiety and emotions would explode, causing massive large scale destructions at the YARC's laboratories and buildings. She's destroyed over 2,300 ward buildings and killed lots of yokai representatives from the YARC.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self with her Powers">
          <p>Her relationships with her own powers are tied emotionally. A Pressure Cooker. If pushed too far, she would explode in a fit of either: Rage, Grief, Regrets, Burdens….etc. Her powers are extremely dangerous, aside from her passive ones. Think like Mob Psycho 100, but there's no cap or limiter to restrain these powers within Reina. She also develops new powers subconsciously because her powers are like background instruments. They change and add new stuff to her arsenal.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* She's a Living Legend */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">She's a Living Legend</h3>
        <div className="callout text-sm text-text-muted leading-relaxed">
          <p className="italic">"The Quiet Crow came from the Reinishi Family in 1809. It came from the 3rd generation from a dark magician from the name, Karasu Reinishi. When he died, his spirit lingered through the world, in the form of a Crow that couldn't make sound," <em>I recited from the top of my head, and it made Ruruka get shivers as I stared at her</em> "His spirit became too attached to this world, so as time passed, it wandered into the generation of the Reinishi Family, which was now known as The Reina Generation.."</p>
          <p className="mt-3 italic">"and that girl was sitting on the couch next to a ninja who was casted out from her family...." <em>my tone changed back to normal as my eyes' glow faded, which made Ruruka get shivers as she confirmed herself that the legend was real.</em></p>
        </div>
      </div>

      <Divider />

      {/* Age Biology & Anatomy */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Biology &amp; Anatomy</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👤 Age Biology</p>
            <p>Reina, despite looking like an adult of 24 years, will remain at that appearance even as she ages. Yokai Blood are different from humans. In a general sense, Yokais age like human babies until age 17. But it stops after the age of 18 (which is adult age), which slows down significantly. This process also applies to Haruhi Aoi.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👧 Anatomy</p>
            <p>Reina's anatomy as an intersex is strange yet very unique. Despite being born as a girl, she has both male and female systems. However, the curse that Karasu put on the Reina Generation disallowed her to get pregnant or give kids (because she doesn't have the reproductive organs like testes).</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Relationships & Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Relationships &amp; Personality</h3>
        <div className="space-y-3">
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Relationships</p>
            <p>She is happily taken, Koa Ruruka's girlfriend</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Sexuality</p>
            <p>From straight to gay (lesbian). Living with Ruruka has opened her up, even when she goes to work at the bunny cafe. She later confessed her love to Ruruka.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p>She's very shy and timid, only speaks up when she can. However, she's optimistic and bright when she opens up to someone she trusts. And when she does, she becomes happy and energetic, wanting to share her interests. Working at the Bunny Cafe Ruruka referred helped her change her personality to be more open.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p>She likes cats and dogs, and bunnies. Music is also something she likes.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p>Loud noises and rude people. Toxic traits. Hates it when people sexualize her timid side, or just in general. Extremely violent people will cause her to have panic attacks.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <p>She enjoys drawing, she likes to write too. Enjoys Manga and Anime.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Appearance</p>
            <p>She has black hair with red highlights, and it's medium long, where it ends to her shoulders. She has heterochromatic eyes. Brown on her right eye , red on her left. However, she hates the color combination and wears an ice-patch (eye-patch) on her brown eye. Her ice patch is made of packed ice and acts as a one way mirror for Hanako. She can see through it, but other people can’t. It is tucked beneath her bangs.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Clothing (Usual / Casual)</p>
            <p>She wears a white casual off shoulder-dress that has a navy gray stripes as patterns. It goes well with a black mesh bra underneath. She wears black loose shorts underneath that covers her "genitalia" so it won't be exposing. She is very modest about her apparel.</p>
            <p className="mt-2">She's 154.94 cm tall! (5'1)</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">花心 - Hanako &amp; 麗水 - Reina</h3>
        <div className="space-y-4 text-sm text-text-muted">
          <div className="callout">
            <p className="font-serif text-base text-[#7ef5ff] mb-2">🌸 Hanako (花心) – First Name Breakdown:</p>
            <p className="font-mono">花 (Hana / はな) = <strong>Flower</strong></p>
            <p className="font-mono">子/心 (Ko / こ) = <strong>Heart</strong> <em>or</em> <strong>Child</strong></p>
            <p className="text-text-faint text-xs mt-2">The Kanji for "Ko" doesn't really matter to Hanako as long as it pairs nicely with Flower</p>
            <p className="italic mt-2">The heart of a flower; delicate, yet essential</p>
          </div>
          <div className="callout">
            <p className="font-serif text-base text-[#d49fff] mb-2">💧 Reina (麗水) – Last Name Breakdown:</p>
            <p className="font-mono">麗 (Rei / れい) = <strong>Beautiful</strong>, <strong>Lovely</strong></p>
            <p className="font-mono">水 (Mizu / みず) = <strong>Water</strong></p>
            <p className="italic mt-2">Beauty that flows like water—formless, adaptive, and enduring</p>
          </div>
          <div className="text-center font-mono text-text-faint text-xs py-2">─────⊰ ✦ ⊱─────</div>
          <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic text-text-muted">
            "A Flower's Heart is as beautiful as water itself"
          </blockquote>
          <div className="text-center font-mono text-text-faint text-xs py-2">─────⊰ ✦ ⊱─────</div>
        </div>
      </div>

    </div>
  )
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function HanakoReinaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <HanakoReinaTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" className="btn-neon-purple text-xs">Koa Ruruka →</Link></div>
      </div>
    </div>
  )
}

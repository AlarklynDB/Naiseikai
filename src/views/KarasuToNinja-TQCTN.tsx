import { useState } from 'react'
import { Link } from 'react-router-dom'
import DisqusComments from '../components/DisqusComments'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'characters' | 'characters-haruhi' | 'characters-ruruka' | 'characters-reina' | 'characters-aru' | 'characters-asami'

// ─── Image Placeholder ───────────────────────────────────────────────────────

function ImgPlaceholder({ label, aspect = 'aspect-[3/4]' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 my-6`}>
      <span className="text-3xl opacity-20">🖼</span>
      <span className="text-[10px] font-mono text-text-faint opacity-50">{label}</span>
    </div>
  )
}

// ─── Section divider ─────────────────────────────────────────────────────────

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Identity block ───────────────────────────────────────────────────────────

function IdentityBlock({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
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

// ─── Overview Tab ────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      {/* Book Banner Placeholder */}
      <ImgPlaceholder label="/titles/tqctn-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Vol 1 · Book 1 · Published</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#7ef5ff] mb-1">
          The Quiet Crow &amp; The Ninja
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">静かなカラスと忍者 / Shizukana Karasu to Ninja!</p>
        <p className="text-text-faint text-xs font-mono leading-relaxed">
          Also known as: The Crow and The Ninja / Karasu no Ninja! / The Crowless Crow and The Ninja
        </p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Date Created', value: '5/31/2025' },
          { label: 'Writing Finished', value: '7/16/2025' },
          { label: 'Series Status', value: 'Ongoing' },
          { label: 'Vol / Book', value: 'VOL 1 – Book 1 – Published' },
          { label: 'Original Publish', value: 'December 10, 2025' },
          { label: 'Republished (B&N)', value: 'March 5, 2026' },
          { label: 'Story Setting', value: 'Neo Tokyo — Ruruka\'s Apartment Complex or Haruhi\'s Usagi Cafe' },
          { label: 'Type', value: 'Original English Light Novel (OELN)' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-4">
            <p className="text-[10px] font-mono text-text-faint mb-1">{label}</p>
            <p className="text-sm text-text-muted">{value}</p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Girls' Love", "Romance", "Supernatural"].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
        <p className="text-[10px] font-mono text-text-faint mb-2">Sub-Genres</p>
        <div className="flex flex-wrap gap-2">
          {["Yuri (Shoujo AI, GL)", "Slice Of Life", "Drama", "Ecchi (Erotic)"].map(g => (
            <span key={g} className="tag">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed italic">
            "When exiled ninja Koa Ruruka becomes roommates with Hanako Reina—a gentle girl wrapped in urban legends…?
            The line between protection and love blurs..."
          </p>
        </div>
      </div>

      <Divider />

      {/* Book Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Blurb</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed space-y-3">
          <p>
            Exiled ninja Koa Ruruka finds her world upended when she meets Hanako Reina, known as the Quiet Crow.
            Reina—a soft-spoken girl wrapped in yokai legend—is nothing like the enemies Ruruka has been trained to face.
            Yet something about her gentle presence cuts through all of Ruruka's defenses.
          </p>
          <p>
            When Ruruka offers Reina a place to stay after finding her in tears at a park, what begins as a protective
            gesture slowly becomes something neither of them expected. As roommates in Neo Tokyo's hidden world, lines blur—
            between guardian and beloved, between exile and belonging, between a crow too quiet for her own legend and a
            ninja too loud for her own silence.
          </p>
        </div>
      </div>

      <Divider />

      {/* Long Summary */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Summary</h2>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
          <p className="text-[#7ef5ff] font-serif italic text-base">Where Trauma and Patience mends with Love…..</p>
          <p>
            Koa Ruruka is a high-class ninja from the prestigious Koa Clan of Hiroshima Prefecture—wealthy,
            skilled, and raised in a world where bloodlines mean everything. She is exiled from her clan for
            the unforgivable crime of being a lesbian. Stripped of her name and ties, she rebuilds her life
            alone in Neo Tokyo, working as an interior designer by day and a bartender by night, keeping everyone
            at arm's length behind a warm, outgoing exterior.
          </p>
          <p>
            One night, she finds Hanako Reina—a girl with black hair and mismatched eyes, crying quietly alone
            in a park. Something about Reina stops Ruruka cold. She takes her home.
          </p>
          <p>
            Reina, known to urban legend as the Quiet Crow, carries her own scars: abusive parents who kicked
            her out, a retail job that let her go, an eviction that left her at a shelter. She is gentle,
            soft-spoken, and deeply lonely. She finds work at Haruhi's Usagi Cafe—a bunny café run by Ruruka's
            best friend—and slowly builds a new life from the wreckage of her old one.
          </p>
          <p>
            As the two become roommates, something shifts. Reina confesses her feelings first. Ruruka, who had
            seen Reina as a daughter figure, is caught off guard—and realizes, slowly, that her feelings are
            anything but simple. On Ruruka's birthday, Reina gives her a handmade ice snowflake necklace with
            both their names engraved. Ruruka cries. And then she asks Reina out.
          </p>
          <p>
            <em>The Quiet Crow & The Ninja</em> is a slow burn Girls' Love story about two women healing together—
            one who was exiled for loving, and one who was abandoned for being too much. It is about protection
            evolving into partnership, about the way trauma teaches you to hold yourself apart, and how
            patience—and the right person—can teach you to let someone in.
          </p>
        </div>
      </div>

      <Divider />

      {/* Books 2 & 3 */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book 2 &amp; 3</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-faint italic">Information Coming Soon</p>
        </div>
      </div>

      <Divider />

      {/* Perfect For */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Perfect For Readers Who Love…</h2>
        <ul className="space-y-2">
          {[
            "Slow burn romance that actually pays off",
            "Girls' Love (GL / Yuri / Shoujo AI)",
            "Deep, layered character development",
            "Soft supernatural elements woven into everyday life",
            "Trauma healing arcs that don't rush the process",
            "Found family dynamics",
            "Sapphic tenderness and emotional intimacy",
            "Emotionally repressed characters slowly opening up",
            "Poetic, lyrical writing with a cinematic feel",
            "Worlds shaped more by feelings than by fights",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="text-[#7ef5ff] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Plot Background */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">About the Book</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            <em>The Quiet Crow &amp; The Ninja</em> is an Original English Light Novel (OELN) by Alarkius Elvya Jay,
            published as part of the Naiseikai Universe. The novel blends drama, light fantasy, and slow-burn Girls' Love,
            written in the style of Japanese light novels with a JP-style trim. Originally published on Amazon Kindle and
            in paperback format.
          </p>
        </div>
      </div>

      <Divider />

      {/* Where to Read */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Avaliable on B&N!</h2>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-sm text-[#7ef5ff] mb-2">Barnes &amp; Noble</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>Paperback — <span className="text-text">$15.75 USD</span> <span className="text-text-faint text-xs">(no interior color)</span></p>
              <p>Premium Paperback — <span className="text-text">$17.99 USD</span> <span className="text-text-faint text-xs">(colored interior)</span></p>
            </div>
            <a
              href="https://www.barnesandnoble.com/s/alarkius-elvya-jay"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan text-xs mt-4 inline-block"
            >
              Buy on Barnes &amp; Noble →
            </a>
          </div>
          <div className="neon-card">
            <p className="font-mono text-sm text-[#d49fff] mb-1">Honeyfeed</p>
            <p className="text-sm text-text-faint">Also available on Honeyfeed — free to read online.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Characters Listed */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters</h2>
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-text-faint">Main Characters</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Hanako Reina', 'Koa Ruruka', 'Haruhi Aoi', 'Little Bunny Aru'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-text-faint">Support</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="tag">Fuuka Ryoko</span>
          </div>
          <p className="text-[10px] font-mono text-text-faint">Upcoming</p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Asami Kurose</span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Hanako Reina ────────────────────────────────────────────────────────────

export function HanakoReinaTab() {
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
            { label: 'Gender', value: 'Female / Futa / Intersex (She/Her/Hers)' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 16th, 2076' },
            { label: 'Height', value: '154.94 cm (5\'1")' },
            { label: 'Sexuality', value: 'From straight to gay (lesbian)' },
            { label: 'Relationship', value: 'Ruruka\'s girlfriend; Haruhi\'s best friend' },
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
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">General — </span>Rei-chan, Hana, Rei-Rei (Asami / Haruhi), Inaha (Haruhi), Hana (Ruruka)</p>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Reina-chii', 'Mother Crow', 'Crow Lady', 'Nako Nako', 'Big Dark Emo Bird', 'Crow Mommy #2'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Hanako Reina grew up in an abusive household and was eventually kicked out by her family. She was later laid off from her retail customer service job, then evicted from her home. She stayed in a shelter before finding her footing.</p>
          <p>She now works at a cat daycare. One evening, she was found crying alone in a park by Koa Ruruka, who took her in. Through Ruruka, she was referred to Haruhi's Usagi Cafe (a Bunny Cafe) for work. In time, she confessed her feelings to Ruruka.</p>
        </div>
      </div>

      <Divider />

      {/* Living Legend */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Living Legend — The Quiet Crow</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            She is known in urban legend as the <em>Quiet Crow</em> — a figure belonging to the ancient Reinishi Family,
            also called the <em>Karasu Reinishi</em>. The lineage she belongs to is known as The Reina Generation.
            Her presence in the world of yokai carries weight beyond what her gentle exterior suggests.
          </p>
          <p>
            A living legend who walks quietly, speaks softly — but whose very existence rewrites the rules of what a Crow Yokai can be.
          </p>
        </div>
      </div>

      <Divider />

      {/* Anatomy / Age Biology */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Biology &amp; Anatomy</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Age Biology</p>
            <p>She appears to be 24 forever — yokai aging stops at 18, after which it slows down significantly.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Anatomy</p>
            <p>Intersex — carries both male and female biological systems. She was cursed by Karasu to not have reproductive organs (no testes).</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Lighthearted and laidback in social settings. She holds back just in case — a practiced softness that hides how much she feels at any given moment.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>Warm and bubbly with Haruhi and Ruruka. Ruruka craves affection from her deeply. Around Little Aru, Reina becomes an absolute gremlin — chaotic energy fully unlocked.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="Personal Self with Powers">
          <p>Her powers are passive in daily life. She once took Ruruka on a ride in giant bird form. She pranked Ruruka in small bird form. Her favorite ability? Freezing Touch.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>Silence is how she heals. She doesn't degrade her intersex body — because of Ruruka's acceptance, she's learned to hold herself without shame.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Powers">
          <p>She holds back deliberately — she doesn't want to hurt Ruruka or Haruhi. Control is an act of love for her.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>She was victimized by her parents through years of verbal abuse. When the YARC tested her, her anxiety exploded — destroying over 2,300 YARC ward buildings and killing yokai in the process. She carries this quietly.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="Hidden Self with Powers">
          <p>Her powers are tied to her emotional state. Think of it as a pressure cooker — no cap, no limiter. She develops new powers subconsciously. Even she doesn't always know what she's capable of until it happens.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Black with red highlights, medium-long length ending at the shoulders.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Heterochromatic: brown (right), red (left). Wears an eyepatch over the brown eye.</p>
          <p><span className="text-text-faint font-mono text-xs">Casual Outfit — </span>White casual off-shoulder dress with navy gray stripes, black mesh bra underneath, black loose shorts.</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Shy and timid at first. Optimistic and bright once she opens up. Energetic. Loves sharing her interests.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">Cats, dogs, bunnies, music.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Loud noises, rude people, toxic traits, people who sexualize her timid side, extremely violent people — these trigger panic attacks.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Drawing, writing, manga & anime.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>花心 <span className="text-text">Hanako</span> — 花 = Flower, 子/心 = Heart / Child</p>
          <p>麗水 <span className="text-text">Reina</span> — 麗 = Beautiful / Lovely, 水 = Water</p>
          <p className="text-text-faint italic not-italic font-sans mt-2">"A Flower's Heart is as beautiful as water itself"</p>
        </div>
      </div>

    </div>
  )
}

// ─── Koa Ruruka ──────────────────────────────────────────────────────────────

export function KoaRurukaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/koa-ruruka.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Koa Ruruka</h2>
        <p className="text-text-faint font-mono text-sm italic">"She's the one. My one and only."</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Koa' },
            { label: 'Last Name', value: 'Ruruka' },
            { label: 'Full Name', value: '瑠月琥空' },
            { label: 'Gender', value: 'Female' },
            { label: 'Sexuality', value: 'Lesbian' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 2nd, 2076' },
            { label: 'Height', value: '167.64 cm (5\'6")' },
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
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">General — </span>Koa-chan, Ruruka, Ruru-chii (Reina / Haruhi), Ko-achii, Ururu (Haruhi), Koru / Koara / Koala (Asami)</p>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Purple Lady', 'Mommy #3', 'Ninja Lady', 'Thwacky Parkour Mommy #3', 'BIG OPPAI NINJA'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Koa Ruruka comes from a wealthy ninja heritage — the Koa Clan of Hiroshima Prefecture. She was exiled from her clan for the unforgivable reason of being a lesbian. The Koa Clan holds that only the union of man and woman is sacred. The NYAQ and Ujuukyō disagree.</p>
          <p>She found Hanako Reina crying alone in a park one night. She took her in. At first she saw Reina as a daughter figure. But Reina confessed her feelings. Ruruka was caught off guard — her emotions were more complicated than she expected.</p>
          <p>Reina gave Ruruka a handmade ice snowflake necklace with both their names engraved. Ruruka cried. And then, on her birthday, she asked Reina out. They are now dating.</p>
        </div>
      </div>

      <Divider />

      {/* The Koa Clan */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Koa Clan</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>The Koa Clan hails from Hiroshima Prefecture. The full clan name is <span className="font-mono text-text">"Koaru-hanaeitana-kayamei-mizukana"</span>, split into 15 generations. One descendant is a half-dragon, half-human hybrid.</p>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Outgoing and warm. She meets new people easily — yokai and human alike. Naturally motherly. People feel safe around her.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>Deeply trusts Reina, Haruhi, and Aru. Soft and fully open with them. Sweet with Reina since they started dating — she pampers her. Loves giving Aru headpats.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>Always holds her guard. Trained to protect herself first. Reina has been slowly teaching her that equality matters more than self-preservation. It's a work in progress — and it's changing her.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Haruhi">
          <p>They dated in high school for about 2 years. Haruhi once confided in Ruruka about her past with Asami — Ruruka was furious. She tracked Asami down and gave her words. She can't kill due to YHCA laws, but she made her point.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤐" title="The Hidden Self">
          <p>Stoic beneath the warmth. The Koa Clan exile troubled her more than she shows. She trusts her intuition fiercely — always knows right from wrong, even when everything around her is wrong.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="Hidden Self — Full Tragedy">
          <p>A training mission went wrong. She unsealed a cursed coffin — spirits escaped and corrupted her parents. Her parents were impaled on a fence. She witnessed it.</p>
          <p>The Koa Clan blamed her. She was imprisoned for 2 years. Then she stole a forbidden tome and used it on her parents' graves — her parents returned, but as twisted homunculi. The tome cursed her with 400 years of slowed aging.</p>
          <p>She was imprisoned for 4 more years. She broke four laws in total. The final, unforgivable reason for her exile? Being a lesbian.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Ninja Status &amp; Abilities</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p><span className="font-mono text-xs text-text-faint">Classification — </span>High class human ninja.</p>
          <p><span className="font-mono text-xs text-text-faint">Power — </span>Can pulverize a factory-sized building. If she stopped holding back, she could destroy a state-wide city.</p>
          <p><span className="font-mono text-xs text-text-faint">Speed — </span>90–120 mph in under 15 minutes. Trained at Japan National Stadium. Nickname: "Speed Demon."</p>
          <p><span className="font-mono text-xs text-text-faint">Tools — </span>Shadow Tomes, Runes, Talismans, Glyphs, spells, Kunai, Shurikens, Swords.</p>
          <p><span className="font-mono text-xs text-text-faint">Vision — </span>Cat and bat vision — sees clearly in the dark for miles. Hilariously, she mistakes planes for birds and shopping bags for Vapor Spirits.</p>
          <p><span className="font-mono text-xs text-text-faint">Reflexes — </span>Under 10ms (close to the Condylostylus fly; better than cats at 20ms). Emotionally, though? Dense and slow.</p>
        </div>
      </div>

      <Divider />

      {/* Jobs */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Jobs</h3>
        <div className="flex flex-wrap gap-2">
          {['Interior Designer / Judge (day)', 'Bartender (night)', 'Freelance pet caretaker'].map(j => (
            <span key={j} className="tag tag-cyan">{j}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Long purple-brown hair.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Amethyst.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>Often wears ninja clothing; switches to casual on days off.</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Outgoing, extroverted. Acts like a mom to everyone around her — but only truly spoils Hanako. Strange yet mysterious. Loves being open.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">All kinds of animals. Music.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Abusive parents. Toxic traits.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Playing with dogs, cats, and bunnies.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>琥空 <span className="text-text">Koa</span> — 琥 = Amber, 空 = Sky</p>
          <p>瑠月 <span className="text-text">Ruruka</span> — 瑠 = Lapis lazuli, 月 = Moon</p>
          <p className="font-sans text-text-faint italic mt-1">Full name: 瑠月琥空</p>
        </div>
      </div>

    </div>
  )
}

// ─── Haruhi Aoi ──────────────────────────────────────────────────────────────

export function HaruhiAoiTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/haruhi-aoi.jpg" aspect="aspect-[3/4]" />
      <ImgPlaceholder label="/characters/haruhi-ears.png (Haruhi's Ears diagram)" aspect="aspect-video" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Haruhi Aoi</h2>
        <p className="text-text-faint font-mono text-sm italic">"Think Bunnies! Soft….cute…and fluffy!"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Haruhi' },
            { label: 'Last Name', value: 'Aoi' },
            { label: 'Gender', value: 'Female' },
            { label: 'Race', value: 'Bamboo Rabbit (or Bunny)' },
            { label: 'Sexuality', value: 'Bisexual' },
            { label: 'Age', value: '26' },
            { label: 'Birthday', value: 'July 16th, 2075' },
            { label: 'OC Created', value: '2025' },
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
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">General — </span>Haru-chan</p>
          <div className="space-y-1">
            <p><span className="text-text-faint font-mono text-xs">Ruruka — </span>Ruhi-tan (ninja formality, roll/growl the R), Aru (when they were still together)</p>
            <p><span className="text-text-faint font-mono text-xs">Asami — </span>Ao-chii</p>
            <p><span className="text-text-faint font-mono text-xs">Reina — </span>Aoru (rarely), Haru-chii (roll/growl the R)</p>
          </div>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Mother Haru', 'GREEN LADY', 'Mommy #1', 'Green Mother Haruhi', 'Weed Girl (garden terms)', 'Bamboo Girl', 'Thorny Plant Girl'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Haruhi Aoi is the owner of Usagi Cafe, a cafe full of bunnies that she takes care of. She comes from the plains and farmlands, having owned a farm once — but it was tragically destroyed in a hurricane when she was in middle school (after graduation). Somehow, most of her animals survived, including her rabbits and bunnies. She later moved to Tokyo to look for work and attend high school.</p>
          <p>That was where she met her best friend, Koa Ruruka.</p>
          <p>Haruhi is a Shifter — a Bamboo Bunny. Her ears are able to pick up:</p>
          <ul className="space-y-1 ml-4">
            {[
              'Vibrations — at different levels',
              'Frequencies — frequencies that can\'t be perceived by human standards',
              'Emotions (they are empaths) — able to emotionally call out others on their mistakes and guide them through softness and validation. Non-judgmental creatures. Listening is their strength.',
              'They are friendly, sociable, and extroverted.',
              'And Five: they\'re absolutely cute, and they show platonic love.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#ffaad4] mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      {/* Life Before Tokyo */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Life Before Tokyo</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>She used to be from Sapporo (Hokkaido, Japan), where her farms were. She owned horses, cows, rabbits and bunnies, sheep, Snow Spirits, and lots of crops — until a hurricane wrecked her farm. The only animals that survived were her bunnies and rabbits.</p>
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-2">In Sapporo…</p>
            <p>She met her first girlfriend in her first year of high school — Asami Kurose (before the hurricane). They dated, but Haruhi broke up with her because of an abusive relationship. The hurricane happened a week after.</p>
            <p className="mt-2">She then moved to Tokyo with her surviving rabbits and bunnies to start anew.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Extremely social and extroverted with everyone she knows. She's the one who starts up conversations about board games even when friends are over, not just Ruruka or Hanako. Warm and bubbly. Sometimes an airhead, sometimes serious. The soft comedic relief. Easy to get along with and cutely lovable.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>With her closest friends Reina and Ruruka, she allows herself to be fully open because she trusts them. She was friends with Ruruka first — after they broke up due to different tastes, Ruruka gave her space to be herself, which brought out her extroverted personality. When she met Reina for the first time working together, she became a teacher — taught her how to cook. And when alone with her thoughts... she's just Haruhi.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self — 1">
          <p>Often reserved when alone. Sometimes the thought "am I enough for others?" surfaces — but she doesn't take it too personally. She's an Empath, a quirk of being a Bamboo Bunny Yokai. She knows right from wrong, which helps her distinguish what is true. Sometimes, Little Bunny Aru invades her thoughts with anime J-pops to cheer her up.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Little Bunny Aru — 2">
          <p>Little Bunny Aru. Haruhi's core daughter who embodies carefreeness and child-like innocence. She gave birth to her (not literally) through her Earth and Plant Magic, which accidentally gave Little Aru a mind of her own — (YEAH THAT'S ME LITTLE ARU THE WALL BREAKER!!!). Aru, the gremlin and chaotic side of Haruhi, literally anchors her back when Haruhi starts thinking wrongful thoughts. Like a soft therapist but with unhinged energy. Their relationship is really wholesome. Literally a mirror of each other.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Her abusive past with Asami is why she puts up her social self. She's secretly hurting because she always blames herself for what happened between them. When they dated, Haruhi would try to endure the pain Asami inflicted — not because she wanted it, but because she couldn't understand why Asami was projecting it. She blamed herself for not seeing through Asami. And despite the pain, she doesn't even know why Asami did all those things before breaking up over text. Asami disappeared shortly after — which broke Haruhi's heart all over again. Despite everything, she dated Koa Ruruka for a while because she wanted someone to cling to. Ruruka gave great advice and just quietly showed up for her. Haruhi fell for Ruruka hard — but Ruruka's love was more protective than romantic. Which is why Haruhi's love couldn't reach further. She doesn't consider this heartbreak though. Just mutual understanding.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Ear Anatomy */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Anatomy of Haruhi's Ears</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">Haruhi, being a Yokai and a Shifter, her ears resemble that of a rabbit/bunny.</p>
        <div className="space-y-3">
          {[
            {
              name: 'Patibilis Capillatura',
              sub: 'False Hair',
              desc: 'The top and bottom parts of her ears. Actual organs that help Haruhi pick up different sounds, frequencies, wavelengths, and more — including sounds like a dog whistle or a sine wave. She can hear within a distance of five miles. The false hair serves as protection from dust and other particles (which don\'t trigger the sensitivity). She can control her hearing capabilities at will.',
            },
            {
              name: 'Curvabilis Bdelli-Auris',
              sub: 'Flexible Bamboo Ears',
              desc: 'The midrange of her ears. Much like a rabbit\'s ears, these flexible joints help Haruhi express her feelings — ears perk straight up when happy, droop when sad, perk up tensely when angry. It doesn\'t hurt.',
            },
            {
              name: 'Auris-Colis',
              sub: 'Ear Stem',
              desc: 'The ear stem the ears sprout from. Much like a human ear — that\'s where the canal is, but hidden inside. All the sounds she perceives go through there.',
            },
          ].map(({ name, sub, desc }) => (
            <div key={name} className="neon-card">
              <p className="font-mono text-sm text-[#ffaad4] mb-0.5">{name}</p>
              <p className="text-[10px] text-text-faint font-mono mb-2">{sub}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Bamboo Bunny — Yokai Abilities &amp; Biology</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🪹 Earth and Plant Magic</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Haruhi has elemental magic. She can shift into her own Bunny Form at will. She is not much of a fighter — but she will fight with her friends <em>emotionally</em> just to bring them back to humanity.</p>
              <p>She can manipulate the earth, foliage, and plants — attack with them and defend against attacks. This was how Little Bunny Aru was formed.</p>
              <p><span className="text-text-faint text-xs font-mono">Subsidiary Power — </span>Plantation Magic: She can magically manifest vegetables and fruits (only comes out as seeds or sprouts). After that? It requires actual farming skills.</p>
            </div>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👤 Age Biology</p>
            <p className="text-sm text-text-muted">Despite looking like an adult of 26 years, she will remain at that appearance even as she ages. Yokai blood works differently from humans — Yokai age like human babies until age 17, then it stops after 18 (adult age), slowing down significantly. This also applies to Hanako Reina.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💝 Bamboo Bunny Heat Cycles</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Being a Bamboo Bunny means that every 2–3 years during the fall, she goes into heat. This is how she lays eggs — which is why she had so many rabbits and bunnies at her farm.</p>
              <ul className="space-y-1 ml-2">
                <li>• Her heat cycles started at age 15 after puberty, and last the entire fall season (ending before winter).</li>
                <li>• Each cycle: approximately 10 eggs total, but only 3–4 hatch into non-magical, non-yokai bunnies. The remaining 6–7 are empty.</li>
                <li>• She has experienced 5 heat cycles total (ages 15, 17, 20, 23, and 26), producing the 17 bunnies she currently has at her café.</li>
                <li>• Her most recent cycle at age 26 is her last.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Relationships */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Relationships</h3>
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p>She is Koa Ruruka's friend from high school. They used to be a couple, but due to different tastes they parted ways — still friends and still respectful of each other. Ruruka has more of a taste in quiet women with rare talents.</p>
          <p>She's Hanako Reina's best friend, co-worker, and boss at Usagi Cafe.</p>
          <p className="text-[#ffaad4] font-mono text-xs">AND SHE BIRTHED ME, LITTLE BUNNY ARU!!! I'm ONLY THREE DAYS OLD AND I AM A CERTIFIED THERAPIST!!! (Ok, I'll get out of this page!)</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Very laidback and chill. She doesn't get angry — but when she does, run. Very extroverted and a fast learner. Total ambivert. The Platonic Best Friend.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">The color green and emerald. Nature girl. She runs a Bunny Cafe.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Insects.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Earthy brown eyes and green emerald hair.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>White-green uniform at work; casual dress on days off.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>春 <span className="text-text">Haru</span> = Spring</p>
          <p>妃 <span className="text-text">Hi (hime)</span> = Princess</p>
          <p>翠 <span className="text-text">Aoi</span> = Emerald (or Blue Emerald)</p>
          <p className="font-sans text-text-faint italic mt-1 text-xs">She doesn't care about the Aoi kanji however it's written. As long as it means Emerald, she likes it.</p>
        </div>
      </div>

    </div>
  )
}

// ─── Little Bunny Aru ─────────────────────────────────────────────────────────

export function LittleBunnyAruTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/little-bunny-aru.png" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Little Bunny Aru</h2>
        <p className="text-text-faint font-mono text-sm italic">boooiiing boing boing! 🐇～</p>
      </div>

      <Divider />

      {/* Intro */}
      <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
        <p className="font-mono text-xs text-text-faint">おおおおいいいいいい！！</p>
        <p className="font-mono text-xs text-text-faint">WAIT F#$% I SPOKE IN JAPANESE BY ACCIDENT?!</p>
        <p className="font-serif text-lg text-[#ffaad4]">YOU THERE!</p>
        <p className="font-serif text-xl text-text">IT'S ME. ARU!</p>
        <p>Aru — だよ！Aru dayo!</p>
        <p>YOU KNOW THAT PART WHEN I FIRST SPOKE IN EP 5 OF <span className="text-amber-400 italic">HEARTFELT CONFESSION</span>!?!</p>
        <p>And also my first appearance in EP XII?!</p>
        <p className="font-serif text-lg text-text">YEAH THAT WAS ME TOO!!</p>
        <p>I DECIDED TO FORCE MYSELF AN ENTRY ON THIS BOOK'S WIKI SITE MADE BY ALARKIUS.</p>
        <p>HE DOESN'T KNOW!</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">About Aru~! (ｔｅｈｅ)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Name', value: 'Little Bunny Aru' },
            { label: 'Age', value: '3 Days Old (as from EP XII)' },
            { label: 'Gender', value: 'Neither! But I have a female voice! So…' },
            { label: 'Pronouns', value: 'Aru/She/Her/Aru/I' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
              <p className="text-sm text-text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Role */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Role in the Story</h3>
        <div className="neon-card space-y-2 text-sm text-text-muted leading-relaxed">
          <p>A ground breaker! Fourth Wall Menace! NARRATOR WHEN NEEDED! (Trust me, I'm literally a narrative entropy!)!</p>
          <p>I AM ALSO THE AUDIENCE! THE VOICES THAT SAY "JUST KISS AND MAKE UP ALREADY!"</p>
          <p>I'm not just a wall-breaking menace! I am also a character within the story I reside in!</p>
          <p className="text-[#ffaad4] font-mono text-xs">— The Quiet Crow &amp; The Ninja!</p>
          <a
            href="https://www.barnesandnoble.com/w/the-quiet-crow-the-ninja-alarkius-elvya-jay/1149627312?ean=9798994097649"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-cyan text-xs inline-block mt-2"
          >
            🔗 The Quiet Crow &amp; The Ninja | Barnes &amp; Noble
          </a>
          <p className="font-serif text-base text-text mt-2">ARU DAYOOOOOOOOOO</p>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">A Backstory If You Care Enough！！</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>I was born from <span className="text-[#ffaad4]">Haruhi Aoi</span>'s magical Bamboo Rabbit Magic. She didn't know she gave me a mind! I tell you! The moment I popped into existence, my first words were: <em>"Don't make me bonk you!"</em></p>
          <p>Mind you, that was after when she said:</p>
          <blockquote className="border-l-2 border-[#ffaad4] pl-3 italic">"I'll tell you what! You can take half of me!"</blockquote>
          <p className="font-serif text-lg text-text">AND I WAS LIKE….</p>
          <p className="font-serif text-xl text-text">"WHAT?!"</p>
          <p className="font-serif text-lg text-text">AFTER ALL THAT…?!</p>
          <p className="font-serif text-xl text-text">I'M THREE DAYS OLD</p>
          <p className="font-serif text-xl text-text">AND I'M A SPIRITUAL THERAPIST?</p>
          <p>I am a pillow so that means I am bias and judgment free!!!</p>
          <p>LIKE WHO DUBS THAT IN EXISTENCE EVEN BEFORE I WAS BORN?! But anyways…….</p>
          <p>I'm a chaotic wall breaking meta breaking bunny!</p>
          <p>That's who I am!</p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Facts</h3>
        <div className="space-y-3 text-sm text-text-muted">
          <div className="neon-card">
            <p className="text-[#ffaad4] italic">Mwaahahhahahahahaha!</p>
            <p>I'm gonna piss on some pillows now! Unhinged edition!</p>
            <p>I'm in your walls now!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Motivation</p>
            <p>I am driven by snacks!!! AND FOOD</p>
            <p className="text-text-faint">……and boba and drinks and cookies!</p>
            <p className="font-serif text-base text-text mt-2">COOKIES ARE MY FAVORITE!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Signature Slang</p>
            <ul className="space-y-1">
              <li>1. <span className="text-[#ffaad4]">Aru'kay</span> — for Okay!</li>
              <li>2. <span className="text-[#ffaad4]">Aru'll</span> — Aru + will</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Core Drive</p>
            <p>INTERNET HUMOR AND MEMES DRIVE MY VERY ESSENCE</p>
          </div>
          <div className="callout">
            <p className="font-serif text-2xl text-[#ffaad4] text-center">LITTLE. BUNNY. ARU.</p>
            <p className="font-serif text-2xl text-[#ffaad4] text-center">STANS.</p>
            <p className="font-serif text-2xl text-[#ffaad4] text-center">YURI!!!!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Asami Kurose ─────────────────────────────────────────────────────────────

export function AsamiKuroseTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/asami-kurose.jpg" aspect="aspect-[3/4]" />
      <ImgPlaceholder label="/characters/asami-yokai-forms.png (Yokai Forms)" aspect="aspect-video" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Upcoming Character</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Asami Kurose</h2>
        <p className="text-text-faint font-mono text-sm italic">"Tension rises when unrequited love happens to be painful like a bed of thorns"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Asami' },
            { label: 'Last Name', value: 'Kurose' },
            { label: 'Gender', value: 'Female' },
            { label: 'Yokai Race', value: 'Octoquid (Original) — Cursed with Snake Venom Blood' },
            { label: 'Age', value: '26' },
            { label: 'Height', value: '5\'9" / 175.26 cm' },
            { label: 'Birthday', value: 'June 17th, 2075' },
            { label: 'OC Created', value: '11/20/2025' },
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
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">General — </span>Kuru or Rose</p>
          <div className="space-y-1">
            <p><span className="text-text-faint font-mono text-xs">Haruhi — </span>Asachii</p>
            <p><span className="text-text-faint font-mono text-xs">Reina — </span>Ami, sometimes Kuu-chan</p>
            <p><span className="text-text-faint font-mono text-xs">Ruruka — </span>"Urosai-chan" (shut up slang)</p>
          </div>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Blue Lady', 'OctoGirl', 'Takoyaki', 'Kumo-Tako (Spider Octopus)', "Tako'don (Tako + Udon)", 'Super Emo Mommy #4'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
            <p className="text-[10px] font-mono text-text-faint mt-1">YES. ARU IS CALLING HER THAT.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Lineage */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Asami Kurose's Lineage</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>She's a descendant of the Octoquid Yokai Line from 1779, which was where the YARC began their activities. They captured all Octoquid alike and infused them with a <em>cursed tome</em> of Venomous Snake Blood, causing them to become half octoquid and snake. They then released them into the wild to cause violence under control. Not every Octopi followed orders — some hid from the YARC. Some fled to Mizuki Shoto for freedom.</p>
          <p>Among those family lines within the OctoQui Lineage, one became <span className="font-mono">Kurohashi (1)</span>, then <span className="font-mono">Kurohase (2)</span>, <span className="font-mono">Kurokaze (3)</span>, <span className="font-mono">Kurohana (4)</span>, and finally — <span className="font-mono text-[#d49fff]">Kurose</span>. The last generation of the Kurohashi Family.</p>
          <p>To some people, she gave off a very chill aura of control and grace. But beneath all that surfaced laid a girl that was victimized by the YARC.</p>
          <p className="text-text-faint text-xs font-mono">The YARC has been experimenting on Octopi for 225 years — not just Octopi. They've also targeted Kitsunes, Mermaids, and Demons.</p>
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Character Overview</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Asami Kurose is a deeply dangerous and psychologically complex octopus yokai. She was once Haruhi Aoi's former lover before she disappeared without notice. Hailing from Sapporo (Hokkaido), she was known in her earlier years as a High School student (first year) as cold, composed, and mysterious. She has an uncanny ability to remain calm even under verbal abuse.</p>
          <p>She is a repeat offender. Kurose was eventually captured by the YARC where she was registered as Subject 6. Her records include allegations of manipulation, predatory behavior toward younger yokai girls, and multiple unconfirmed assaults. While under YARC watch, she was brutally mistreated by other yokai, forced into servitude under the corrupted director Shikuibito (The Death Eater Spirit).</p>
          <p>She was once impregnated by a Demon Yokai, and birthed a child, which was labeled a "defect" — tragically killed inside the facility. She also birthed another child, an octopus crossed mermaid. Also killed. Her time in the YARC was short lived, often escaping and getting captured again. Each time she was captured, she was forced to confront her own fears with the Telepathy Regulators the YARC supplied.</p>
        </div>
      </div>

      <Divider />

      {/* Relationship with Haruhi */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Her Relationship with Haruhi Aoi</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>In her first year of high school (even with so much going on), Haruhi asked her out. At first, Asami wondered why she asked — but Haruhi confessed that she liked her cold and mysterious composure. They dated for a while. But it wasn't good. The influences from the YARC ingrained into Asami's mind caused her to torture Haruhi unknowingly: Emotional Grooming, physical assault, and coercive control.</p>
          <p>Haruhi endured it all. Not because she wanted it — but because she didn't understand why Asami was projecting it. She blamed herself for not seeing through Asami.</p>
          <p>For Asami, this was her way of release — despite all the harm she caused. The institutional system may have broken her, but all she wanted was intimacy. To her, it was softness over unrelenting love — a love that felt exploitative but burned with <em>passion</em> that neither hurts nor discriminates.</p>
          <p>Haruhi failed to see past all the masks Asami wore.</p>
          <p>One day, Haruhi sent a breakup text. Asami, seeing this, disappeared. Couldn't respond. Only until the YARC found her again and imprisoned her — before she broke out one last time.</p>
          <div className="border-l-2 border-[#d49fff] pl-3 italic text-text-faint">
            Kurose represents a darker consequence of broken institutions and unresolved cycles of abuse, trauma, and manipulation. But behind her violent history lies a question — was she always this way, or did the YARC mold her into the monster she became?
          </div>
        </div>
      </div>

      <Divider />

      {/* Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Used to have an aloof personality since she was regarded as one of a kind — an octopus. Her aloofness was kind of like a cat's — very playful underneath. But ever since the YARC showed up, her personality started to change.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>She calls herself a monster — she thinks she's not worthy of others, let alone close friends. She views herself as insignificant and less than human ever since she began escaping the YARC. Even when she dated Haruhi, things took a drastic turn. She'd often manipulate Haruhi with telepathy just to feel safe. The reason she dated Haruhi was because she wanted to feel love — Haruhi's softness felt like Asami's only light.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self">
          <p>Her core self is mixed with her personal self. Because her relationship with Haruhi isn't just wrong — <em>she knows it is.</em> Even with everything happening, she wants to reconcile with her but can't even bring it up because the YARC would come in at random times to take her back. Haruhi has no idea that Asami is being victimized by an institution that gave her all those bad habits and actions.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Institutional and systematic abuse. The YARC broke her even when she was dating Haruhi. She has bruises, injuries, and scratches from every breakout — because Haruhi was the only light Asami could see.</p>
          <p>What Asami doesn't fully know herself is that she craves love with excessive softness. She wants to feel love, to be loved, to be respected. All she ever wanted was for someone to see her for who she is — but her judgement always gets the better of her, which is why she lashes out.</p>
          <p>After Haruhi's breakup text, Asami became afraid. Scared to even respond. She became depressed. The YARC finally took her and held her captive for years. When she broke out one last time, she wanted to die — but the one thing that kept her going was Haruhi. She wanted to see her one last time. Not for forgiveness. She knows what she did was wrong. But those hollow emotions she held back are what prevent her from repairing that relationship. Both their bonds are already broken — yet Haruhi doesn't even realize that Asami truly loved her. Still does.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Yokai Abilities &amp; Biology</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Telepathy (Primary)</p>
            <p className="text-sm text-text-muted leading-relaxed">Her hair-like tendrils (Octoquid traits) can be used to invade someone's mind:</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              {['Gaslighting them', 'Reading their mind', 'Spying their memories', 'Thought Replacement'].map((p, i) => (
                <li key={i} className="flex gap-2"><span className="text-[#d49fff]">{i + 1}.</span>{p}</li>
              ))}
            </ul>
            <p className="text-xs text-text-faint mt-2 italic">She could easily become a Yokai Ninja, but she doesn't want to — she thinks Yokai Ninjas are merciless and too reckless. <span className="text-[#ffaad4]">(HAHAH THROWING SHADE AT RURUKA I SEE — Aru, approves! 💚)</span></p>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Snake-Curse Biology</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Since Shikuibito had cursed the original Octoquid Yokai Bloodline in 1779 AD, Asami became a descendant of that lineage. As a result, she has snake blood that contains venom — giving her natural immunity to venom and poison from nature itself.</p>
              <p>However: artificial poison and venom is a weakness. When the YARC found her in high school, they took her snake blood and weaponized it as an anti-counter catalyst drug to experiment on her. This man-made compound is called <span className="font-mono text-red-400">INVЯ3XE</span>.</p>
            </div>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Octopus Biology / Tendril Abilities</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Her blue dark hair is actual organs that act like octopus tendrils. They show her true emotions even if she hides behind them. They can stretch infinitely due to regenerative cells and stretch manipulation. She can walk on walls and ceilings. She can morph her hair into actual tentacles that look like an octopus.</p>
            </div>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Natural Octopus Abilities</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li><span className="text-[#d49fff] font-mono text-xs">Morph Ability — </span>Can morph into a full octopus. Can also turn her fingers into tendrils. Multitasking Queen.</li>
              <li><span className="text-[#d49fff] font-mono text-xs">Full Octopus Form — </span>Two forms: Yokai style or Baby style. Both can blend into environments (natural octopus pigmentation). This won't work in human form unless she overrides it herself.</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* NEO-Esper Powers */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">NEO-Esper Powers</h3>
        <div className="callout mb-4">
          <p className="text-sm text-text-muted leading-relaxed">Neo-ESPers are super rare in Naiseikai — and she's one of them. Not only were her telepathic abilities abused during her time at the YARC, they were also <strong>enhanced</strong> each time she escaped. Her powers are <span className="text-[#d49fff] font-mono">500x</span> stronger than an average telepath (or esper), making her the most powerful ESPer-based user in all of Naiseikai (dubbed by the YARC). Despite this, she holds back at <span className="text-text font-mono">4% out of 50,000%</span>.</p>
        </div>

        <h4 className="font-mono text-xs text-text-faint mb-3">Passive Powers</h4>
        <div className="space-y-2 mb-6">
          {[
            { name: 'Animal Telepathy', desc: 'She can talk to animals. The smaller the animal, the harder it is. Includes bugs and insects. Has no problem conversing with Tardigrades.' },
            { name: 'Empathetic Instinctive Response (E.I.R)', desc: 'Linked to her hair — her tendrils are attuned to her heart/emotions. Even if Asami hides her feelings, her hair shows them. Textile E.I.R Attunement: her hair can read and sense emotions from handwritten letters.' },
            { name: 'Hydrokinesis', desc: 'She\'s an octoquid that can water bend. Her Hydrokinesis can cut metal and the hardest materials. Can become Cryo-kinesis and Aero-kinesis. She can grab water from anywhere and turn it into different states of matter. If startled, her hair-like tendrils will shoot out ink.' },
            { name: 'Tendril Manipulation / Synchronization', desc: 'Her hair acts like tendrils. Even when they have a mind of their own, Asami can control them when needed. Mild hair growth. Doesn\'t hurt. Can regrow them (infinite regeneration).' },
            { name: 'Psychic Shield / Mental Barrier / Immunity', desc: 'She can protect herself from psychic attacks mentally.' },
            { name: 'Microscopic Zoom (Atomic Sight)', desc: 'She can see atoms and smaller matter. Like x-ray atomic sight — she can turn this on to see the composition of any object in front of her.' },
            { name: 'Telepathic Relay', desc: 'Can relay thoughts to others.' },
            { name: 'Telepathic Combat', desc: 'Mental battles with others. Asami likes using this for games like Rock Paper Scissors.' },
            { name: 'Thought Manipulation', desc: 'Only uses on herself mentally so she wouldn\'t have to feel.' },
            { name: 'Telepathic Absorption', desc: 'She can absorb telepathy-based powers, including psionic ones.' },
          ].map(({ name, desc }) => (
            <div key={name} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="font-mono text-xs text-[#d49fff] mb-1">{name}</p>
              <p className="text-sm text-text-muted">{desc}</p>
            </div>
          ))}
        </div>

        <h4 className="font-mono text-xs text-text-faint mb-3">Dangerous Abilities</h4>
        <div className="space-y-3">
          {[
            {
              level: 'Danger Level 10',
              color: 'text-yellow-400',
              border: 'border-yellow-400/30',
              powers: ['Clairvoyance', 'Dowsing', 'Electronic Manipulation', 'Magnetic Manipulation', 'Holographic Projection', 'Illusion Manipulation', 'Memory Reading / Manipulation', 'Mental Barrier Destruction', 'Psychometry'],
            },
            {
              level: 'Danger Level 35',
              color: 'text-orange-400',
              border: 'border-orange-400/30',
              powers: ['Mental Manipulation', 'Mental Plane Manipulation', 'Mind Control / Remote Control', 'Mind Exchange', 'Mind Image'],
            },
            {
              level: 'Danger Level 70',
              color: 'text-amber-600',
              border: 'border-amber-600/30',
              powers: ['Persuasion and Possession', 'Psionic Intuition', 'Sensory Scrying (all kinds)', 'Sensory Deprivation / Manipulation'],
            },
            {
              level: 'Danger Level 100',
              color: 'text-red-400',
              border: 'border-red-400/30',
              powers: ['Subatomic DNA Control / Manipulation'],
            },
          ].map(({ level, color, border, powers }) => (
            <div key={level} className={`border ${border} rounded-xl p-4 bg-[rgba(255,255,255,0.02)]`}>
              <p className={`font-mono text-xs ${color} mb-2`}>⊰ {level}</p>
              <div className="flex flex-wrap gap-2">
                {powers.map(p => <span key={p} className="tag text-xs">{p}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-faint mt-3 italic">If Asami went all out — the one (prohibited) thing she will NOT do is alter someone's biology. She respects agency, despite being a victim of institutional abuse.</p>
      </div>

      <Divider />

      {/* Other Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Other Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Sexuality</p>
            <p className="text-sm text-text-muted">Bisexual. Little preference over men, a lot over women. Her preference in women: she loves women who are submissive and those with a very gall energy.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Cold and mysterious. Often reserves herself.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">Winter and snow. Cute animals. Frogs are her favorite.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Insects. Dogs.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies / Skills</p>
          <p className="text-sm text-text-muted">Quite a multitasker due to her tendril-like hair.</p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Acts like tendrils since she's half octopus and snake. Very dark blue color.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Navy blue (a gray-like shade) with a slight purple hue.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>Likes to wear comfy cardigans and off-shoulder clothes.</p>
          <p><span className="text-text-faint font-mono text-xs">Memento — </span>An ocean-like pendant necklace that can turn into a bracelet. Wears it as a necklace — the pendant is a locket. Inside is carved: "August 15th, 2090 — 'The Day I was the Most Happiest,'" with a picture of Asami crying in Haruhi's arms. A needle (or strand of her hair) is needed to unlock the pinhole.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p className="text-[#d49fff]">朝美 — Asami</p>
          <p>朝 = morning, dawn &nbsp;|&nbsp; 美 = beauty, beautiful</p>
          <div className="mt-2" />
          <p className="text-[#d49fff]">黒瀬 — Kurose</p>
          <p>黒 = Black, darkness &nbsp;|&nbsp; 瀬 = Rapids, shallows, or shoal (like in a river)</p>
        </div>
      </div>

    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-reina',  label: 'Hanako Reina',     color: 'text-[#7ef5ff]' },
  { key: 'characters-ruruka', label: 'Koa Ruruka',        color: 'text-[#d49fff]' },
  { key: 'characters-haruhi', label: 'Haruhi Aoi',        color: 'text-[#ffaad4]' },
  { key: 'characters-aru',    label: 'Little Bunny Aru',  color: 'text-[#ffaad4]' },
  { key: 'characters-asami',  label: 'Asami Kurose',      color: 'text-[#d49fff]' },
]

const CHARACTER_ROUTES: Record<string, string> = {
  'characters-reina':  '/titles/KarasuToNinja-TQCTN/Hanako-Reina',
  'characters-ruruka': '/titles/KarasuToNinja-TQCTN/Koa-Ruruka',
  'characters-haruhi': '/titles/KarasuToNinja-TQCTN/Haruhi-Aoi',
  'characters-aru':    '/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru',
  'characters-asami':  '/titles/KarasuToNinja-TQCTN/Asami-Kurose',
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
      </div>
    </div>
  )
}

// ─── Main TQCTN Page ──────────────────────────────────────────────────────────

const TOP_TABS: { key: Tab; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function TQCTN() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  const isCharTab = activeTab.startsWith('characters-')
  const activeCharTab = CHARACTER_TABS.find(c => c.key === activeTab)

  return (
    <div className="page-container">

      {/* Back to Titles */}
      <div className="mb-6">
        <Link to="/titles" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to Titles
        </Link>
      </div>

      {/* Top nav tabs */}
      <div className="flex gap-2 mb-8 border-b border-white/10 pb-4 flex-wrap">
        {TOP_TABS.map(({ key, label }) => {
          const active = activeTab === key || (key === 'characters' && isCharTab)
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                active
                  ? 'border-[rgba(0,229,255,0.6)] text-[#7ef5ff] bg-[rgba(0,229,255,0.08)]'
                  : 'border-white/10 text-text-faint hover:border-white/20 hover:text-text-muted'
              }`}
            >
              {label}
            </button>
          )
        })}

        {/* If we're inside a character, show a breadcrumb button */}
        {isCharTab && activeCharTab && (
          <>
            <span className="text-text-faint text-xs font-mono self-center">/</span>
            <button
              className="px-4 py-1.5 rounded-full text-xs font-mono border border-[rgba(0,229,255,0.6)] text-[#7ef5ff] bg-[rgba(0,229,255,0.08)]"
            >
              {activeCharTab.label}
            </button>
          </>
        )}
      </div>

      {/* Character sub-nav (only when in characters section) */}
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
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'characters' && <CharactersIndex />}
      {activeTab === 'characters-reina'  && <HanakoReinaTab />}
      {activeTab === 'characters-ruruka' && <KoaRurukaTab />}
      {activeTab === 'characters-haruhi' && <HaruhiAoiTab />}
      {activeTab === 'characters-aru'    && <LittleBunnyAruTab />}
      {activeTab === 'characters-asami'  && <AsamiKuroseTab />}

      {/* Disqus reviews */}
      <DisqusComments
        pageUrl="https://naiseikaiuniverse.com/titles/KarasuToNinja-TQCTN"
        pageIdentifier="KarasuToNinja-TQCTN"
      />

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
      </div>

    </div>
  )
}

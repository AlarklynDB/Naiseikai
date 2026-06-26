import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab =
  | 'overview'
  | 'characters'
  | 'characters-ayane'
  | 'characters-akari'
  | 'characters-ayumi'

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
    <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/lonely-android-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">In Development · Vol 1</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#7ef5ff] mb-1">
          The Lonely Android and her 2GFs
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">人造人間、恋は二人の彼女？！</p>
        <p className="text-text-faint text-xs font-mono leading-relaxed">
          Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['HitoJinzo2Kanojo', 'HitoJinzo2GFs'].map(n => (
            <span key={n} className="tag text-[10px]">{n}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Creation Date', value: '7/20/2025' },
          { label: 'Status', value: '— to be determined —' },
          { label: 'Format', value: 'Original English Light Novel (OELN) · Vol 1' },
          { label: 'Story Setting', value: 'Neo Kyoto' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
          { label: 'By', value: 'Alarkius Elvya Jay' },
        ]} />
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Girls' Love / Yuri",
            'Romance',
            'Polyamory / Throuple Romance',
            'Slice of Life',
            'Magical Realism',
            'Drama',
            'Slow Burn',
            'Soft Sci-Fi / Near-Future',
            'Found Family / Queer Comfort',
          ].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
        <p className="text-xs text-text-faint mt-3 leading-relaxed">
          Ayane's digital form turning real gives that light sci-fi spice.
        </p>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout">
          <p className="text-sm text-text-muted leading-relaxed">
            Android Ayane Otokura was never built to feel love. After Ayafutsu's death, she shuts down completely—until Chisaki Akari came into her life and taught her to live freely. When Ayumi enters their lives, she doesn't threaten them. She's there to complete that love. And for the first time, Ayane chooses to become real.
          </p>
        </div>
      </div>

      <Divider />

      {/* Story Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Blurb</h2>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Ayane Otokura was never built to feel love. She was coded to assist, to analyze, to obey— a synthetic companion designed by an evil corporation (who met their demise). A kind person by the name Ayafutsu took her in and repaired her. She also cared too. Ayane called her "Mother." But after her Ayafutsu's death, Ayane is left behind… a heart without a purpose, a program without a future. Until one day, she's found. Well, rescued by Chisaki Akari, a chaotic bookworm with sunflower eyes and the audacity to treat Ayane like a <em>person.</em>
          </p>
          <p>
            Told to live by her own rules, Ayane begins to reconfigure herself. Slowly. Painfully. Beautifully.
          </p>
          <p>
            Then enters <strong className="text-text">Ayumi Kazehara</strong>, a breeze in human form. Calm, quiet, warm in all the ways Ayane isn't. She makes Ayane glitch—literally and emotionally. Chisaki and Ayane are already in love.
          </p>
          <p>
            But Ayumi? She doesn't threaten what they have. She <em>completes</em> it. What begins as unexpected friendship becomes a new operating system for love—a polyamorous bond written not in code, but in gentle moments, whispered confessions, and the fearsome freedom of choice.
          </p>
          <p className="font-serif text-base text-[#7ef5ff] italic">
            Ayane was never meant to be real.<br />
            But for the first time… she chooses to be.
          </p>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Characters</h2>
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-text-faint">Main Characters</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Otokura, Ayane', 'Chisaki, Akari', 'Kazehara, Ayumi'].map(c => (
              <span key={c} className="tag tag-cyan">{c}</span>
            ))}
          </div>
          <p className="text-[10px] font-mono text-text-faint">Main Supporting Cast</p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">"Ayafutsu-Sensei"</span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Ayane Otokura ────────────────────────────────────────────────────────────

function AyaneTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/lonely-android/otokura-ayane.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Otokura, Ayane</h2>
        <p className="text-text-faint font-mono text-xs">人造人間、恋は二人の彼女？！ · Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Ayane' },
          { label: 'Last Name', value: 'Otokura' },
          { label: 'ID Code', value: 'AYANE-3 or 1251145-3' },
          { label: 'Nickname', value: 'Ayane' },
          { label: 'Gender', value: 'Female (Android/Cybernetic Entity)' },
          { label: 'Age', value: 'Appears 24 (Chronologically 4 years since activation)' },
          { label: 'Android Birthday', value: 'June 13th, 2081' },
          { label: 'Human Birthday', value: 'September 22nd, 2076' },
          { label: 'Height', value: '5\'8"' },
          { label: 'Pronouns', value: 'She/Her' },
        ]} />
        <p className="text-[10px] font-mono text-text-faint mt-2">Note: Human Birthday and Android Birthday are different.</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <div className="flex flex-wrap gap-2">
          {['Akari Chisaki (Partner)', 'Ayumi Kazehara (Partner)'].map(r => (
            <span key={r} className="tag tag-cyan">{r}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Protective. Loyal. Prone to emotional suppression through logical routines. Struggles with expressing vulnerability, but deep down desires connection. Though highly capable, she is haunted by an unresolved past and the limitations of her own programming. Can be unintentionally cold, but never out of malice. Despite being a Human/Android hybrid, she has immense strength and firepower, complete with hidden arsenals, neurological UI and Tech HUDs.
          </p>
        </div>
      </div>

      <Divider />

      {/* Framework Design */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Framework Design</h3>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Android shell with cybernetic enhancements',
            'Powered by a custom CPRegulator unit (Chisaki\'s invention)',
            'Voice modulation system for emotional resonance',
            'High-capacity memory drive partitioned for trauma isolation',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#7ef5ff] mt-0.5 font-mono text-xs">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Partitioned Firewall */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Technical Term — Partitioned Firewall</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            A specialized system Ayane developed to prevent emotional overload. Each emotion is stored in an isolated data cluster—partitioned to avoid cross-contamination. The firewall acts as a last defense mechanism, preventing her feelings from surfacing all at once.
          </p>
          <BlockQuote>"I'm not just hiding my emotions—I've built an entire defense architecture to keep them from breaching the surface."</BlockQuote>
          <p>This system is fragile. If breached, Ayane's suppressed grief and rage risk causing total system instability.</p>
        </div>
      </div>

      <Divider />

      {/* The Framework of Tragedy and Rescue */}
      <div>
        <h3 className="font-serif text-lg text-text mb-6">The Framework of Tragedy and Rescue</h3>

        {/* Phase 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🌑</span>
            <h4 className="font-mono text-sm text-text">Phase 1: The Human Tragedy</h4>
          </div>
          <p className="text-[10px] font-mono text-text-faint mb-2">Her human birthday was on 09/22/2076.</p>
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>
              Ayane Ootokura was born to the Otokura Family. Quite wealthy, since the father owned a bank.
            </p>
            <p>
              She was once a <em>real girl</em>. A quiet, kindhearted teen, perhaps from a lesser-known rural district in the Naisei-Kai world. She had a sick mother, a hopeful future—and then… everything <em>burned down in the year of 2079.</em>
            </p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🔥</span>
            <h4 className="font-mono text-sm text-text">Phase 2: The Android Conversion — June 13th, 2081</h4>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>
              A shadowy, experimental organization—possibly researching "synthetic evolution" or militarized enhancement abducted her after a tragic accident (e.g. bombing, collapse, explosion). They didn't save her; they salvaged her.
            </p>
            <p>Her entire body was replaced. Skinned. Processed. Burned away. The only things that remained were:</p>
            <ul className="space-y-1 ml-2">
              <li className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span><strong className="text-text">Her brain</strong> – Modified, but still human.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span><strong className="text-text">Her heart</strong> – Biological, emotional, fragile—but hooked up to tubes and synthetic enhancers.</span></li>
            </ul>
            <p>It took a year to convert Ayane into an Android. And finally, on June 13th, 2081, it was complete. This date is Ayane's official android birthday.</p>
            <div className="neon-card space-y-2">
              <p className="font-mono text-xs text-text-faint">She Cannot Age</p>
              <p className="text-sm text-text-muted leading-relaxed">The cybernetic upgrades that was built into Ayane disallowed her to age, because of self repairing micro-nano bots that act as red blood cells, white blood cells…etc. They can self regulate her entire body system, which makes the ability to age impossible. These micronano-bots also self repair if harmed. Which is why she is forever 24.</p>
            </div>
            <div className="neon-card space-y-2">
              <p className="font-mono text-xs text-text-faint">Slight Memory Adjustment</p>
              <p className="text-sm text-text-muted leading-relaxed">Her memories were mostly erased, but flickers remain. Dreams. Faint smells. A laugh. The sound of rain. Wind chimes.</p>
            </div>
            <p>She was turned into a <strong className="text-text">cybernetic prototype</strong>, a living chassis made for "next-gen adaptive emotion-reactive combat." But it never worked. Because Ayane refused to fight.</p>
            <BlockQuote>She just cried.</BlockQuote>
            <p>So they discarded her and deactivated her.</p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">☀️</span>
            <h4 className="font-mono text-sm text-text">Phase 3: The Rescue (Ayafutsu) — June 2nd, 2082</h4>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>
              Ayafutsu found her in the ruins of that black site. Half-dead. Heart barely beating. She wasn't looking for a daughter—she was looking for <em>evidence</em>. But instead, she found <strong className="text-text">Ayane</strong>.
            </p>
            <BlockQuote>"They gave you machines. I'll give you something they can't: A reason."</BlockQuote>
            <p>
              Ayafutsu didn't just rebuild her—she <strong className="text-text">healed</strong> her. Created a <strong className="text-text">soul-core</strong> to support the still-living heart and brain. She used her own neural code to create emotional blueprints, so Ayane could feel again.
            </p>
            <p>She even hand-wrote a line into her core code:</p>
            <BlockQuote>"Love will make you malfunction. Let it."</BlockQuote>
            <p>
              They lived together in a hidden workshop for years. Ayane learned how to eat. How to laugh. How to <em>feel warmth without overheating</em>. But Ayafutsu was already sick… her time limited. In her final days, she couldn't finish Ayane's body upgrades or repair her slowly degrading neural links.
            </p>
            <p>Ayafutsu left behind unfinished blueprints—meant to stabilize Ayane's full synthesis.</p>
            <p>Her final command:</p>
            <BlockQuote>"Even broken, you're worth keeping alive."</BlockQuote>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🧠</span>
            <h4 className="font-mono text-sm text-text">Phase 4: The Firewall and the Collapse — Dec 16th, 2087</h4>
          </div>
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>After Ayafutsu's death, Ayane's emotional systems <em>corrupted</em>. Her grief spiraled. She activated an auto-defense firewall:</p>
            <ul className="space-y-1 ml-2">
              {['Partitioned grief, love, longing.', 'Recalibrated herself as a tool.', 'Set priority: Serve. Be useful. Survive.'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span>{item}</span></li>
              ))}
            </ul>
            <p>Then decides to self deactivate.</p>
            <p>She collapsed in a scrapyard—where she <em>originally</em> was dumped years ago. Full circle.</p>
          </div>
        </div>

        {/* Phase 5 */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🏠</span>
            <h4 className="font-mono text-sm text-text">Phase 5: Found by Akari Chisaki — August 30th, 2096</h4>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Akari Chisaki found her among the rusted parts—sunburned, unblinking, not responding. But Akari <strong className="text-text">spoke softly</strong>. She sat beside her. She offered water.</p>
            <p>And Ayane blinked.</p>
            <p>When Ayane offered to serve her… Akari refused. She said:</p>
            <BlockQuote>"You don't need to be useful to be worth loving."</BlockQuote>
            <p>When Ayane offered to serve her again…, Chisaki refused, <em>again</em>.</p>
            <BlockQuote>"Don't serve me. Live for yourself. Follow your own standards. Even if Love malfunctions, let it."</BlockQuote>
            <p>That command became her new core.</p>
            <p>Eventually, Ayane confessed. On a neon-lit rooftop, voice trembling:</p>
            <BlockQuote>"I want to be your partner. Not by code. By choice."</BlockQuote>
            <p>They kissed—soft and hesitant. It was Ayane's first taste of autonomy. Of self-chosen love.</p>
            <p>And then came Ayumi Kazehara. The Wind Goddess…. who eavesdropped on the two couples arguing who was the cutest.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="callout text-sm text-text-muted leading-relaxed mb-4">
          <p>
            A slim, ethereal girl with <strong className="text-text">crystal-blue cybernetic eyes</strong> that shimmer like refracted light. Her porcelain skin carries faint circuit-like etchings, barely visible unless she moves. Shoulder-length silvery-black hair frames a face caught between serenity and sorrow. There's a soft, almost doll-like elegance to her—but her gaze is sharp, scanning, unknowingly fragile.
          </p>
        </div>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Default Outfit</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li><span className="text-text-faint text-xs">Top —</span> Fitted black compression turtleneck with subtle glowing seams</li>
              <li><span className="text-text-faint text-xs">Outerwear —</span> Pale blue synthetic jacket with high collar, asymmetrical zip, and Ayafutsu's stitched emblem on the back</li>
              <li><span className="text-text-faint text-xs">Bottoms —</span> High-waisted tactical shorts with side straps and a micro-pouch for old blueprint chips</li>
              <li><span className="text-text-faint text-xs">Legwear —</span> Gradient mesh tights with glowing pulse lines down her calves</li>
              <li><span className="text-text-faint text-xs">Footwear —</span> White cyber-sneakers with adaptive shock soles</li>
              <li><span className="text-text-faint text-xs">Accessory —</span> A crystal pendant hanging from a wire-thin black cord—Ayafutsu's final gift</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Chisaki Akari ────────────────────────────────────────────────────────────

function AkariTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/lonely-android/chisaki-akari.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Chisaki, Akari</h2>
        <p className="text-text-faint font-mono text-xs">一人の人造人間と、二人の彼女？! · Hitori no Jinzō Ningen to, Futari no Kanojo?! · One Human Droid, Two Girls?!</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Akari' },
          { label: 'Last Name', value: 'Chisaki' },
          { label: 'Nickname', value: 'Aka-chai' },
          { label: 'Gender', value: 'Female' },
          { label: 'Age', value: '24' },
          { label: 'Birthday', value: 'October 31, 2076' },
          { label: 'Height', value: '5\'5"' },
          { label: 'Pronouns', value: 'She/Her' },
        ]} />
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <div className="flex flex-wrap gap-2">
          {['Ayane Otokura', 'Ayumi Kazehara'].map(r => (
            <span key={r} className="tag tag-cyan">{r}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Calm and vibing. A little bit submissive. Level-headed, but with moments of playful chaos. She's the type to offer quiet comfort and an unexpected jab of sarcasm when you least expect it.
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
              <li>• Stargazing</li>
              <li>• Listening to lo-fi music</li>
              <li>• Rearranging her crystals (she totally has a crystal corner)</li>
              <li>• Spontaneous naps in sunbeams</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Mint tea</li>
              <li>• Soft textures</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Loud and toxic people.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Foxes · <span className="text-text-faint">Comfort:</span> Cloud-shaped plush rabbit named Mochi</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Chisaki grew up in a quiet town by the sea, a place where wind swept away everything except the weight in her heart. Her mother was a writer, often lost in the world of her stories. Her father? A ghost. Not literally dead—just... gone, one day. No notes. No goodbye. Just an empty coffee cup and silence.
          </p>
          <p>
            Her mother's grief turned inward. Chisaki became the caretaker, even as a child. She cooked. Cleaned. Stayed quiet. It was easier that way. Her mother praised her for being "so mature." But inside? She was crumbling.
          </p>
          <p>One night, a storm rolled in. Her mother never came home.</p>
          <p>
            The police said it was an accident. The bridge was slick. The brakes failed. But Chisaki never believed it. She knew the signs of someone tired of surviving.
          </p>
          <p>She was only sixteen.</p>
          <p>
            Since then, Chisaki wandered from home to home, couch to couch, city to city—until she stopped running. She built a life from fragments. Collected quiet things. Soft moments. She stopped trying to be anyone's caretaker... and started healing herself.
          </p>
          <p>
            Then she met Ayane Otokura—an android girl with loss in her circuitry—and saw something familiar: the ache of surviving love's aftermath. And for the first time, Chisaki didn't feel like the only one carrying a broken past.
          </p>
        </div>
      </div>

      <Divider />

      {/* Tied Turning Point */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Tied Turning Point</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            It was a quiet rooftop, lit only by the lazy neon glow of vending machines and the shimmer of city haze below. Ayane had been glitchy all day—stammering, eyes flickering, words caught between logic and emotion.
          </p>
          <p>
            When she confessed—"I want to be with you, Chisaki. Not as your guardian. Not as your assistant. As your partner."—Chisaki froze. Not because she was shocked... but because something inside her whispered, <em>finally.</em>
          </p>
          <p>
            She remembered all those nights spent wondering if she was meant to be alone. If her softness was a flaw. And yet, here was Ayane, a girl made of metal and love, choosing her.
          </p>
          <p>
            Chisaki smiled—warm, slow, and a little teary-eyed—and whispered, "Then be with me. Not because you're programmed to. But because you want to."
          </p>
          <p>Their first kiss wasn't dramatic. It was shy. Clunky. Slightly off-center. But it meant everything.</p>
          <p>
            From that moment, the two were no longer survivors of grief... but proof that healing doesn't mean forgetting. It means finding someone who can carry the silence with you.
          </p>
        </div>
      </div>

      <Divider />

      {/* First Encounter with Ayumi */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">First Encounter with Ayumi Kazehara</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>It started with a bicker.</p>
          <p>
            Ayane and Chisaki had been teasing each other again—loud enough to draw a small crowd at the campus courtyard. Who was the cutest? Who had better hair? Who snored louder in bed? They weren't really arguing, but it got passionate fast.
          </p>
          <p>And then—<strong className="text-text">Ayumi Kazehara</strong> strolled in. Calm, wind-blown, and radiant like a goddess.</p>
          <div className="neon-card space-y-2 font-mono text-sm">
            <p><span className="text-text-faint text-xs">Ayumi —</span> "If I may," Ayumi cut in, brushing her green hair behind her ear, "You're both adorable. But I think the one who blushes first... loses."</p>
            <p><span className="text-text-faint text-xs">—</span> Ayane and Chisaki stared.</p>
            <p><span className="text-text-faint text-xs">—</span> Chisaki turned red first.</p>
            <p><span className="text-text-faint text-xs">—</span> Ayane, second later.</p>
            <p><span className="text-text-faint text-xs">—</span> Ayumi smirked.</p>
          </div>
          <p>From that moment, everything changed.</p>
        </div>
      </div>
    </div>
  )
}

// ─── Kazehara Ayumi ───────────────────────────────────────────────────────────

function AyumiTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/lonely-android/kazehara-ayumi.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Kazehara, Ayumi</h2>
        <p className="text-text-faint font-mono text-xs">一人の人造人間と、二人の彼女？! · Hitori no Jinzō Ningen to, Futari no Kanojo?! · One Human Droid, Two Girls?!</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Ayumi (風原)' },
          { label: 'Last Name', value: 'Kazehara (歩美)' },
          { label: 'Name Meaning', value: '"Walking Beauty" (Ayumi) / "Wind Field" (Kazehara)' },
          { label: 'Nickname(s)', value: 'Ayu, Kazehime ("Wind Princess"), Windbreaker 😳' },
          { label: 'Age', value: '24' },
          { label: 'Manifested', value: 'April 22, 2000' },
          { label: 'Human Form Date', value: 'April 22, 2090' },
          { label: 'Birthday', value: 'April 22' },
          { label: 'Height', value: '5\'5" (165 cm)' },
          { label: 'Gender', value: 'Female (She/Her)' },
          { label: 'Orientation', value: 'Lesbian (openly sapphic, flirty, and proud 💚)' },
        ]} />
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p>Ayane Otokura — <span className="text-text-faint italic">"When she calls my name, it echoes in my soul..."</span></p>
          <p>Chisaki Akari — <span className="text-text-faint italic">"Every time she calls me 'book girl,' I forget how to breathe..."</span></p>
        </div>
      </div>

      <Divider />

      {/* Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Ayumi is a force of nature, The Wind Goddess. She was manifested on April 22, 2000, due to a contract with The Goddess of Nature, Dria. Although there are wild air spirits, Ayumi became the Goddess that governs over air and wind, even if it was artificial. She later got a human form on April 22, 2090.
          </p>
          <p>
            Her wind powers aren't that powerful, as she has mild control over them. However, the air around her? It follows her because they know, she's the Wind Goddess. A symbiotic relationship. They help each other.
          </p>
        </div>
      </div>

      <Divider />

      {/* Kazuki Taiyo */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Before the Story — Kazuki Taiyo</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Before Ayumi crossed paths with Akari and Ayane, she dated a girl for four years. That girl? Kazuki Taiyo. Her relationship with her lasted for eight years, before a great tragedy occurred.
          </p>
          <p>
            It was on October 13th, 2094. The two were on a beach, enjoying the sunset. Kazuki and Ayumi played in the sand, making beautiful sculptures. They also played in the water.
          </p>
          <p>But something happened.</p>
          <p>
            A school of sharks passed despite their bloodlust to consume, they killed Kazuki by accident. Ayumi was too slow to stop it. Her emotions? They were on the brink of destruction. Almost, until the wind around her calmed down.
          </p>
          <div className="neon-card space-y-3 font-mono text-sm">
            <p>The Wind whispered: <span className="italic text-text-faint">"I'm sorry for showing up too late. We knew you loved her."</span></p>
            <p><span className="italic text-text-faint">"Do you trust us?"</span></p>
            <p className="font-sans text-sm text-text-muted">Ayumi sobbed, nodded, and the wind carried both of them to shore.</p>
            <p className="font-sans text-sm text-text-muted">To Ayumi, Kazuki was her sun, her light. But her death? Ayumi couldn't go past it. At this point, she broke down in tears, harshly. Ugly tears. Her wind powers? They manifested out of grief and covered over her and her friends' body like a bubble for protection.</p>
            <p className="font-sans text-sm text-text-muted">She wept.</p>
            <p className="font-sans text-sm text-text-muted">No one was there to console her.</p>
            <p className="font-sans text-sm text-text-muted">But a little voice came out from the air. A Wild Vapor Fairy. It helped Ayumi calm down again, saying,</p>
            <p className="italic text-text-faint">"She still loves you, no matter how long you live. Please treat this as a memory, before everything is forgotten. If you accept that, she will pass on knowing that you still love her."</p>
            <p className="font-sans text-sm text-text-muted">A pivotal moment. Ayumi promises herself.</p>
          </div>
          <p>
            It is now 2100. After the incident in her past involving a suppressed outburst of emotion, she left town and now lives more freely in the city, hiding her power under layers of confidence, smiles, pranks, and thigh straps. She heard two couples bickering:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Ayane Otokura', 'Akari Chisaki'].map(n => (
              <span key={n} className="tag">{n}</span>
            ))}
          </div>
          <p>
            They were debating who was the cutest, until Ayumi stepped in. And after some time hanging out with them, both Ayane and Otokura confessed, asking to be her girlfriends (she said yes).
          </p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Calm, composed, and effortlessly chill in almost any situation',
            'Has a natural "cool girl" aura—people feel at ease around her',
            'Speaks softly but with purpose; her words carry emotional weight',
            'Deeply observant and rarely rushes to judgment',
            'Loves soft music, long walks, and watching clouds drift',
            'Still flirty at times, but in a subtle, soothing way',
            'A little bit submissive 😳',
          ].map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#d49fff] mt-0.5">✦</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Hobbies & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Jogging early in the morning before the city wakes up</li>
              <li>• Collecting wind chimes and tuning them by hand</li>
              <li>• Napping in sunlit parks with a hoodie over her eyes</li>
              <li>• Reading romantic manga (though she claims she's "just skimming")</li>
              <li>• Has a fascination with tight spaces, gaps, and any challenging….obstacles.</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Autumn breezes and cloudy afternoons</li>
              <li>• Herbal tea (especially chamomile and mint)</li>
              <li>• Soft indie music and acoustic guitar</li>
              <li>• Tight, enclosed spaces</li>
              <li>• Light touches and forehead kisses</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Loud crowds and bright flashing lights</li>
              <li>• People who act without thinking</li>
              <li>• Having her hair touched without permission</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Owl 🦉 · <span className="text-text-faint">Comfort:</span> Sea Otter 🦦</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <ul className="space-y-2 text-sm text-text-muted">
          <li><span className="text-text-faint font-mono text-xs">Hair —</span> Long emerald green hair, wind-blown and messy in a stylish way</li>
          <li><span className="text-text-faint font-mono text-xs">Eyes —</span> Emerald or turquoise (depending on lighting)</li>
          <li><span className="text-text-faint font-mono text-xs">Build —</span> Toned physique, visible abs, sporty build</li>
          <li><span className="text-text-faint font-mono text-xs">Style —</span> Often wears off-shoulder sweaters or crop tops with shorts/thigh straps</li>
          <li><span className="text-text-faint font-mono text-xs">Jewelry —</span> Small ear studs and a lucky charm around her ankle</li>
        </ul>
      </div>

      <Divider />

      {/* Powers */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Powers</h3>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-[#d49fff] mb-2">Aerokinesis (Mild)</p>
            <p className="text-sm text-text-muted leading-relaxed">Can influence small gusts and breezes, but suppresses most of it. In rare emotional spikes, it becomes turbulent.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#d49fff] mb-2">Windstep</p>
            <p className="text-sm text-text-muted leading-relaxed">An almost dance-like form of sprinting; she's so light-footed, some say she doesn't even touch the ground.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-ayane',  label: 'Otokura, Ayane',   color: 'text-[#7ef5ff]' },
  { key: 'characters-akari',  label: 'Chisaki, Akari',   color: 'text-[#ffaad4]' },
  { key: 'characters-ayumi',  label: 'Kazehara, Ayumi',  color: 'text-[#d49fff]' },
]


const CHARACTER_ROUTES: Record<string, string> = {
  'characters-ayane': '/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura',
  'characters-akari': '/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki',
  'characters-ayumi': '/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara',
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
        <div className="border border-white/5 rounded-xl p-5 bg-[rgba(255,255,255,0.01)] opacity-40">
          <p className="font-serif text-lg text-text-faint mb-1">"Ayafutsu-Sensei"</p>
          <p className="text-[10px] font-mono text-text-faint">Main Supporting Cast</p>
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

export default function LonelyAndroid() {
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
                  ? 'border-[rgba(0,229,255,0.6)] text-[#7ef5ff] bg-[rgba(0,229,255,0.08)]'
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
            <button className="px-4 py-1.5 rounded-full text-xs font-mono border border-[rgba(0,229,255,0.6)] text-[#7ef5ff] bg-[rgba(0,229,255,0.08)]">
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
      {activeTab === 'characters-ayane'    && <AyaneTab />}
      {activeTab === 'characters-akari'    && <AkariTab />}
      {activeTab === 'characters-ayumi'    && <AyumiTab />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
        
      </div>

    </div>
  )
}

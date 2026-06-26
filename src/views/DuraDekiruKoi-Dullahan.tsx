import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab =
  | 'overview'
  | 'characters'
  | 'characters-kori'
  | 'characters-hinoka'

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

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="space-y-10">

      <ImgPlaceholder label="/titles/dullahan-banner.jpg" aspect="aspect-[3/1]" />

      {/* Title Block */}
      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">In Development · Vol 1 · A Three Story Series</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-1">
          Can this Dullahan Fall in Love?!
        </h1>
        <p className="text-text-faint font-mono text-sm mb-1">このデュラハン、恋ができるの？</p>
        <p className="text-text-faint text-xs font-mono">Kono Dyurahan, koi ga dekiru no? · Shortform: DuraDekiruKoi</p>
      </div>

      <Divider />

      {/* Quick Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book Info</h2>
        <InfoGrid items={[
          { label: 'Creation Date', value: 'October 22, 2025' },
          { label: 'Status', value: '— to be determined —' },
          { label: 'Format', value: 'Original English Light Novel (OELN) · Vol 1' },
          { label: 'Series', value: 'A Three Story Series' },
          { label: 'Setting', value: 'Neo Hokkaido / Sapporo' },
          { label: 'Part of', value: 'The Naiseikai Universe' },
        ]} />
      </div>

      <Divider />

      {/* Genres */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {["Girls' Love / Yuri", 'Romance', 'Slice of Life', 'Comedy', 'Magical Realism', 'Drama', 'Slow Burn'].map(g => (
            <span key={g} className="tag tag-cyan">{g}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Story Premise */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Premise</h2>
        <div className="callout callout-purple">
          <p className="text-sm text-text-muted leading-relaxed">
            The Sun's Flame, Hinoka Amane, is a Phoenix who is slowly flickering towards extinction. Kori Yukino is a Dullahan who has wandered for four centuries without a home. When they meet at a forgotten shrine in snowy Neo-Hokkaido, love sparks where myth tries to deny it. Can the two ancient beings at the end of their stories find a new beginning without having their flame burn out…?
          </p>
        </div>
      </div>

      <Divider />

      {/* Book's Blurb */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Book's Blurb</h2>
        <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
          <p>A phoenix losing her flame.</p>
          <p>A Dullahan searching for meaning.</p>
          <p>When their paths cross at a hidden shrine in snowy Neo-Hokkaido, love sparks where myth should end.</p>
          <p>But can a firebird destined to die… fall for a girl who was never meant to stay?</p>
          <p className="font-serif text-base text-[#d49fff] italic mt-2">
            A quiet, magical GL romance about healing, frozen mornings, and choosing love no matter what fate says.
          </p>
        </div>
      </div>

      <Divider />

      {/* Story Description */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Story Description</h2>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
          <p>
            In the quiet snows of Neo-Hokkaido, two mythic beings cross paths at the end of the world.
          </p>
          <p>
            Hinoka Amane is the last phoenix: an immortal firebird girl who once lived in a floating sky castle. Now, she resides in a hidden shrine atop a forgotten mountain, her eternal flame flickering toward extinction. Her lineage is gone. Her council, destroyed. Her magic, unstable. She is tired, alone... and slowly burning out.
          </p>
          <p>
            Then enters Yukino Kōri: a headless Dullahan from the Edo Era, riding with her familiars through frost and time. An ancient guardian of ice and blue flame, Kōri travels the earth with quiet laughter and stories from four centuries past. She carries no weapons now, only memories and soft smiles. And her soul has been waiting for a place to call home.
          </p>
          <p>
            When Kōri stumbles upon the abandoned Phoenix Shrine, what begins as an awkward encounter turns into something neither of them expected: companionship, healing, and the terrifying possibility of love. As their worlds begin to entwine—snow and ash, silence and spark—both girls must confront what it means to live, to love, and to let someone else carry your heart.
          </p>
        </div>
      </div>

      <Divider />

      {/* Characters */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Main Characters</h2>
        <div className="flex flex-wrap gap-2">
          {['Yukino Kōri 雪乃 氷焔', 'Amane Hinoka 火乃香 天音'].map(c => (
            <span key={c} className="tag tag-cyan">{c}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

// ─── Yukino Kōri ──────────────────────────────────────────────────────────────

function KoriTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/dullahan/yukino-kori.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Yukino Kōri</h2>
        <p className="text-text-faint font-mono text-sm">雪乃, 氷焔</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Kōri' },
          { label: 'Last Name', value: 'Yukino' },
          { label: 'Nickname', value: 'Ko / Yuki' },
          { label: 'Gender', value: 'Female' },
          { label: 'Pronouns', value: 'She/Her' },
          { label: 'Age', value: '450+ (appears to be 25)' },
          { label: 'Race', value: 'Dullahan' },
          { label: 'Birthday', value: 'Jan 7th, 1650' },
          { label: 'Height', value: "5'1" },
          { label: 'OC Created', value: '10/22/2025' },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Kori Yukino. The Dullahan who travels. She was once a guard and warrior (martial arts warrior) during the Edo Era. She ages every 50 years. Her age is very hard to tell because she doesn't age as a typical human. Kori, despite being an elemental ice dullahan with a blue flame, her demeanor is very calm and wise. Like she's witnessed all (she did). Not only she was from the Edo Era (1600), she knows how to adapt to society as a whole even when time progressed.
          </p>
          <p>
            Now…it's the year 2100. Despite having an appearance of a twenty-five year girl, she still has her personality and quirks: energetic, lovable, silly, sometimes dumb, and just….really fun to get along with. She doesn't need school because her intelligence came from the Edo Era to now. Society helped shape her understanding of how most things work, including technology and such.
          </p>
          <p>
            The most intriguing thing about Kori is that she loves animals (any kind). Despite being a Dullahan, she has her horse, Yuno, and a few other yokais as familiars / pets:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Yuno — Horse', 'Yoru — Water Spirit', 'Naru — A Snow Parrot'].map(p => (
              <span key={p} className="tag tag-cyan">{p}</span>
            ))}
          </div>
          <p>
            Her pets offer her the ability to love and care, who she treasures clearly. But even the familiars (despite being wise — they can talk, except Yuno) tell her to give her love to someone else, not just them. They kept traveling in the mountains until Naru took notice of an odd abandoned shrine that had magic laced into it. When they stepped into it, the entire place looked different:
          </p>
          <ul className="space-y-1 ml-2">
            {['decorated with kitsune-like objects', 'phoenix like decorations', 'and also castle-like stuff'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="text-[#7ef5ff] mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>It was Hinoka Amane's home. Kori bumped into her in the yards she was cleaning.</p>
          <div className="neon-card space-y-2 font-mono text-sm">
            <p><span className="text-text-faint text-xs">Hinoka —</span> "How did you get in here…?"</p>
            <p><span className="text-text-faint text-xs">Kori —</span> "Well, I'm a Dullahan….so I can see magical barriers and illusions. Like my pets saw this…"</p>
            <p><span className="text-text-faint text-xs">Kori —</span> "Sorry..! We didn't mean to…"</p>
          </div>
          <p>The two became friends (later lovers) of shared interests like manga, drawing, music….etc.</p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Lovable. Silly. Energetic. Her personality depends on her mood, and if she chooses if she wants to socialize or not. Even though she was a guard in her past, she can adapt due to time. So her personality is molded by the people she meets over time, despite aging slower than usual.
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
              <li>• Likes to draw sometimes. Likes to read manga.</li>
              <li>• Likes to play with her three pets.</li>
              <li>• Lofi Music</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Spiders (she thinks they're cool)</li>
              <li>• Summer</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Insects (but she kills them by accident because of the flame from her neck)</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Any · <span className="text-text-faint">Comfort:</span> Her pets</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Visual Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>
        <div className="callout callout-purple mb-4">
          <p className="text-sm text-text-muted italic">A Dullahan that loves to travel with her pets!</p>
        </div>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Muted Blue with aqua highlights. Her hair is as soft as snow and feels very cool. Sideswept bangs that speak regal fashion.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted">Heterochromatic — Sea Blue and Ice Blue.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Neck Accessory</p>
            <p className="text-sm text-text-muted leading-relaxed">
              She wears a collar made of magic and metal that allows her to detach/attach her head when she wants. Like a switch. Nothing too edgy. Just plain and simple.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🧥 Outfit Style</p>
            <ul className="space-y-1 text-sm text-text-muted leading-relaxed">
              <li>• Her home attire is super casual.</li>
              <li>• Her travel outfit consists of: vintage set, leathery-like armor (adventurer style).</li>
              <li>• Legs always warm: long socks, white tights, or soft sweats.</li>
              <li>• When she does go out….she will wear something that doesn't stand out as much. Like a muted blue dress that sparkles like stars.</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🌬 Expressions &amp; Body Language</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Strong and stoic. She may be a martial artist and guard, but she always has a straight back. A good figure and build.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Hinoka Amane — Partner</p>
      </div>
    </div>
  )
}

// ─── Amane Hinoka ─────────────────────────────────────────────────────────────

function HinokaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/dullahan/amane-hinoka.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Amane Hinoka</h2>
        <p className="text-text-faint font-mono text-sm">火乃香 天音</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <InfoGrid items={[
          { label: 'First Name', value: 'Hinoka' },
          { label: 'Last Name', value: 'Amane' },
          { label: 'Nickname', value: 'Hino-chan / Ino-tan' },
          { label: 'Gender', value: 'Female' },
          { label: 'Pronouns', value: 'She/Her' },
          { label: 'Age', value: '24' },
          { label: 'Birthday', value: 'July 7th, 2076' },
          { label: 'Height', value: "4'8" },
          { label: 'OC Created', value: '10/22/2025' },
        ]} />
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Hinoka is a descendant of the Phoenix Clan from the Phoenix Sky Castle. She is the last heir to the throne, but she wants no wealth or fame. Despite being a mythological being that is to be feared and worshipped, she also doesn't want that: sacrifices, prayers, and rituals. Yet….the entire lineage….<em>actually respects that</em>?!
          </p>
          <div className="neon-card font-mono text-sm">
            <p><span className="text-text-faint text-xs">The Council —</span> "Go live your own life, Hinoka." — one of the councils literally told her to be herself—her own person.</p>
          </div>
          <p>
            So, she goes down to Neo-Hokkaido of Japan, where there is a lot of beautiful sceneries aside from the neon-lit cities that dwelled among nature.
          </p>
          <p>
            She decided to move into an abandoned mountain shrine that is near Sumiyoshi Shrine in Otaru, which is as close to the Sky Castle's atmosphere and vibe. She restored the abandoned shrine back to normal, but hid it from the public with her magic. To the general public, it is still an abandoned shrine, but to Hinoka, it's her home. She calls her home <strong>"The Phoenix Shrine."</strong>
          </p>
          <p>
            She's integrated well with society. Sometimes would get random offerings from passersby who offer to the "abandoned shrine" (from their viewpoint).
          </p>
          <div className="callout border-red-500/20 bg-[rgba(255,60,60,0.04)]">
            <p className="font-mono text-xs text-red-400 mb-2">⚠ The Attack on the Sky Castle</p>
            <p>
              But on Christmas Eve, the Sky Castle was attacked. By—Dark Hydra Serpents. A mystical force that rivals Phoenixes. Hinoka, being the last descendant, became enraged, where the talisman (her necklace) broke where she unleashed her full power on those Hydra Serpents, nearly decimating their kind (one escaped).
            </p>
            <p className="mt-2">
              Hinoka is upset. Her lineage is gone. Her entire family. The people who respect her. And the generations of members from The Council and even her friends…? <em>They're gone.</em>
            </p>
          </div>
          <p>
            Her Eternal Flame (property of a phoenix) that invigorates her energy and personality is slowly….dying out. And without that, she could die a painful death.
          </p>
          <p>
            But that all changed one day when a soul entered The Phoenix Shrine. A warrior of ice and blue flame, a Dullahan by the name: Kori Yukino. She befriended Hinoka. And that's when a certain flame rose in Hinoka's heart. It wasn't just an eternal flame. It was a flame fueled by love—eternal love.
          </p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>
            Full of energy, flame, and fire (she's a fire birb). She can be a klutz at times. Airhead energy when she needs. But her personality was molded when Kori Yukino came into her life. Highly intelligent. College not needed. Emotionally dense. Physically short.
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
              <li>• Likes to randomly send out magic blasts as fireworks</li>
              <li>• Chilling in the snow (it negates her fire abilities)</li>
              <li>• Reading literature and sometimes manga</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Cold Food. Likes to eat ice cubes and ice cream</li>
              <li>• Likes to touch Kori's Blue Flame (it hurts in a good way)</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Spiders</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Fire Lizards · <span className="text-text-faint">Comfort:</span> Snow Moth</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Visual Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>
        <div className="callout callout-purple mb-4">
          <p className="text-sm text-text-muted italic">Full of energy, flame, and fire. "Don't think you've gotten away with this!!"</p>
        </div>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💇 Hair</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Crimson Orange. Long hair length. Sometimes likes to style it like a princess braid or in a ponytail. Sideswept bangs that feel like you can see her personality.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👀 Eyes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Orange. Energy. Full of life and fire (even if she is depressed). Charismatic!
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🧥 Outfit Style</p>
            <ul className="space-y-1 text-sm text-text-muted leading-relaxed">
              <li>• Casual but <strong>aloof.</strong></li>
              <li>• Her casual wear often consists of kitsune-style maid dress appearance at home.</li>
              <li>• Legs always warm: long socks, white tights, or soft sweats.</li>
              <li>• When she does go out….she will wear something that doesn't stand out as much. Like a muted red turtleneck and a long pleated skirt.</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🌬 Expressions &amp; Body Language</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Only <strong>relaxes when alone.</strong> Personality can vary. Her mood shifts are very quick though. She can be happy, sad, upset, mad, and then happy again.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🎧 Accessories</p>
            <ul className="space-y-2 text-sm text-text-muted leading-relaxed">
              <li>• <strong>Red Earrings</strong> — particularly crimson-like.</li>
              <li>
                • <strong>Talisman Necklace — Magic Jade (green):</strong> helps limit her overwhelming phoenix magic and powers. It breaks when her emotions become distressed, but repairs itself when it finds solace. Or when Hinoka decides the rampage is enough.
                <br />
                <span className="text-text-faint text-xs">It was given by the council, since they knew of Hinoka's powers. Last heir / descendant is the strongest out of the whole lineage.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="font-serif text-lg text-text mb-2">Relationships</h3>
        <p className="text-sm text-text-muted">Kori Yukino — Partner</p>
      </div>
    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-kori',   label: 'Yukino Kōri',   color: 'text-[#7ef5ff]' },
  { key: 'characters-hinoka', label: 'Amane Hinoka',  color: 'text-[#ffaad4]' },
]


const CHARACTER_ROUTES: Record<string, string> = {
  'characters-kori': '/titles/DuraDekiruKoi-Dullahan/Kori-Yukino',
  'characters-hinoka': '/titles/DuraDekiruKoi-Dullahan/Hinoka-Amane',
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

// ─── Main Page ────────────────────────────────────────────────────────────────

const TOP_TABS: { key: Tab; label: string }[] = [
  { key: 'overview',   label: 'Overview' },
  { key: 'characters', label: 'Characters' },
]

export default function Dullahan() {
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
      {activeTab === 'overview'             && <OverviewTab />}
      {activeTab === 'characters'           && <CharactersIndex />}
      {activeTab === 'characters-kori'      && <KoriTab />}
      {activeTab === 'characters-hinoka'    && <HinokaTab />}

      {/* Footer nav */}
      <Divider />
      <div className="flex flex-wrap gap-3">
        <Link to="/titles" className="btn-neon-cyan text-xs">← All Titles</Link>
        <Link to="/lore" className="btn-neon-purple text-xs">Lore &amp; Timeline →</Link>
        
      </div>

    </div>
  )
}

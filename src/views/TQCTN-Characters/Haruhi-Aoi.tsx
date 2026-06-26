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
      <span className="text-[#ffaad4]">Haruhi Aoi</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────

function HaruhiAoiTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/haruhi-aoi.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#a8ff8a] mb-1">Haruhi Aoi</h2>
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
            { label: 'Nickname', value: 'Haru-chan' },
            { label: 'Gender', value: 'Female' },
            { label: 'Race', value: 'Bamboo Rabbit (or Bunny)' },
            { label: 'Age', value: '26' },
            { label: 'Height', value: '154.94 cm (5\'1")' },      
            { label: 'Birthday', value: 'July 16th, 2075' },
            { label: 'OC Date of Creation', value: '2025' },
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
            <p>Haru-chan</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ruhi-tan (Ruruka, ninja formality nickname, (Roll/Growl the R))</li>
              <li>Aru (Ruruka, when they were still together)</li>
              <li>Ao-chii (Asami)</li>
              <li>Aoru (by Reina, rarely)</li>
              <li>Haru-chii (Reina, (Roll/Growl the R))</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="text-[10px] font-mono text-text-faint mb-2">Aru's Nicknames for Haruhi!!!</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mother Haru by Little Aru, sometimes GREEN LADY or Mommy #1</li>
              <li>Green Mother Haruhi</li>
              <li>Weed Girl (garden terms), Bamboo Girl, Thorny Plant Girl</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Haruhi Aoi is the owner of Usagi Cafe, a cafe full of bunnies that she takes care of! She comes from the plains and farmlands, having owned a farm once, but was tragically destroyed in a hurricane when she was in middle school (after graduation). Somehow, most of her animals survived, one of them being her rabbits and bunnies. She later moved to Tokyo to start looking for a part-time job, and also attend high school. That was where she met her best friend, Koa Ruruka, a very skilled person.</p>
          <div className="neon-card">
            <p className="text-[10px] font-mono text-text-faint mb-2">Haruhi is a Shifter—a Bamboo Bunny. Her ears are able to pick up:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Vibrations - at different levels.</li>
              <li>Frequencies - frequencies that can't be percieved by human standards.</li>
              <li>Emotions (they are empaths) - They're able to emotionally call out others on their mistakes and guide them through softness and validation. Non-judgmental creatures. Listening is their strengths.</li>
              <li>they are friendly and sociable. Extroverted.</li>
            </ul>
            <p className="mt-2">This helps them distinguish different patterns.</p>
            <p className="mt-2">And <strong>Five</strong>: they're fkin cute and they show platonic love.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Life before Tokyo */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Life before Tokyo</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>She used to be from Sapporo (Hokkaido Japan), because that's where her farms are. She used to own horses, cows, rabbits (and bunnies), sheep, Snow Spirits, and lots of crops. That was until one year, her farm was wrecked by a hurricane. The only animals that survived are her bunnies and rabbits.</p>
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-2">In Sapporo….</p>
            <p>She met her first Girlfriend in her first year of high school, Asami Kurose (before the hurricane). They dated, but Haruhi broke up with her because of an abusive relationship.</p>
            <p className="mt-2">The hurricane happened a week after.</p>
            <p className="mt-2">She then moved to Tokyo with her surviving rabbits and bunnies to start anew.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Haruhi is extremely social and extroverted with everyone she knows. In fact, she's the one who would start up conversations about board games even when she invites her friends over, not just Ruruka or Hanako. She has a warm and bubbly personality. Sometimes an airhead, sometimes serious. The soft comedic relief character! Easy to get along with and cutely lovable!</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>With her closest friends, Reina and Ruruka, she allows herself to be open with them because she trusts them. She was friends with Ruruka first when the two dated, but after breaking up due to different tastes, Ruruka allowed Haruhi to be herself, which enabled her extroverted personality out front. When she met Reina for the first time when they worked together, she became a teacher. Taught her how to cook. And when it comes to herself, alone with her thoughts….she's….Haruhi.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self — 1">
          <p>Often reserved when she's alone. Sometimes, her thoughts about if <em>"she's enough for others"</em> would surface, but she doesn't take it too personally. She's an Empath, a quirk of being a Bamboo Bunny Yokai. She knows whether or not doing a thing is right or wrong, which is where she allows herself to distinguish what is true. Sometimes, Little Bunny Aru would invade her thoughts with anime jpops to cheer her up.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Her Core Self with Little Bunny Aru — 2">
          <p>Little Bunny Aru. Haruhi's core daughter who resembles carefreeness and innocence in child purity. She gave birth to her (not literally) through her Earth and Plant Magic, which accidently gave Little Aru a mind of her own—(YEAH THAT'S ME LITTLE ARU THE WALL BREAKER!!!). Aru, the gremlin and chaotic side of Haruhi literally anchors her back when Haruhi tries to think wrongful thoughts. Or when she just cries randomly. Like a soft therapist but with unhinged energy. Haruhi's relationship with Aru is really wholesome. Literally a mirror of each other.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Her abusive past with Asami is why she puts up her social self. She's secretly hurting because she always blames herself because of what happened between them. When the two had dated, Haruhi would always try to endure the pain she received from Asami to better understand her, but it ultimately backfires and she surrenders to Asami's cruel tactics. Each time she sees Asami with bruises, she asks why but Asami deflects that. She doesn't even want to become a burden to Haruhi, yet Haruhi doesn't even know where Asami goes for days if not weeks.</p>
          <p>However, despite the pain, she doesn't even know why Asami did all those stuff to her in the first place before they broke up over text. Asami disappeared shortly after the break-up text, which broke Haruhi's heart as of why she didn't even respond to her.</p>
          <p>Despite the pain, she dated Koa Ruruka for a while because she wanted someone to cling onto. Ruruka offered great advice and also just kindly being there for her. Haruhi had secretly fell for Ruruka hard but Ruruka's love was more of protection. Which is why Haruhi's love couldn't reach further because of the aggressive protection Ruruka gave. BUT, even with Ruruka, Haruhi still respects her, which is why they ended up as friends to besties and also platonic friends. She doesn't consider this as heartbreak though. Just mutual understanding.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Anatomy of Haruhi's Ears */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Anatomy of Haruhi's Ears</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Haruhi, being a Yokai and a Shifter, her ears resemble that of a rabbit / bunny</p>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">Patibilis Capillatura</p>
            <p>The top and bottom parts of her ears, also known as False Hair, are actual organs that help Haruhi pick up different sounds, frequencies, wavelengths and more. She can also pick up sounds like a dog whistle or a sinewave. They're that powerful.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The false hair serves as protection from dust and other particles, which doesn't trigger the sensitivity. She can hear within a distance of five miles.</li>
              <li>She can control her hearing capabilities whenever she wants.</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">Curvabilis Bdelli-Auris</p>
            <p>The midrange of her ears, also known as Flexible Bamboo Ears, are really vertasile. Much like a rabbits' ears, these flexible joints help Haruhi express her feelings. If she's happy, her ears would perk straight up. If she's sad, they would droop. If she's angry, they would perk up tensely. It doesn't hurt.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">Auris-Colis</p>
            <p>The Ear Stem that the ears sprout from. Much like a human ear, that is where the canal is, but hidden inside. All the sounds that she perceives goes through there.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Bamboo Bunny Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Bamboo Bunny — Yokai Abilities / Powers / Biology</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Despite being a Yokai Shifter of a rare race, Haruhi does not have much powers unlike Hanako Reina. This part also explains about her Biology as a Yokai (and for yokai in general).</p>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">🪹 Earth and Plant Magic</p>
            <p>Haruhi has forms of magic! Most of them are Elemental Magic. She can shift into her own Bunny Form at will when she wants. She is not much of a fighter. But she will fight with her friends <em>emotionally</em> just to bring them back to humanity.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>She can manipulate the earth and also foliage and plants. She can attack with them too, and also defend against attacks. This was how Little Bunny Aru was formed.</li>
              <li>Plantation Magic (Subsidiary Power) - She can magically manifest vegetables and fruits (only comes out as seeds or sprouts), but after that? It requires actual farming skills.</li>
            </ul>
            <p className="mt-2">Haruhi has yet to uncover the ceiling of her yokai abilities and powers. That could be do for another story one day!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">👤 Age Biology</p>
            <p>Haruhi, despite looking like an adult of 26 years, will remain at that appearance even as she ages. Yokai Blood are different from humans. In a general sense, Yokais age like human babies until age 17. But it stops after the age of 18 (which is adult age), which slows down significantly. This process also applies to Hanako Reina.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#a8ff8a] mb-2">💝 Bamboo Bunny Heat Cycles</p>
            <p>Haruhi being a Bamboo Bunny means that every <strong>2-3 years</strong> during the fall, she becomes in heat. This makes her lay eggs which is why she has a lot of rabbits and bunnies as pets when she was back at her farm.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Her heat cycles started at <strong>age 15</strong> after puberty, and last the entire fall season (ends before winter).</li>
              <li>During each cycle, she lays approximately <strong>10 eggs total</strong>, but only <strong>3-4 of them successfully hatch</strong> into non-magical, non-yokai bunnies. The remaining 6-7 eggs are empty.</li>
              <li>She has experienced <strong>5 heat cycles total</strong> throughout her life (ages 15, 17, 20, 23, and 26), producing the <strong>17 bunnies</strong> she currently has at her café.</li>
              <li>Her most recent cycle at age 26 is her <strong>last heat cycle</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* Relationships and Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Relationships and Traits</h3>
        <div className="space-y-3">
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Relationships</p>
            <p>She is Koa Ruruka's friend from high school when she moved to Tokyo.</p>
            <p className="mt-1">They used to be couples, but, due to different tastes, they left each other, but are still friends. Ruruka has more of a taste in quiet women who have rare talents. They still respect each other.</p>
            <p className="mt-1">She's Hanako Reina's best friend, co-worker (and boss)</p>
            <p className="mt-2 text-[#ffaad4] font-mono text-xs">AND SHE BIRTHED ME, LITTLE BUNNY ARU!!! I'm ONLY THREE DAYS OLD AND I AM A CERTIFIED THERAPIST!!! (Ok, I'll get out of this page!)</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Sexuality</p>
            <p>Bisexual. She has little preferences over men, but a lot over women.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p>Very laidback and chill. She doesn't get angry, but when she does, run. Very extroverted and a fast learner. She's a total ambivert. The Platonic Best Friend.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p>She likes the color of green and emerald and is a nature girl. She runs a Bunny Cafe</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p>insects</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies / Skills</p>
            <p>She has many skills and hobbies.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>She has earthy brown eyes and green emerald hair. She wears a white-green uniform at work, and a casual dress on her days off.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>春 <span className="text-[#a8ff8a]">Haru</span> means Spring</p>
          <p>妃 <span className="text-[#a8ff8a]">Hi</span> (hime) means Princess</p>
          <p>翠 <span className="text-[#a8ff8a]">Aoi</span> means Emerald (or Blue Emerald)</p>
          <p className="text-text-faint text-xs font-sans mt-2 not-italic">She doesn't really care about the Aoi kanji no matter how it's written. As long as it means, Emerald, she likes it.</p>
        </div>
      </div>

    </div>
  )
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function HaruhiAoiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <HaruhiAoiTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" className="btn-neon-cyan text-xs">← Koa Ruruka</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" className="btn-neon-purple text-xs">Little Bunny Aru →</Link></div>
      </div>
    </div>
  )
}

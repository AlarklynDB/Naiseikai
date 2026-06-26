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
      <span className="text-[#d49fff]">Koa Ruruka</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────

function KoaRurukaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/koa-ruruka.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
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
            { label: 'Nickname', value: 'Koa-chan' },
            { label: 'Gender', value: 'Female' },
            { label: 'Sexuality', value: 'Lesbian' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 2nd, 2076' },
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
            <p>Koa-chan</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ruruka, since Ruruka prefers it with everyone</li>
              <li>Ruru-chii (from Reina and Haruhi)</li>
              <li>Ko-achii (by everyone)</li>
              <li>Ururu sometimes, by Haruhi</li>
              <li>Koru or Koara (Koala) by Asami</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="text-[10px] font-mono text-text-faint mb-2">Aru's Nicknames for Ruruka!!!</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Purple Lady by Little Aru, sometimes Mommy #3 and Ninja Lady</li>
              <li>Thwacky Parkour Mommy #3 - Yes, ARU likes calling her that</li>
              <li>BIG OPPAI NINJA!!!! (WHAT?! IT'S TRUE. ARU HAS SEEN HEAVEN!!!)</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Koa Ruruka, she comes from a wealthy ninja heritage, but was stripped of it after her family found out she had preferences for women. Despite her outgoing and laidback personality, she never cared of her heritage because it didn't matter to her. She wanted to live a life to work diligently to earn her own income even without inheriting it from her parents. Ruruka always has her guard up.</p>
          <p>One day, coming home from work, she found a girl crying next to a play structure in a park, where she commutes daily. She asks if she was okay but she wasn't. Getting her name, she was known as Hanako Reina, a girl who had lost a life that meant everything. Hanako told her story to Koa, and she felt deeply moved, wanting to care for her. So, she offers her to stay at her place.</p>
          <p>Ruruka acted like a motherly figure to Hanako when they started living together as room-mates, but as time passed, Hanako had grown to like Koa, and confessed her feelings to her.</p>
          <p>Ruruka states that she only saw her as a daughter, someone who had no one else to care for. But Hanako ignores that remark and wanted to stay with her. Because deep down, Hanako knew—she knew that Ruruka can't keep hiding behind her emotions.</p>
          <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic">"I would risk anything to be by your side, Ruruka-san" Hanako says to her.</blockquote>
          <p>However, her feelings to Hanako changed one day, as she presented a necklace she made herself to Ruruka (on Ruruka's birthday). It had completely broke her high guard and she cried in her arms, unable to comprehend the feelings she had for her. The present was an ice snowflake necklace, with both of their names etched in it. Ruruka wore it, but all she could do was weep. Eventually, she spoke of the elephant in the room, telling Hanako that her feelings towards her was mixed, including herself, apologizing even. Hanako accepted her apology because her feelings for Ruruka still stayed the same. In fact, Hanako's feelings evolved along side with Ruruka right at that moment.</p>
          <p>Ruruka asked Hanako out on her birthday, and they started dating.</p>
          <p>This bold move from Hanako was enough to tear Ruruka's walls down.</p>
        </div>
      </div>

      <Divider />

      {/* The Koa Clan */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The "Koa" Clan</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Her Ninja Clan, called the Koa Clan (from where she was ostracized from) is in the Hiroshima Prefecture of Neo-Japan. Well, truth be told, Koa is actually a shortened version of the name:</p>
          <div className="callout font-mono text-center text-text-faint italic">
            "Koaru-hanaeitana-kayamei-mizukana"—
          </div>
          <p>which is supposedly the longest name a Ninja Family had for generations. This long name can be split up into different parts, which became their own families later down the line:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { gen: '15th, Last Gen', name: 'Koa', note: 'Where Ruruka came from.' },
              { gen: '14th Gen', name: 'Koaru' },
              { gen: '13th Gen', name: 'Hanae' },
              { gen: '12th Gen', name: 'Eita' },
              { gen: '11th Gen', name: 'Ruha' },
              { gen: '10th Gen', name: 'Tana' },
              { gen: '9th Gen', name: 'Itana' },
              { gen: '8th Gen', name: 'Kaya' },
              { gen: '7th Gen', name: 'Kayamei' },
              { gen: '6th Gen', name: 'Mei' },
              { gen: '5th Gen', name: 'Ayame' },
              { gen: '4th Gen', name: 'Mizu' },
              { gen: '3rd Gen', name: 'Mizuka' },
              { gen: '2nd Gen', name: 'Kana' },
              { gen: '1st Gen', name: 'Izuka' },
            ].map(({ gen, name, note }) => (
              <div key={gen} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{gen}</p>
                <p className="text-sm text-text-muted font-mono">{name}{note ? <span className="text-text-faint text-xs ml-2">— {note}</span> : ''}</p>
              </div>
            ))}
          </div>
          <p>The entire list of families and names here have up to four or five siblings, which makes their children at least long distant cousins of Ruruka by at least 3% of their shared bloodline. Among one of these generations, one of their kids is a half dragon half human hybrid.</p>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Ruruka is plenty outgoing. She likes to meet new people whether or not they are yokai or not. In fact, during her time with the NYAQ, she has a couple of good acquaintances she often keeps up with even if they hadn't chatted with her in a while. Gets along well with others. Sometimes would help others or protect them if needed, which gives her this "mother" like personality. Warm and distinguished.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>Whenever she's with Reina or Haruhi, <em>maybe even Little Aru</em>, she trusts them because they're friends. Haruhi is the best friend that stays platonic no matter what. If Ruruka ever goes out of line, she trusts them enough to bring her back to her senses. Ruruka allows herself to be soft and open with them and sometimes would share her troubles. But with Reina, she's got this very sweet side to her ever since they started dating. She loves her friends very much. Likes to pamper Aru with headpats and snuggles.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>As a Ninja, she always holds her guard up. Even after being exiled from the Koa Clan, she swears to herself to protect herself at all costs, even if it becomes risky. Despite still retaining great skills as a Ninja she doesn't heavily rely on them when needed, only when the situation is called for. But ever since Reina had come into her life, she swore to change this side of her, because Reina taught her that equality is more important than self preservation and guardedness.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self with Haruhi">
          <p>There was a time they dated in High School when Haruhi moved to Tokyo to finish school, and to start the Usagi Cafe. They roughly dated for around two years. It was decent. At least. Because Haruhi had asked Ruruka out during one year and that's when they started going out. But at some point, Haruhi had to confide Ruruka into her previous relationship with Asami, which made Ruruka furious (she had the right to be mad). Ruruka tracked Asami down just to see her and give her some words. She could kill Asami for what she did to Haruhi, but death would be a harsh judgement since it wouldn't rectify what she did. But it's deemed illegal for humans to kill yokai, as stated in the YHCA laws.</p>
          <p>However, with Haruhi being with Ruruka, she gave her the chance to be herself, which is what enabled that cheerful personality Haruhi needed so much.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Ruruka can….be a little stoic even if she doesn't know it. She knows she's not perfect, but being evicted from the Koa Clan deeply troubled her. Even if the folks there knew about her preferences in women. The Koa Clan strictly follows the belief that man and women should be together, but Ruruka thinks otherwise. She knows the distinction of right and wrong, and she trusts her intuitiveness when it comes to choosing who her partner is to her.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self - 2">
          <p>The deeper root of her guarded nature comes from a tragedy she carries alone. When Ruruka was still training as a ninja, she went on a mission with her parents—a "take your kid to work day" that went horribly wrong. She carelessly unsealed a cursed coffin containing dangerous spirits. The spirits corrupted her parents, took control of their bodies, and forced them to impale themselves on a sharp wooden fence. Ruruka witnessed it all.</p>
          <p>The clan blamed her for their deaths and imprisoned her for two years before placing her with a host family. But grief turned to obsession. She broke into the Clan Archive Building, stole a forbidden tome said to revive the dead, and used it on her parents' graves. The spell went wrong—her parents returned as twisted homunculi, and the tome cursed her with 400 years of slowed aging. She never wanted immortality. She just wanted them back.</p>
          <p>The clan discovered what she'd done and imprisoned her because she:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Defied Ujuukyō's teachings (religion of Neo-Japan) by turning her back on it.</li>
            <li>Defied the sacred act of honoring death by trying to revive her dead parents.</li>
          </ul>
          <p className="mt-2">But the final reason for her exile wasn't any of these infractions.</p>
          <ul className="list-disc list-inside ml-2">
            <li>It was being lesbian.</li>
          </ul>
          <p className="mt-2">And why the Koa Clan cast her out. They taught that only relationships between men and women are sacred….though Ujuukyō and the NYAQ said otherwise. Not all Ninja Clans hold these beliefs, but hers did. This is why Ruruka built walls around her heart—why she struggles with vulnerability, why guardedness became her armor, and why loyalty means everything to her now.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Ninja Status and Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Ninja Status and Abilities</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Ninjas in this world are High Class Humans that often like to affiliate themselves with Yokai, due to the Ninja Yokai Association Quarters. Her Ninja Status in the NYAQ, she's known as The Speed Demon.</p>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Ruruka is QUITE strong!</p>
            <p>She can pulverize a factory size building if she wanted. That's how strong she is. If she wanted, and hadn't held back, she could assassinate and destroy a single state-wide city. Although she is not a yokai, her status as a Ninja is very high (less known) in the Ninja Yokai Association Quarters (NYAQ). She doesn't want fame as much, but she does get missions from them every now and then.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Her speed is something else!</p>
            <p>When she trained under the NYAQ, her top recorded speed was at 90-120 miles per hour, in under 15 minutes. She was trained in the Japan National Stadium. Her nickname was <em>"Speed Demon."</em></p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Ruruka uses Tomes, Runes, and Glyphs, Talismans….etc</p>
            <p>As a Ninja, she specializes in Shadow Tomes, Runes, Talismans, and Glyphs. Sometimes spells too. She has a lot of these in her arsenal. But ever since she was evicted and kicked out from the Koa Clan (for being gay), she still has them. It is unknown of how <em>many</em> she has. Kunai, Shurkiens and Swords are her main form of combat, not just her fists.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Her Perception is Strong!</p>
            <p>Her eyesight as a Ninja rivals that of a cat and a bat. She can see well in the dark, along with far away objects that are miles away. Comparable to Reina. But Ruruka is dumb and often mistakes a plane as a bird, even when it's up close. She confused a shopping bag for a Vapor Spirit.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Her Reflexes are OFF THE CHARTS</p>
            <p>She doesn't know it, but her hyper-reflexive reaction time is UNDER 10ms, which is as close to a Condylostylus (long legged fly) and far better than a cat! (cats react at 20ms). But when it comes to emotional reflexes…..she is emotionally dense and also slow. Which is why she often holds her guard up.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* More about Ruruka */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">More about Ruruka!</h3>
        <div className="space-y-3">
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Relationships</p>
            <p>She is happily taken, Hanako Reina's girlfriend.</p>
            <p>Haruhi Aoi's acquaintance and friend.</p>
            <p>Friends from high school, used to be couples.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Sexuality</p>
            <p>Lesbian / Gay. She has a strong preference in women, specifically those who are quiet or have rare talents.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Jobs</p>
            <p>She works three jobs. During the day, she is an Interior Designer / Judge</p>
            <p>During the night, she works as a bartender</p>
            <p>She is also a freelance pet caretaker</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p>Outgoing and extroverted, she acts like a mom to others. The only person she will ever spoil is Hanako. She is a strange yet mysterious person, and she loves to be open.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p>She likes all kinds of animals. Music is also something she likes.</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p>abusive parents, toxic traits</p>
          </div>
          <div className="neon-card text-sm text-text-muted">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <p>She loves playing with dogs and cats, bunnies also.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>She has long purple-brown hair, her eyes, an amethyst like color. She's 167.64 cm tall (5'6)</p>
          <p className="mt-2">Often wears her ninja clothing everywhere even to her jobs. She still likes to uphold her ninja status for legal reasons. But on her days off, she wears casual clothes.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="space-y-4 text-sm text-text-muted">
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-2">─────⊰ First Name Breakdown - Koa 琥空:</p>
            <p className="font-mono text-[10px] text-text-faint mb-1">Hiragana: コア/こあ</p>
            <p className="font-mono">琥 = Amber</p>
            <p className="font-mono">空 = Sky</p>
          </div>
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-2">─────⊰ Last Name Breakdown - Ruruka 瑠月</p>
            <p className="font-mono text-[10px] text-text-faint mb-1">Hiragana: るるか</p>
            <p className="font-mono">瑠 = Lapis, lapis lazuli</p>
            <p className="font-mono">月 = Moon, month</p>
          </div>
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-1">Full Name:</p>
            <p className="font-mono text-base text-[#d49fff]">瑠月琥空</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function KoaRurukaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <KoaRurukaTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Hanako-Reina" className="btn-neon-cyan text-xs">← Hanako Reina</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="btn-neon-purple text-xs">Haruhi Aoi →</Link></div>
      </div>
    </div>
  )
}

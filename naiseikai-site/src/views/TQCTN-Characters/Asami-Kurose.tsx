import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">The Quiet Crow and The Ninja!</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#7eb8ff]">Asami Kurose</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function AsamiKurosePage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Quote */}
        <blockquote className="border-l-2 border-[#7eb8ff]/40 pl-4 italic text-sm text-text-muted">
          "Tension rises when unrequited love happens to be painful <em>like a bed of thorns</em>"
        </blockquote>

        {/* Header */}
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Upcoming Character · TQCTN</span>
          <h2 className="font-serif text-3xl text-[#7eb8ff] mb-1">👥 Asami Kurose</h2>
          <p className="text-text-faint font-mono text-sm italic">朝美 黒瀬</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Asami' },
              { label: 'Last Name', value: 'Kurose' },
              { label: 'Nickname(s)', value: 'Kuru or Rose' },
              { label: 'By Haruhi', value: 'Asachii' },
              { label: 'By Reina', value: 'Ami, sometimes Kuu-chan' },
              { label: 'By Ruruka', value: '"Urosai-chan" (shut up slang)' },
              { label: 'Gender', value: 'Female' },
              { label: 'Yokai Race', value: 'Octoquid (Original) — Cursed w/ Snake Venom Blood' },
              { label: 'Age', value: '26' },
              { label: 'Height', value: "5'9 / 175.26 cm" },
              { label: 'Birthday', value: 'June 17th, 2075' },
              { label: 'OC Date of Creation', value: '11/20/2025' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>

          {/* Aru's Nicknames */}
          <div className="mt-4 neon-card text-sm text-text-muted space-y-1">
            <p className="font-mono text-xs text-[#7eb8ff] mb-2">Aru's Nicknames for Asami!!!</p>
            <p>Blue Lady by Little Aru, sometimes OctoGirl or Takoyaki. Kumo-Tako (Spider Octopus)</p>
            <p>Tako'don (Tako + Udon) !!! YES. ARU IS CALLING HER THAT.</p>
            <p>Super Emo Mommy #4</p>
          </div>
        </div>

        <Divider />

        {/* Lineage */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Asami Kurose's Lineage</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>She's a descendant of the Octoquid Yokai Line from 1779, which was where the YARC began their activities. They've captured all Octoquid alike and infused them with a <em>cursed tome</em> of Venomous Snake Blood, which caused them to become half octoquid and snake. They then released them into the wild to cause violence under control. But not every Octoquid followed orders, and they hid from the YARC. Some even fled to Mizuki Shoto for freedom.</p>
            <p>Among those family lines within the OctoQui Lineage, one of those lines became <em>Kurohashi</em> (1), and then <em>Kurohase</em> (2), <em>Kurokaze</em> (3), <em>Kurohana</em> (4) and then finally….<em>Kurose,</em> which is the last generation of the Kurohashi Family.</p>
            <p>To some people, she gave off a very chill aura of control and grace. But beneath all that surfaced laid a girl that was victimized by the YARC.</p>
            <p>The YARC has been experimenting on Octoquid for 225 years. Well not just Octoquid. They've been targeting Kitsunes, Mermaids, and Demons (demons are known to have a lot of cursed artifacts).</p>
            <div className="border-t border-white/10 pt-3 mt-3">
              <p>Asami Kurose is a deeply dangerous and psychologically complex octopus yokai. She was once Haruhi Aoi's former lover before she disappeared without notice. Hailing from Sapporo (Hokkaido), she was known in her earlier years as a High School student (first year) as cold, composed, and mysterious. She has an uncanny ability to remain calm even when under verbal abuse.</p>
              <p className="mt-2">She is a repeat offender. Kurose was eventually captured by the YARC where she was registered as <strong>Subject 6</strong>. Her records includes allegations of manipulation, predatory behavior toward younger yokai girls, and multiple unconfirmed assaults. While under YARC watch, she was brutally mistreated by other yokai, forced into servitude under the corrupted director Shikuibito (The Death Eater Spirit).</p>
              <p className="mt-2">She was once impregnated by a Demon Yokai (both forced and coerced to have sex under pressure), and birthed a child, which was labeled a "defect." It was tragically killed inside the facility. She also birthed another child, a octopus crossed mermaid. Was also killed. Her time in the YARC was short lived, often escaping and getting captured again. Each time she is captured, she is forced to confront her own fears with the Telepathy Regulators the YARC supplied.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Relationship with Haruhi */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Her Relationship with <Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="hover:text-[#a8ff8a] transition-colors text-[#a8ff8a]/80">Haruhi Aoi</Link></h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>In her first year of High School (even with so much going on), she was asked about by Haruhi Aoi. At first, she wondered why she asked her out, but Haruhi confessed that she liked her cold and mysterious composure. They dated for a while. But oh boy…..it wasn't good. The influences from the YARC ingrained into Asami's mind, she tortured Haruhi unknowingly. Emotional Grooming, physical assault, and coercive control.</p>
            <p>Haruhi however, she endured all these moments. Not because she hated it, but she didn't know why Asami was projecting it. She blamed herself for not seeing Asami through, and also blamed her.</p>
            <p>For Asami, this was her way of relief, despite all the actions she caused to Haruhi. The institutional system might have broke Asami, but all she wanted was intimacy. To Asami, it was softness over unrelentless love! Love that felt exploitive, but with <em>burning passion</em> that neither hurts or discriminates.</p>
            <p>Haruhi failed to see pass all the bravado and masks Asami had put up.</p>
            <p>Even after years apart, her sudden reappearance shatters Haruhi's fragile peace and prompts a fierce confrontation with Hanako Reina.</p>
            <p>One day, she got a text from Haruhi. Haruhi wanted to break up with her. Seeing this…she disappeared. Couldn't respond to those texts, only until the YARC found her again, imprisoned her (again) until the day she broke out.</p>
            <blockquote className="border-l-2 border-[#7eb8ff]/40 pl-4 italic mt-3">
              Kurose represents a darker consequence of broken institutions and unresolved cycles of abuse, trauma, and manipulation. But behind her violent history lies a question—was she always this way, or did the YARC mold her into the monster she became?
            </blockquote>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">😃 The Social Self</p>
              <p>Asami used to have an aloof personality with people because she was regarded as <em>one of a kind</em> since she's an Octoquid. Her aloof personality is kind of like how you'd perceive a cat but very playful. But ever since the YARC showed up, her personality started to change.</p>
            </div>
            <div className="neon-card text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">🦋 The Personal Self</p>
              <p>She calls herself a monster because she thinks she's not considered worthy to others, let alone close friends. She views herself insignificant and less than a human ever since she attempts to break out of the YARC. Even when she dated Haruhi…..things took a drastic turn. She'd often manipulate Haruhi with telepathy just so she could feel safe. The reason why she dated Haruhi was that she wanted to feel love, which is why Haruhi's softness felt like Asami's only light.</p>
            </div>
            <div className="neon-card text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">🦋 Core Self</p>
              <p>Her core self is mixed with her personal self. Because her relationship with Haruhi isn't just wrong, <em>she knows it is.</em> Even with everything happening, she wants to reconcile with her, but can't even bring it up because the YARC would come in at random times to take her back whenever she breaks out. Haruhi has no idea that Asami is being victimized by an institution that gave her all those bad habits and actions.</p>
            </div>
            <div className="neon-card text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">🤕 The Hidden Self</p>
              <p>Institutional and systematic abuse. The YARC had broke her even when she was dating Haruhi. She has bruises, injuries, and scratches even when she breaks out to see Haruhi. Because Haruhi was the only light Asami saw, despite all the short comings. But what Asami doesn't know herself fully is that she craves love with excessive softness. She wants to feel love, to be loved, and to feel respected. All she ever wanted was for someone to see her who she is, but her judgement always gets the better of her which is why she lashes out at Haruhi. But ever since Haruhi broke up with her over text, she became afraid, even scared to respond to that text.</p>
              <p className="mt-2">She became depressed, and around this time was when the YARC finally took her and held her captive for years before she broke out ONE last time. She wanted to kill herself, but the one thing that stayed on her mind was <em>Haruhi</em>. She wanted to see her one last time, just to talk about their relationship. She doesn't want forgiveness. She knows what she did was wrong, but yet, all these hollow emotions she kept back is what is hurting her from repairing that relationship with Haruhi. Both their relationships were already broken, yet Haruhi doesn't even realize that Asami truly loved her, and still does.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Yokai Abilities */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Yokai Abilities / Biology</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>She's a one of a kind powerhouse as an Octoquid. Her hair like tendrils she has (octoquid traits), she can use telepathy to invade someone's mind by either:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Gaslighting them</li>
              <li>Read their mind</li>
              <li>Spy their memories</li>
              <li>Thought Replacement</li>
            </ol>
            <p>She could easily become a Yokai Ninja, but she doesn't want to because she thinks Yokai Ninjas are merciless and too reckless (HAHAH THROWING SHADE AT RURUKA I SEE - Aru, approves! 💚). Telepathy isn't just one of her main powers (see below!).</p>
          </div>

          {/* Snake-Curse Biology */}
          <div className="mt-4 neon-card text-sm text-text-muted space-y-2 leading-relaxed">
            <p className="font-mono text-xs text-[#7eb8ff] mb-2">🐍 Snake-Curse Biology</p>
            <p>Since Shikuibito had cursed the original Octoquid Yokai Bloodline in the year 1779 AD, Asami became a descendant of that lineage. The effects of this curse that lived throughout ages is that all octopi lines and descendants of that have snake blood that contains venom. Because of this, Asami has <strong>natural immunity to venom and poison</strong> that is from nature itself. But when the YARC found her back in her years of high school, they took her snake blood and weaponized it as an anti-counter catalyst drug to experiment on her.</p>
            <p>Artificial Poison and or venom is a weakness to her.</p>
            <p className="text-[#7eb8ff] font-mono text-xs">This man-made venom and poison is called "INVЯ3XE" — made by the YARC.</p>
          </div>

          {/* Octopus Biology */}
          <div className="mt-4 neon-card text-sm text-text-muted space-y-2 leading-relaxed">
            <p className="font-mono text-xs text-[#7eb8ff] mb-2">🐙 Octopus Biology / Tendril Abilities</p>
            <p>Her blue dark hair are actual organs that act like octopus tendrils. It shows her true emotions even if she hides behind it. They can stretch infinitely since they have their own regenerative cells, along with stretch manipulation. She can walk on walls and ceilings if she wanted to.</p>
            <p>If she wanted to, she can morph her hair into actual tentacles that look like an octopus. She cannot morph her hair into anything else rather than her own Yokai biology.</p>
          </div>

          {/* Natural Octopus Abilities */}
          <div className="mt-4 neon-card text-sm text-text-muted space-y-2 leading-relaxed">
            <p className="font-mono text-xs text-[#7eb8ff] mb-2">Natural Octopus Abilities</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Asami's Morph Ability</strong> — She can also morph into a full octopus if she wanted to. It's not just limited to her hair. Can also make her fingers into tendrils! Multitasking Queen!</li>
              <li><strong>Full Octopus Form (Baby / Yokai)</strong> — Asami has two forms when she goes full octopus. It can either be Yokai style or Baby Style. Both of these forms can blend into their environment, because real octopus have that pigmentation ability. This ability won't work in her human form unless she overrides that ability herself.</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* NEO-Esper Powers */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">NEO-Esper Powers / Abilities</h3>
          <div className="callout space-y-2 text-sm text-text-muted leading-relaxed mb-4">
            <p>Neo-ESPer(s) are super rare in Naiseikai, and she's one of them. During her sanction at the YARC that used her for a long time.., not only her telepathic abilities were abused, it had also <strong>ENHANCED</strong> it after she escaped each time. Before she was captured, her abilities are at <strong>100%</strong> max of their threshold. But after the YARC discovered her abilities, even under brutal abuse, they were also enhanced, even after gaining new ones.</p>
            <p>Her powers are <strong>500x</strong> stronger than an average telepath (or esper), which makes her the most strongest ESPer based user (dubbed by the YARC) in the whole of Naiseikai.</p>
            <p>Despite her being overpowered she holds back SIGNIFICANTLY, specifically at <strong>4% out of 50,000%</strong>.</p>
          </div>

          {/* Passive Powers */}
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7eb8ff] mb-3">Passive Powers</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Animal Telepathy</strong> — She can talk to animals. The smaller it is, the harder. Includes bugs and insects. Has no problem conversing with Tardigrades (THAT'S CRAZY - Aru)</li>
                <li><strong>Empathetic Instinctive Response (E.I.R)</strong> — This passive ability is linked more to her hair, since they're also organic like organs that flow freely and have their own mind. Even if Asami hides her emotions, her hair is attuned to her heart/emotions! <em>Textile E.I.R Attunement</em> — her hair can read and sense emotions from handwritten letters.</li>
                <li><strong>Hydrokinesis</strong> — She's an octoquid that can water bend!!! Whaddya expect?! - Little Aru. Her Hydrokinesis can cut metal and even the hardest materials on earth. Hydrokinesis can become Cryo-kinesis and also Aero-kinesis. She can grab water from anywhere and turn it into different states of matter. If she is startled, her hair-like tendrils will shoot out ink (natural octopus defense, and also, yes…ink manipulation).</li>
                <li><strong>Tendril Manipulation / Synchronization</strong> — Again, her hair acts like tendrils of an octopus. Even if they have a mind of their, Asami can freely control them when needed. Her hair growth is mild, even if she trims them. It doesn't hurt. Can also regrow them (infinite regeneration)!</li>
                <li><strong>Psychic Shield / Mental Barrier / Immunity</strong> — She can protect herself from psychic attacks mentally.</li>
                <li><strong>Microscopic Zoom (Atomic Sight)</strong> — She can see atoms and smaller matter if she wanted. Think x-ray like atomic sight. She can turn this on to see the composition of the object in front of her.</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="font-mono text-xs text-text-faint mb-2">Other Passive Powers:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Telepathic Relay</strong> — Can Relay thoughts to others</li>
                  <li><strong>Telepathy / Telepathic Combat</strong> — Mental Battles with others. Asami likes using this for games like Rock Paper Scissors.</li>
                  <li><strong>Thought Manipulation</strong> — Only uses it on herself mentally so that she wouldn't have to feel.</li>
                  <li><strong>Telepathic Absorption</strong> — She can absorb telepathy based powers, which includes psionic ones too.</li>
                </ul>
              </div>
            </div>

            {/* Dangerous Abilities */}
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7eb8ff] mb-3">Dangerous Abilities</p>
              <p className="text-xs text-text-faint mb-3">Some of these abilities are the ones she doesn't use often or always holds back. Powers she considers dangerous. Experienced fighter despite all the YARC abuse-given powers. Each of these powers have their own danger level, depending on how severe it is or if it becomes a catalytic trigger.</p>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs text-yellow-300 mb-1">Danger Level 10</p>
                  <p className="text-xs text-text-faint">Clairvoyance · Dowsing · Electronic Manipulation · Magnetic Manipulation · Holographic Projection · Illusion Manipulation · Memory Reading / Manipulation · Mental Barrier Destruction · Psychometry</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-orange-300 mb-1">Danger Level 35</p>
                  <p className="text-xs text-text-faint">Mental Manipulation · Mental Plane Manipulation · Mind Control / Remote Control · Mind Exchange · Mind Image</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-amber-600 mb-1">Danger Level 70</p>
                  <p className="text-xs text-text-faint">Persuasion and Possession · Psionic Intuition · Sensory Scrying (all kinds) · Sensory Deprivation / Manipulation</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-red-400 mb-1">Danger Level 100</p>
                  <p className="text-xs text-text-faint">Subatomic DNA Control / Manipulation</p>
                </div>
              </div>
              <p className="text-xs text-text-faint mt-3 italic">If Asami went all out, without holding back…the only limit (prohibited) thing SHE will not DO is to alter someone's biology. She respects agency despite being a victim of institutional abuse.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Other Traits */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Other Traits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Sexuality', value: 'Bisexual. She has little preferences over men, but a lot over women. Her preferences in women are not what others think. She loves women who are submissive and those who have a very gall energy.' },
              { label: 'Personality', value: 'Cold and mysterious. Often reserves herself.' },
              { label: 'Likes', value: 'She is a fan of winter and likes snow! And cute animals. Frogs are her favorite.' },
              { label: 'Dislikes', value: "Doesn't like insects or dogs." },
              { label: 'Hobbies / Skills', value: "She's actually quite a multitasker due to her tendril like hair." },
              { label: 'Appearance', value: 'Her hair acts like tendrils since she\'s half octopus and snake. It\'s a very dark blue color, along with her eyes that are navy blue (a gray like shade). There is a slight purple hue to her eyes. She likes to wear comfy cardigans and off-shoulder clothes.' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>

          {/* Memento */}
          <div className="mt-4 callout text-sm text-text-muted leading-relaxed">
            <p className="font-mono text-xs text-[#7eb8ff] mb-2">Mementos / Accessories</p>
            <p>She has one accessory that Haruhi had gave her. An ocean-like pendant necklace that can turn into a bracelet. She often wears it as a necklace because the pendant is actually a locket. The inside of the pendant is of significance because there is a date that is carved on the underside (inside), which says, "August 15th, 2090 — 'The Day I was the Most Happiest,'" with a picture of Asami crying in Haruhi's arms. A needle is needed to unlock it since there is a pinhole. (the strands of her hair help with this)</p>
          </div>
        </div>

        <Divider />

        {/* Name Meaning */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Name Meaning</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">🐇 Asami (朝美) — First Name</p>
              <p>朝 = "morning", dawn</p>
              <p>美 = <em>beauty</em>, <em>beautiful</em></p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7eb8ff] mb-2">🕊 Kurose (黒瀬) — Last Name</p>
              <p>黒 = Black, darkness</p>
              <p>瀬 = <em>Rapids</em>, <em>shallows</em>, or <em>shoal</em> (like in a river)</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" className="btn-neon-cyan text-xs">← Little Bunny Aru</Link>
        </div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div />
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import LorePageLayout from '../../../components/LorePageLayout'

// ─── Reusable sub-components ──────────────────────────────────────────────────

function YokaiEntry({ name, color = '#d49fff', children }: { name: string; color?: string; children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-xl bg-surface p-5 mb-4">
      <p className="font-serif text-base font-semibold mb-3" style={{ color }}>─────⊰ {name}</p>
      <div className="space-y-3 text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-text mt-3 mb-1">{children}</p>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 list-none ml-2">
      {items.map((item, i) => <li key={i}>• {item}</li>)}
    </ul>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function YokaiCitizensOfNeoJapan() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore & Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span className="text-[#d49fff]">Yokai Citizens of Neo-Japan</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign-purple text-[10px] mb-4 inline-block">World-Building</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">👹 Yokai Citizens of Neo-Japan</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Species catalogue of the Naiseikai Universe — every yokai race, spirit type, and demi-yokai documented here.
        </p>
      </div>

      {/* Intro */}
      <div className="callout callout-purple mb-8">
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p className="font-semibold text-text">Species of The Naiseikai Universe</p>
          <p>In the Naiseikai Universe, this is an Alternate Earth that differs from the Earth we know and love. But due to the significance of Yokai, Spirits, Humans and Angels, the size of Japan has increased because new landforms were made due to Earth Yokais inhabiting the continent.</p>
          <p>Here are the list of all the Yokai Races in Neo-Japan.</p>
        </div>
      </div>

      <div className="callout mb-10">
        <p className="text-sm text-text-muted leading-relaxed">
          <strong className="text-text">Yokai Races of Neo-Japan</strong> — From Year 5 - 1599, a great descent of Yokai Races, Spirits, Angels and more have started to live in Ancient Japan. They just wish to co-exist with humans and not cause harm. There are apparently a lot of Yokai. And this entry catalogue every single one of them.
        </p>
      </div>

      <div className="section-divider mb-10" />

      {/* ── Avian Yokai ───────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="avian-yokai" className="font-serif text-2xl text-text mb-6">Avian Yokai</h2>

        {/* Crow */}
        <YokaiEntry name="Yokai: Crow (Karasu)" color="#7ef5ff">
          <p>The Crow Yokai lineage traces back to 1809 with the Reinishi Karasu Generational Family. The most notable ability is their connection to silence and stillness—"The Quiet Crow" legend speaks of a dark magician named Karasu Reinishi whose spirit lingered as a soundless crow after death. Modern descendants like Hanako Reina possess tremendous supernatural powers including telekinesis, cryokinesis, and the ability to transform into crow forms. Crow Yokai age differently than humans, their appearance freezing around age 18 while their lifespan continues normally.</p>
        </YokaiEntry>

        {/* Raven */}
        <YokaiEntry name="Yokai: Raven (Watarigasu)" color="#d49fff">
          <p>Raven Yokai are a distinct avian lineage separate from the Karasu (Crow) family, though they are often confused due to their similar appearances. Ravens descended during Year 5 - 1599 and established themselves in the mountainous northern regions of Neo-Japan. Unlike Crow Yokai who are connected to silence and stillness, Raven Yokai possess abilities tied to <strong className="text-text">wisdom, prophecy, and memory manipulation</strong>.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Larger build than Crow Yokai (6-8 inches taller in humanoid form)',
            'Deep purple-black feathers with iridescent sheen',
            'Distinctive wedge-shaped tail in bird form',
            'Silver or violet eyes that glow when using prophecy abilities',
            'Deeper, more resonant voices (described as "haunting")',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Knowledge Archive: Natural affinity for information retention—near-perfect memory recall',
            'Shadow Travel: Can merge with shadows to travel short distances instantaneously',
            'Wisdom Aura: Their presence can calm emotional turmoil and enhance rational thinking in those nearby',
            'Vocal Mimicry: Can perfectly replicate any voice or sound they\'ve heard',
          ]} />
          <SubHeading>Cultural Role:</SubHeading>
          <p>Raven Yokai are often sought as <strong className="text-text">historians, archivists, and spiritual advisors</strong> throughout Neo-Japan. Many serve in: The National Archives as record keepers.</p>
          <BulletList items={[
            'Ujuukyō shrines as oracle attendants',
            'NYAQ intelligence divisions as Watarigasu-kō-shin (Raven Path Ninja)',
            'University positions teaching history and philosophy',
          ]} />
          <SubHeading>Notable Traits:</SubHeading>
          <p>Ravens mate for life and are fiercely protective of their chosen partners. They value intellectual discourse and problem-solving. In NYAQ, Raven Yokai excel at infiltration missions requiring long-term memory of complex layouts or information extraction.</p>
        </YokaiEntry>

        {/* Swan */}
        <YokaiEntry name="Yokai: Swan (Hakuchō)" color="#7ef5ff">
          <p>Swan Yokai are elegant water-affiliated avian spirits known for their grace, beauty, and devastating combat prowess when provoked. They descended during Year 5 - 1599 and primarily settled near lakes, rivers, and coastal regions. Despite their serene appearance, Swan Yokai possess <strong className="text-text">berserker-like battle abilities</strong> that activate when their loved ones or territories are threatened.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Striking white or black plumage (rare variants have gray or cream coloring)',
            'Extremely long, elegant necks in humanoid form (often hidden by high collars)',
            'Graceful, fluid movements—appear to "glide" rather than walk',
            'Luminous eyes: white swans have blue/silver eyes, black swans have red/gold eyes',
            'Naturally emit a faint, calming aura that smells like fresh water and lotus flowers',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Hydro-Grace: Enhanced agility and speed in or near water; can run across water surfaces',
            'Serenade of Stillness: Their singing can induce deep calm or, inversely, sleep in listeners',
            'Swan\'s Fury: When protecting loved ones, enter a berserker state with 300% power increase—lose rational thought but gain unstoppable physical might',
            'Feather Blade Dance: Can harden wing feathers into razor-sharp projectiles',
            'Loyal Bond Magic: Form permanent magical bonds with chosen partners/family; can sense each other\'s emotions and locations',
            'Purification Aura: Natural ability to cleanse corrupted water or dispel minor curses',
          ]} />
          <SubHeading>Cultural Role:</SubHeading>
          <p>Swan Yokai are known as symbols of <strong className="text-text">eternal love, loyalty, and hidden strength</strong>. They are often:</p>
          <BulletList items={[
            'Wedding ceremony officiants and blessing-givers',
            'Guardians of sacred lakes and water shrines in the Hanami Region',
            'Performers in Neo-Japan\'s traditional dance and theater',
            'Protectors of Half-Yokai refugees fleeing persecution',
            'Some become Hakuchō-kō-shin (Swan Path Ninja) specializing in assassination and counter-intelligence',
          ]} />
          <SubHeading>Temperament:</SubHeading>
          <p>Swans are calm, dignified, and prefer peaceful resolution to conflict. However, they are <strong className="text-text">extremely territorial</strong> about their nesting grounds and families. An enraged Swan Yokai is considered one of the most dangerous avian yokai in combat. The saying "Never anger a swan" is well-known throughout Neo-Japan.</p>
          <SubHeading>Reproduction:</SubHeading>
          <p>Swan Yokai mate for life and can only form romantic bonds once. If their partner dies, they enter a mourning period lasting decades and rarely bond again. Their loyalty is absolute—YARC attempted to exploit this through forced bonding experiments, resulting in severe psychological trauma for many Swan Yokai subjects.</p>
        </YokaiEntry>

        {/* Vulture */}
        <YokaiEntry name="Yokai: Vulture (Hagewashi)" color="#ffd080">
          <p>Vulture Yokai are death-affiliated avian spirits with deep connections to the cycle of life, decay, and rebirth. They descended during Year 5 - 1599 and are often misunderstood due to cultural stigma around death and carrion. Despite their grim reputation, Vulture Yokai serve vital roles as <strong className="text-text">spiritual cleaners, death guides, and disease prevention specialists</strong>.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Dark brown, gray, or black plumage with occasional white markings',
            'Sharp, hooked beaks that retract into more human features when in humanoid form',
            'Keen, piercing golden or amber eyes with exceptional long-distance vision',
            'Naturally high body temperature and extremely potent digestive/immune systems',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Death Sense: Can detect dying or recently deceased beings within a 10-mile radius',
            'Decay Acceleration: Can speed up decomposition of organic matter or slow it to preserve remains',
            'Disease Immunity: Immune to all natural toxins, diseases, pathogens, poisons and artificial toxins',
            'Purification Through Consumption: Can consume cursed or corrupted matter and neutralize its spiritual taint',
            'Thermal Soaring: Ride thermal air currents for effortless long-distance flight',
          ]} />
          <SubHeading>Cultural Role:</SubHeading>
          <p>Vulture Yokai face social stigma but serve essential functions:</p>
          <BulletList items={[
            'Funeral Rites Specialists: Perform sky burials and spiritual cleansing of the deceased',
            'Epidemic Response Teams: First responders during disease outbreaks; can safely handle contaminated materials',
            'Forensic Investigators: Work with police to determine cause of death and time of death through spiritual and physical analysis',
            'Battleground Cleaners: After Yokai-on-Yokai conflicts, they ensure proper spiritual passing for the dead',
            'Some become Hagewashi-kō-shin (Vulture Path Ninja) specializing in poison resistance and infiltration of hazardous environments',
          ]} />
          <SubHeading>Relationship with Death:</SubHeading>
          <p>Vulture Yokai view death as sacred and natural—not morbid or frightening. They believe they perform holy work by ensuring the dead transition peacefully and preventing spiritual corruption. They often work alongside Dullahan Yokai, who share their reverence for death.</p>
          <SubHeading>Social Challenges:</SubHeading>
          <p>Vulture Yokai face discrimination due to their association with death and decay. Many hide their yokai nature in public. However, those who understand their role deeply respect them. Ujuukyō faith recognizes Vulture Yokai as <strong className="text-text">Kiyome no Tori</strong> (Birds of Purification) and honors their service.</p>
          <SubHeading>YARC Targeting:</SubHeading>
          <p>YARC attempted to weaponize Vulture Yokai's disease immunity and decay abilities for bio-weapon development, resulting in many being captured and experimented on between 1779-1950 AD. Survivors carry deep trauma from these experiences.</p>
        </YokaiEntry>

        {/* Peacock */}
        <YokaiEntry name="Yokai: Peacock (Kujaku)" color="#ffaad4">
          <p>Peacock Yokai are flamboyant, charismatic avian spirits connected to beauty, pride, illusion, and solar magic. They descended during Year 5 - 1599 and are among the most visually striking yokai in Neo-Japan. Peacock Yokai possess <strong className="text-text">illusion magic and light manipulation abilities</strong> that make them exceptional performers, diplomats, and psychological warfare specialists.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Vibrant, iridescent plumage in blues, greens, golds, and purples',
            'Elaborate tail feathers (train) that can span 6-8 feet when fully displayed',
            'Each tail feather has an "eye" pattern that can hypnotize or mesmerize viewers',
            'Brilliant, multi-colored eyes that shift hue based on emotion',
            'Naturally radiant presence—seem to "glow" in sunlight',
            'Males and females both possess elaborate plumage (unlike mundane peacocks)',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Hypnotic Display: Spreading their tail feathers creates mesmerizing patterns that can hypnotize, charm, or entrance viewers',
            'Illusion Weaving: Create convincing visual and auditory illusions; can disguise appearance or create phantom images',
            'Solar Empowerment: Abilities strengthen significantly in direct sunlight; can absorb and redirect light energy',
          ]} />
          <SubHeading>Cultural Role:</SubHeading>
          <p>Peacock Yokai are celebrities and public figures throughout Neo-Japan:</p>
          <BulletList items={[
            'Entertainment Industry Stars: Actors, idols, models, and performers',
            'Diplomatic Envoys: Their charisma makes them excellent negotiators and ambassadors',
            'Fashion Designers: Natural sense of aesthetics and beauty',
            'Psychological Warfare Specialists: Some become Kujaku-kō-shin (Peacock Path Ninja) using illusions and charm for espionage',
            'Spiritual Performers: Traditional dance and theater emphasizing beauty and transformation',
          ]} />
          <SubHeading>Temperament:</SubHeading>
          <p>Peacock Yokai are proud, confident, and deeply concerned with image and reputation. They can be vain but are also loyal friends who use their influence to protect those they care about. They value self-expression, creativity, and recognition. However, their pride can become their weakness—insults to their appearance or abilities cut deeply.</p>
          <SubHeading>Social Dynamics:</SubHeading>
          <p>Peacock Yokai often form tight-knit communities in urban centers like Tokyo, Osaka, and Kyoto where they can showcase their talents. They maintain elaborate social hierarchies based on beauty, talent, and influence. Some view this as shallow, but Peacock communities provide strong support networks and mentorship for younger yokai.</p>
          <SubHeading>Combat Style:</SubHeading>
          <p>While Peacock Yokai prefer to avoid physical combat, they are devastating psychological combatants. Their illusions can cause enemies to fight phantoms, see allies as threats, or become lost in labyrinthine false realities. In NYAQ training, they excel at misdirection and infiltration missions requiring social manipulation.</p>
        </YokaiEntry>

        {/* Falcon */}
        <YokaiEntry name="Yokai: Falcon (Hayabusa)" color="#7ef5ff">
          <p>Falcon Yokai are apex predatory avian spirits known for their unmatched speed, precision, and hunting prowess. They descended during Year 5 - 1599 and quickly established themselves as elite warriors and scouts. Falcon Yokai possess <strong className="text-text">superhuman speed, precision strike abilities, and enhanced perception</strong> that make them among the most feared aerial combatants in Neo-Japan.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Compact, aerodynamic build—lean muscle optimized for speed',
            'Sharp, angular features with intense, focused expressions',
            'Plumage in browns, grays, whites, and blacks with distinctive facial markings',
            'Eyes capable of seeing incredible detail at extreme distances (can read text from 1 mile away)',
            'Naturally high metabolism—require frequent meals to maintain energy',
            'Retractable talons on hands and feet (in humanoid form)',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Supersonic Flight: Can achieve speeds exceeding 240 mph in dive attacks—fastest of all avian yokai',
            'Precision Strike: Perfect accuracy in aerial attacks; can strike specific weak points with pinpoint precision',
            'Enhanced Perception: Process visual information 10x faster than humans; perceive events in "slow motion" during combat',
            'Territorial Dominance: Can mark and sense intrusions within a claimed territory spanning several miles',
            'Aerial Superiority: Instinctive mastery of three-dimensional combat; unmatched aerial maneuverability. Have mastered backwards movements.',
            'Hunter\'s Focus: Enter a meditative state that eliminates distractions and enhances reaction time by 300%',
          ]} />
          <SubHeading>Cultural Role:</SubHeading>
          <p>Falcon Yokai serve as elite specialists throughout Neo-Japan.</p>
          <BulletList items={[
            'NYAQ Elite Forces: The highest concentration of Falcon Yokai become Hayabusa-kō-shin (Falcon Path Ninja), renowned as the most skilled aerial assassins and scouts',
            'Border Patrol: Guard Neo-Japan\'s airspace and coastal boundaries',
            'Competitive Sports: Dominate aerial racing and combat sports leagues',
            'Personal Bodyguards: Hired by high-profile individuals for their unmatched protective reflexes',
          ]} />
          <SubHeading>Temperament:</SubHeading>
          <BulletList items={['Courier Services: Fastest delivery specialists for urgent or valuable cargo']} />
          <p>Falcon Yokai are focused, disciplined, and fiercely independent. They value skill, efficiency, and results over social niceties. Many are solitary by nature but form strong bonds with those who earn their respect through demonstrated competence. They have little patience for incompetence or wasted time.</p>
          <SubHeading>Hunting Instinct:</SubHeading>
          <p>Falcon Yokai retain strong predatory instincts. They experience intense satisfaction from "the hunt"—whether literal hunting, competitive sports, or mission completion. This drive makes them exceptional at goal-oriented tasks but can manifest as ruthlessness if not tempered with discipline.</p>
          <SubHeading>NYAQ Reputation:</SubHeading>
          <p>Falcon Yokai are legendary within the NYAQ. The saying <strong className="text-text">"When a Falcon is assigned, the mission is already complete"</strong> reflects their reputation for flawless execution. They often serve as instructors for aerial combat techniques and are treated with a mixture of respect and intimidation by other ninja.</p>
          <SubHeading>Rivalry with Harpy Yokai:</SubHeading>
          <p>There exists a competitive rivalry between Falcon and Harpy Yokai over aerial supremacy. Falcons view Harpies as "brutish and imprecise," while Harpies see Falcons as "arrogant loners." However, when these two avian types work together, they form devastating combat partnerships.</p>
        </YokaiEntry>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Supernatural Yokai ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="supernatural-yokai" className="font-serif text-2xl text-text mb-6">Supernatural Yokai</h2>

        <YokaiEntry name="Yokai: Octoquid (Tako-Ika — Octopus + Squid)" color="#7eb8ff">
          <p>Octopus Yokai descended from the Octoquid Yokai Line established in 1779. The YARC infused this lineage with a cursed tome of Venomous Snake Blood, creating half-octoquid, half-snake hybrids. Many fled to Mizuki Shoto for freedom. Notable family lines include Kurohashi → Kurohase → Kurokaze → Kurohana → Kurose. Octopus Yokai possess telepathic abilities through their tendril-like hair, hydrokinesis, camouflage abilities, and can morph between human and full octopus forms. They have natural immunity to natural venoms but are weak to artificial poisons.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Kitsune (Fox)" color="#ffd080">
          <p>Fox Yokai are among the supernatural beings targeted by the YARC for experimentation. They are known for their cunning nature and shapeshifting abilities. Kitsunes have been part of Neo-Japan since the great descent of Year 5 - 1599.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Dragon (Ryū)" color="#ff8a8a">
          <p>Dragon-type Yokai are fire and earth spirits of immense power. Ryū no Shima (Dragon Island) was formed by their volcanic activity and serves as their primary territory. Ancient legends speak of dragons still dwelling in the island's mountains. The Ryuu no Kyuuden (Dragon Palace) on this island is open to the public, and Dragon Yokai are noted to be friendly and open with visitors.</p>
          <SubHeading>Different Dragon Yokais:</SubHeading>
          <BulletList items={[
            'Dracolich — Undead Dragon Yokai',
            'Serpentine Yokai (Sea Dragons)',
            'Chinese Dragons',
            'Norse Dragons',
            'Lizardfolk are considered Dragons, along with Kobolds',
          ]} />
        </YokaiEntry>

        <YokaiEntry name="Yokai: Demon (Akuma)" color="#ff8a8a">
          <p>Demon Yokai are known to possess cursed artifacts and have been targeted by the YARC for these properties. They possess significant supernatural abilities and can interbreed with other yokai species.</p>
          <SubHeading>Different Demon Yokais:</SubHeading>
          <BulletList items={['Lesser Demon', 'Demon Witches', 'Mages and Wizards']} />
        </YokaiEntry>

        <YokaiEntry name="Yokai: Vampire (Kyūketsuki)" color="#d49fff">
          <p>Vampire Yokai can become Ninja, as evidenced by Erika Von Schuvausst, a Vampire Yokai Ninja who hails from London. They possess enhanced abilities and can integrate into human society while maintaining their yokai nature.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Dullahan" color="#ffd080">
          <p>Dullahans are warrior yokai who often train alongside Ninjas at the NYAQ (Ninja Yokai Association Quarters). They honor death as sacred and are known for their martial prowess. Dullahan lineages include warriors and martial artists, as seen with Kori Yukino's bloodline from 1650.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Harpy" color="#a8ff8a">
          <p>Harpy Yokai are avian humanoids known for their powerful flight abilities and connection to wind and sky. These yokai possess the upper body of a human and the wings, talons, and lower body of birds of prey. Harpies have been part of Neo-Japan since the great descent and are known for their fierce independence and territorial nature. Harpies are different than the Avian Yokais from the list above since they have no other counterparts. Every physical detail is permanent.</p>
          <SubHeading>Physical Characteristics:</SubHeading>
          <BulletList items={[
            'Human upper torso with bird-like lower body',
            'Large, powerful wings (wingspan typically 12-15 feet)',
            'Sharp talons for feet and sometimes on hands',
            'Feathered plumage in various colors and patterns',
            'Enhanced lung capacity for high-altitude flight',
            'Lightweight bone structure',
          ]} />
          <SubHeading>Abilities:</SubHeading>
          <BulletList items={[
            'Master Flight: Can fly at high speeds and perform complex aerial maneuvers',
            'Wind Manipulation: Natural affinity for controlling air currents and creating gusts',
            'Aerial Combat: Devastating dive attacks and talon strikes',
            'Enhanced Vision: Can see clearly over vast distances, perfect for scouting',
            'Storm Calling: Powerful Harpies can influence weather patterns',
            'Sonic Screech: Can produce disorienting or damaging sound waves',
          ]} />
          <SubHeading>Society and Culture:</SubHeading>
          <p>Harpies are territorial and typically establish aeries in high mountain peaks or tall structures. In Neo-Japan, Harpy communities can be found in:</p>
          <BulletList items={[
            'The Otohashi Yama mountain ranges',
            'Specially designed high-rise roosts in major cities',
            'The cliff faces of Sora no Oka region',
          ]} />
          <p className="mt-2">They value:</p>
          <BulletList items={[
            'Freedom and personal autonomy',
            'Aerial supremacy and flight skill',
            'Protection of their nesting grounds',
            'Swift justice and direct action',
          ]} />
          <SubHeading>Roles in Neo-Japan:</SubHeading>
          <p>Many Harpies serve as:</p>
          <BulletList items={[
            'Aerial couriers and messengers',
            'Sky patrol and border scouts',
            'Weather observers for meteorological services',
            'Search and rescue operatives in mountainous regions',
            'Some become Seishin-kō-shin (Spirit Path Ninja) specializing in aerial infiltration',
          ]} />
          <SubHeading>Temperament:</SubHeading>
          <p>Harpies are proud, fierce, and value strength and skill. They can be aggressive when their territory or loved ones are threatened, but are loyal allies once trust is established. They prefer direct communication and action over subtlety or diplomacy.</p>
        </YokaiEntry>

        <YokaiEntry name="Angels (Tenshi)" color="#ffffff">
          <p>Angels descended to Ancient Japan during the great arrival of Year 5 - 1599 alongside Yokai and Spirits. They are celestial beings with their own supernatural abilities and spiritual significance. Tenshi Shima (Angel Island) serves as a sacred territory connected to angelic beings, protected by spiritual barriers and restricted to most civilians. Angels can also become Ninjas, known as Tenshi-kō-shin (Angel Path Ninja) within the NYAQ. Tenshi Shima is one of the two locations where Yokai Relinquishment rituals can be performed.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Phoenix (Fushichō)" color="#ffaad4">
          <p>Phoenix Yokai are among the rarest yokai in Neo-Japan, with fewer than 50 estimated to exist. Unlike other yokai who descended during Year 5 - 1599, Phoenix Yokai existed in the spiritual realm long before and only manifest during times of great upheaval or transformation. They are revered as <strong className="text-text">symbols of renewal, hope, and transformation</strong>, often serving as spiritual counselors, mediators, and ceremonial figures for major life transitions. Phoenix Yokai possess radiant plumage in fiery colors with eyes that glow like molten metal, and their touch radiates natural warmth.</p>
          <p>Phoenix Yokai undergo <strong className="text-text">cyclical renewal</strong> — when they reach the end of their life cycle (after several centuries) or suffer mortal injury, their physical form dissolves into flames and they are reborn from the ashes, sometimes retaining memories of their previous existence. They are patient, wise, and philosophical, viewing life through the lens of cycles. Due to their rarity, they are solitary and live in scattered enclaves throughout the Hanami Region shrines, Otohashi Yama temples, and Ryū no Shima sanctuaries.</p>
          <p>YARC targeted Phoenix Yokai for experimentation between 1779-1950 AD, attempting to weaponize their renewal abilities through forced rebirth experiments that caused severe identity fragmentation and trauma. Survivors remain deeply wary of governmental organizations, with many dedicating themselves to helping other trauma victims heal. In Ujuukyō faith, Phoenix Yokai are seen as living embodiments of Mushin (無心)—accepting life's flow without attachment.</p>
        </YokaiEntry>

        {/* Bamboo Bunny */}
        <div className="border border-[rgba(168,255,138,0.3)] rounded-xl bg-[rgba(168,255,138,0.03)] p-5 mb-4">
          <p className="font-serif text-base font-semibold text-[#a8ff8a] mb-3">─────⊰ Yokai: Bamboo Bunny (Rabbit)</p>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Bamboo Bunny Yokai are shifter-type Yokais that are Impossibly Rare. Because they are experts at hiding and camouflage. Very elusive and fast. There are at least 150 known recorded rumors, with one exception being Haruhi Aoi (who is owner of Usagi Cafe) when she registered as a citizen at the YHCA's Registry under NYAQ Protection (Koa Ruruka is not a part of this yet).</p>

            <div className="border border-[rgba(168,255,138,0.2)] rounded-lg bg-surface p-3">
              <p className="font-semibold text-[#a8ff8a] mb-1">───⊰ Haruhi Aoi as a Bamboo Bunny</p>
              <p>When she registered under the YHCA through the NYAQ, she requested that the rumors should stop. She doesn't want to bring misfortune and popularity for her species.</p>
            </div>

            <div className="border border-[rgba(168,255,138,0.2)] rounded-lg bg-surface p-3">
              <p className="font-semibold text-[#a8ff8a] mb-2">─────⊰ Bamboo Bunny Lore</p>
              <p className="mb-2">They known for their empathic abilities and connection to earth and plant magic. These yokai possess extraordinary hearing through their specialized bamboo ears, which can detect vibrations, frequencies beyond human perception, and even emotions. Bamboo Bunnies are naturally extroverted, friendly, and sociable creatures who excel at emotional support and non-judgmental listening.</p>

              <SubHeading>Physical Characteristics:</SubHeading>
              <BulletList items={[
                'Patibilis Capillatura (False Hair): The top and bottom portions of their ears are organic sensory organs that detect sounds, frequencies, and wavelengths up to five miles away. Can hear dog whistles and sinewaves. The false hair protects against dust and particles.',
                'Curvabilis Bdelli-Auris (Flexible Bamboo Ears): The midrange ear joints are highly versatile and express emotions - perking up when happy, drooping when sad, tensing when angry.',
                'Auris-Colis (Ear Stem): Where the ears sprout from, containing the hidden ear canal where all perceived sounds are processed.',
              ]} />

              <SubHeading>Abilities:</SubHeading>
              <BulletList items={[
                'Earth and Plant Magic: Can manipulate earth, foliage, and plants for attack and defense. Can manifest vegetables and fruits as seeds or sprouts (requires actual farming skills to grow).',
                'Plantation Magic: A subsidiary power allowing magical manifestation of plant life.',
                'Shifter Form: Can transform into full bunny form at will.',
                'Empathic Sensing: Natural empaths who can sense emotions and help guide others through softness and validation.',
              ]} />

              <SubHeading>Reproductive Biology — Heat Cycles:</SubHeading>
              <p className="mb-1">Bamboo Bunnies experience heat cycles every 2-3 years during fall season, beginning around age 15 after puberty. During each cycle:</p>
              <BulletList items={[
                'Lasts the entire fall season (ends before winter)',
                'Lays approximately 10 eggs total per cycle',
                'Only 3-4 eggs successfully hatch into non-magical, non-yokai bunnies',
                'Remaining 6-7 eggs are empty',
                'Heat cycles eventually cease after several occurrences',
              ]} />

              <SubHeading>Magical Offspring:</SubHeading>
              <p>In rare cases, Bamboo Bunny magic can accidentally create sentient magical beings. Through intense earth and plant magic, they may birth creatures with independent consciousness and personalities, such as the chaotic and empathic Little Bunny Aru created by Haruhi Aoi.</p>

              <SubHeading>Temperament:</SubHeading>
              <p>Bamboo Bunnies are natural peacekeepers and emotional anchors. They rarely engage in physical combat, preferring to fight emotionally to bring others back to their humanity. Their extroverted and sociable nature makes them excellent mediators and support figures in their communities.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Spirit Yokai ──────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="spirit-yokai" className="font-serif text-2xl text-text mb-6">Spirit Yokai</h2>

        <div className="border border-border rounded-xl bg-surface p-5 space-y-5">
          <p className="font-serif text-base font-semibold text-[#d49fff]">─────⊰ Yokai: Spirit Types</p>

          <div>
            <p className="font-semibold text-text mb-1">Death Eater Spirit (Shikuibito)</p>
            <p className="text-sm text-text-muted">A corrupted spirit who served as director in YARC facilities, known for brutal treatment of captured yokai.</p>
          </div>

          <div>
            <p className="font-semibold text-text mb-1">Dove Spirits (Messenger Dove)</p>
            <p className="text-sm text-text-muted">Aside from normal doves, Spirit Doves are Ujuukyō Messengers. If something is of importance, a message will be delivered.</p>
          </div>

          <div>
            <p className="font-semibold text-text mb-1">Vapor Spirits</p>
            <p className="text-sm text-text-muted">Docile spirits that help humankind maintain balance. They are used in the creation of Cyborgs, which are carbon-based copies made with titanium alloy and Vapor Spirits. Sometimes, they don't need vessels. They are also fine the way they are! These Spirits are ageless. Their powers allow them to take on many forms as they please. It's not just an aid for Cyborgs. These beings came down to Ancient Japan in the last year of 1599 during the great Yokai Descent.</p>
          </div>

          <div>
            <p className="font-semibold text-text mb-1">Astral Beings</p>
            <p className="text-sm text-text-muted">Spirits that began descending into Pre-Industrial Japan around 1900 AD, contributing to the spiritual diversity of Neo-Japan. Not Divine Beings.</p>
          </div>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Elemental Yokai ───────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="elemental-yokai" className="font-serif text-2xl text-text mb-6">Elemental Yokai</h2>

        <YokaiEntry name="Yokai: Earth Yokai (Tsuchi Yōkai)" color="#ffd080">
          <p>Earth Yokai possess deep connections to the land and have caused tectonic shifts and the formation of new landmasses in Neo-Japan through their presence. They work in harmony with Water Yokai to maintain the massive earth pillars that support Neo-Japan's floating landmass. Earth Yokai magic is woven into the Magnoid levitation systems and infrastructure.</p>
          <p>There are many Earth Yokais, but the main figures are Badger Yokais and Earth Dragons that help with the landmasses.</p>
        </YokaiEntry>

        <YokaiEntry name="Yokai: Water Yokai (Mizu Yōkai)" color="#7ef5ff">
          <p>Water Yokai collaborate with Earth Yokai to build and maintain Neo-Japan's advanced floating technology. Their magic is integrated into the aqueduct systems, water filtration, and the magnetic suspension systems. There are rumors of an underwater yokai city somewhere beneath Neo-Japan's floating landmass, though its location remains secret.</p>
          <div className="border border-[rgba(126,245,255,0.2)] rounded-lg bg-surface p-3 mt-2">
            <p className="font-semibold text-[#7ef5ff] mb-1">Mermaid (Ningyo)</p>
            <p>Mermaid Spirits are powerful water-based yokai. The Mizuki Shoto archipelago was founded and shaped by a powerful Mermaid Spirit centuries ago, creating islands that serve as a gateway between the human world and oceanic spirit realms. These yokai were also targeted by YARC experimentation. Mermaids work alongside other Water Yokai and Earth Yokai to maintain Neo-Japan's floating landmass technology.</p>
          </div>
        </YokaiEntry>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Half Yokai ────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="half-yokai-demi-yokai" className="font-serif text-2xl text-text mb-4">Half Yokai (Demi-Yokai)</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">Half Yokai, also known as Demi-Yokai, are individuals who possess both human and yokai heritage or characteristics. They emerged as a distinct population following the Y&H Coalition Act of 1700 AD, when interspecies relationships became more common and socially accepted. Half Yokai occupy a unique space in Neo-Japan's supernatural society, often experiencing both the benefits and challenges of their dual nature.</p>

        {/* Origins */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <p className="font-serif text-base font-semibold text-[#d49fff] mb-3">─────⊰ Origins of Half Yokai</p>
          <p className="text-sm text-text-muted mb-3">Half Yokai can come into existence through several means:</p>

          <div className="space-y-3 text-sm text-text-muted">
            <div>
              <p className="font-semibold text-text">─────⊰ Natural Birth</p>
              <p>The most common origin, occurring when a human and yokai produce offspring together. These children typically inherit a blend of traits from both parents, though the yokai characteristics usually manifest more prominently due to supernatural genetics being dominant.</p>
            </div>
            <div>
              <p className="font-semibold text-text">─────⊰ Partial Relinquishment</p>
              <p>In rare cases, a Yokai Relinquishment ritual can be interrupted or performed incorrectly, resulting in an individual who is neither fully yokai nor fully human. These Half Yokai often struggle with identity and power control.</p>
            </div>
            <div>
              <p className="font-semibold text-text">─────⊰ YARC Experimentation</p>
              <p>The YARC has created artificial Half Yokai through forced genetic manipulation and cross-species experiments. These individuals often possess unstable abilities and severe psychological trauma from their creation.</p>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-4">Characteristics of Half Yokai</h3>
          <div className="space-y-4 text-sm text-text-muted">
            <div>
              <p className="font-semibold text-text mb-2">─────⊰ Physical Traits</p>
              <p className="mb-2">Half Yokai typically display a mixture of human and yokai features. Some can shift between more human or more yokai appearances, while others are permanently stuck in a blended form. Common manifestations include:</p>
              <BulletList items={[
                'Partial animal features (ears, tails, eyes, fangs)',
                'Unusual hair or eye colors that shift with emotion',
                'Supernatural markings or patterns on skin',
                'Heightened senses compared to humans',
              ]} />
            </div>
            <div>
              <p className="font-semibold text-text mb-2">Power Levels</p>
              <p>Half Yokai generally possess 30-70% of a full yokai's supernatural abilities, though this varies widely. Their powers tend to be:</p>
              <BulletList items={[
                'Less stable than full yokai, requiring more training and control',
                'Sometimes unpredictable, manifesting during emotional extremes',
                'Unique hybrid abilities that neither parent species possesses',
                'More draining on their stamina due to their partial human physiology',
              ]} />
            </div>
            <div>
              <p className="font-semibold text-text mb-2">Aging and Lifespan</p>
              <p>Half Yokai age at a rate between humans and full yokai. Most experience:</p>
              <BulletList items={[
                'Normal human aging until their mid-20s',
                'Significantly slowed aging afterward (living 150-300 years on average)',
                'The exact rate depends on which yokai parent species',
                'Some maintain youthful appearances for decades before aging resumes',
              ]} />
            </div>
          </div>
        </div>

        {/* Social Standing */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-4">Social Standing</h3>
          <div className="space-y-4 text-sm text-text-muted">
            <div>
              <p className="font-semibold text-text mb-2">Acceptance Varies</p>
              <p className="mb-2">Half Yokai face different treatment depending on the region and community:</p>
              <BulletList items={[
                'In progressive areas like Tokyo and Osaka, they are fully integrated',
                'Traditional yokai communities may view them as "diluted" or "impure"',
                'Some human communities fear them as "too supernatural" to trust',
                'The NYAQ welcomes Half Yokai who wish to become Funjin-kō-shin (Dust Path Ninja)',
              ]} />
            </div>
            <div>
              <p className="font-semibold text-[#d4a96a] mb-2">Legal Status</p>
              <p className="mb-2">Under the Y&H Coalition Act, Half Yokai are protected citizens with full rights. However:</p>
              <BulletList items={[
                'They are subject to both human and yokai laws',
                'Must register their yokai heritage with local authorities',
                'Are monitored more closely than humans or full yokai in some prefectures',
                'Cannot be forcibly subjected to Yokai Relinquishment.',
              ]} />
            </div>
          </div>
        </div>

        {/* Notable Populations */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-4">Notable Half Yokai Populations</h3>
          <div className="space-y-3 text-sm text-text-muted">
            <div>
              <p className="font-semibold text-text">The Hanami Region</p>
              <p>Home to many Half Yokai families who seek the spiritual neutrality of the shrine communities. The sacred grounds offer protection from discrimination.</p>
            </div>
            <div>
              <p className="font-semibold text-text">Mizuki Shoto Archipelago</p>
              <p>The mermaid-founded islands have become a sanctuary for aquatic Half Yokai and those fleeing persecution elsewhere.</p>
            </div>
            <div>
              <p className="font-semibold text-text">Urban Centers</p>
              <p>Cities like Tokyo, Osaka, and Kyoto have thriving Half Yokai populations who blend into the diverse metropolitan culture.</p>
            </div>
          </div>
        </div>

        {/* Common Types */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <p className="font-serif text-base font-semibold text-[#ffaad4] mb-4">─────⊰ Common Half Yokai Types</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-text-muted">
            {[
              { name: 'Half-Kitsune', desc: 'Fox-human hybrids with limited shapeshifting abilities and enhanced charm/illusion magic. Often possess 1-3 tails instead of the full nine.' },
              { name: 'Half-Vampire', desc: 'Retain vampire strength and longevity but can tolerate sunlight (though it weakens them). Must consume small amounts of blood regularly or suffer from anemia-like symptoms. Pig Blood is a good alternative. Rich in nutrients and vitamins.' },
              { name: 'Half-Dragon', desc: 'Possess incredible physical strength and minor fire resistance, but cannot achieve full dragon transformation. May manifest scales, enhanced durability, and temperature regulation abilities.' },
              { name: 'Half-Mermaid', desc: 'Can breathe underwater and possess enhanced swimming abilities, but require regular water immersion to maintain health. Often have webbed fingers/toes or subtle scale patterns.' },
              { name: 'Half-Tengu', desc: 'Bird-human hybrids with enhanced agility and minor wind manipulation. Some can achieve limited flight or gliding capabilities.' },
              { name: 'Half-Oni', desc: 'Demon-human hybrids with enhanced strength and durability. May possess small horns or unusual skin tones. Often struggle with inherited aggression.' },
            ].map((h) => (
              <div key={h.name} className="border border-border rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#ffaad4] text-xs mb-1">{h.name}</p>
                <p className="text-xs">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <p className="font-serif text-base font-semibold text-text mb-4">─────⊰ Challenges Faced by Half Yokai</p>
          <div className="space-y-3 text-sm text-text-muted">
            <div>
              <p className="font-semibold text-text mb-1">Identity Struggles</p>
              <p className="mb-1">Many Half Yokai feel caught between two worlds, not fully belonging to either human or yokai society. This can lead to:</p>
              <BulletList items={[
                'Psychological stress and identity crises',
                'Difficulty forming lasting relationships',
                'Pressure to "choose a side" from both communities',
              ]} />
            </div>
            <div>
              <p className="font-semibold text-text mb-1">Power Control Issues</p>
              <p className="mb-1">The unstable nature of their abilities requires extensive training:</p>
              <BulletList items={[
                'Emotional outbursts can trigger uncontrolled power manifestations',
                'Some abilities only activate under specific conditions',
                'Risk of accidental harm to themselves or others',
              ]} />
            </div>
            <div>
              <p className="font-semibold text-text mb-1">YARC Targeting</p>
              <p>Half Yokai have been subjects of YARC interest for "genetic purity studies" and forced experimentation, making many wary of authority figures.</p>
            </div>
            <div>
              <p className="font-semibold text-text mb-1">Reproductive Complications</p>
              <p className="mb-1">Half Yokai face unique challenges with having children:</p>
              <BulletList items={[
                'Offspring with humans tend to have even weaker yokai traits (Quarter-Yokai)',
                'Offspring with full yokai may have unpredictable power levels',
                'Some combinations result in sterility',
                'The YARC has exploited these complications for unethical breeding programs',
              ]} />
            </div>
          </div>
        </div>

        {/* Ninja Society */}
        <div className="border border-[rgba(126,245,255,0.2)] rounded-xl bg-[rgba(126,245,255,0.03)] p-5 mb-4">
          <h3 className="font-serif text-lg text-[#7ef5ff] mb-3">Half Yokai in Ninja Society</h3>
          <p className="text-sm text-text-muted mb-2">Many Half Yokai find purpose and acceptance within the NYAQ:</p>
          <BulletList items={[
            'Classified as Funjin-kō-shin (Dust Path Ninja) regardless of their yokai heritage',
            'Their hybrid abilities often make them versatile operatives',
            'The neutral philosophy of ninja society appeals to those caught between worlds',
            'Training helps them master their unstable powers',
          ]} />
        </div>

        {/* Cultural Perspective */}
        <div className="border border-[rgba(191,95,255,0.2)] rounded-xl bg-[rgba(191,95,255,0.03)] p-5">
          <h3 className="font-serif text-lg text-[#d49fff] mb-3">Cultural Perspective</h3>
          <p className="text-sm text-text-muted">In Ujuukyō faith, Half Yokai are seen as <strong className="text-text">living bridges</strong> between human and yokai worlds—embodiments of coexistence and harmony. Many shrines in the Hanami Region specifically offer blessings and guidance for Half Yokai seeking spiritual balance.</p>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Important Notes ───────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 id="important-notes-on-yokai-society" className="font-serif text-2xl text-text mb-6">Important Notes on Yokai Society</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="font-semibold text-[#d4a96a] mb-1">The Y&H Coalition Act (1700 AD)</p>
            <p>A formal agreement integrating Yokai and Human societies. Yokai cannot legally kill humans and vice versa, though Yokai-on-Yokai conflict is not illegal, as it has been traditional since Year 5 - 1599.</p>
          </div>
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="font-semibold text-[#ffd080] mb-1">Yokai Relinquishment</p>
            <p>A dangerous ritual that strips yokai of their powers, status, and transformation abilities, turning them human but removing all emotions. This can only be performed at Tenshi Shima (Angel Island) or Ryū no Shima (Dragon Island). Total Relinquishment requires Ujuukyō religious practices.</p>
          </div>
          <div className="border border-[rgba(255,107,107,0.3)] rounded-xl bg-surface p-4">
            <p className="font-semibold text-[#ff8a8a] mb-1">YARC (Yokai Association Recovery Center)</p>
            <p>Formed in 1779 AD, this organization claims to rehabilitate yokai offenders but has been known for unethical experimentation, forced breeding programs, and psychological torture through Telepathy Regulators.</p>
          </div>
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="font-semibold text-text mb-1">Yokai Aging</p>
            <p>Yokai age like humans until age 17-18, then their aging slows significantly, allowing them to maintain youthful appearances for extended periods.</p>
          </div>
        </div>
      </section>

      {/* Nav */}
      <div className="mt-12 section-divider" />
      <div className="flex flex-wrap gap-3 mt-4">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" className="btn-neon-cyan text-xs">← NEO-Japan's Prefectures</Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" className="btn-neon-purple text-xs">Religion of Ujuukyo →</Link>
      </div>

    </div>
    </LorePageLayout>
  )
}
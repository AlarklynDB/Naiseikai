import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#ff6b6b';
const ACCENT2 = '#7ef5ff';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-'): undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg font-semibold mt-6 mb-2" style={{ color: ACCENT }}>
      {children}
    </h3>
  );
}

export default function YokaiAssociationRecoveryCenter() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>Yokai Association Recovery Center</span>
      </nav>

      {/* Header */}
      <div className="mb-4">
        <p className="text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">The Naiseikai Universe's Most Corrupt Organization</p>
        <h1
          className="font-serif text-3xl sm:text-4xl mb-3"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🏥 The Yokai Association Recovery Center
        </h1>
        <p className="text-lg font-semibold mb-1" style={{ color: '#ffd080' }}>
          妖怪協会回復センター Yōkai Kyōkai Kaifuku Sentā
        </p>
        <p className="text-sm text-text-faint font-mono mb-6">Abbreviation: YARC</p>
      </div>

      {/* Taglines */}
      <div
        className="rounded-xl p-5 mb-6 space-y-2"
        style={{ borderLeft: `4px solid ${ACCENT}`, background: 'rgba(255,107,107,0.05)' }}
      >
        <p className="text-xs text-text-faint font-semibold uppercase tracking-widest mb-2">⊰ Official Statement, Taglines, &amp; Mottos</p>
        <p className="italic text-sm text-text-muted">"Through Memory, We Reform. Through Pain, We Understand."</p>
        <p className="italic text-sm text-text-muted">"Must've been the air, maybe. Or the wind. Woosh."</p>
        <p className="italic text-sm text-text-muted">"Come to us who are weary and lost like sheep. We will offer you great service."</p>
      </div>

      {/* Content Warning */}
      <div
        className="rounded-xl p-4 mb-6"
        style={{ background: 'rgba(255,50,50,0.08)', border: `1px solid ${ACCENT}` }}
      >
        <p className="text-sm font-bold" style={{ color: ACCENT }}>
          ⚠ Content Warning: SA / Abuse / Manipulation / Experimentation
        </p>
        <p className="text-xs text-text-muted mt-1">Everything here is entirely fictional.</p>
      </div>

      {/* Image Placeholder */}
      <div className="mb-8 rounded-xl border border-border bg-surface flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
        <span className="text-3xl">🏥</span>
        <p className="font-mono text-xs font-semibold" style={{ color: ACCENT }}>YARC Building</p>
        <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
      </div>

      {/* ── History & Backstory ── */}
      <SectionHeading>History &amp; Backstory</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Formed in 1779 AD by the YHCA (Yokai Human Coalition Act). The YARC rehabilitates repeat offenders into making them relive their past errors so that they can make up for it. Intense Telepathy Regulators were used to force criminals to rewatch their memories one by one, while breaking their minds. This in fact, corrupts them, and then breaks them. This organization's ethics are….mildly concerning.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The department disguises itself as a sanctuary of healing, but beneath its mystical halls lies a deeply flawed system of psychological experimentation and brutal telepathic enforcement (and entrapment).
      </p>

      <SubHeading>Public Face Timeline</SubHeading>

      {[
        {
          label: 'Before The Possession (1779)',
          desc: 'Kihara Amaru was a Dullahan Official and Warrior from the YHCA. She formed this organization by the means for rehabilitation and remedy for people who have a huge psychosis. From 1779 - 1854, The YARC followed the Ujuukyo Principles (Religion of Neo-Japan) to the top.',
        },
        {
          label: 'The Shift (1855)',
          desc: "Kihara Amaru had been cursed and inhabited by a very malevolent spirit called Shikuibito, known as Death Eater. It is now run by Shikuibito, who have corrupted the staff of the entire building. She is also under his control.",
        },
        {
          label: 'Ties Are Cut (1875)',
          desc: "During Death Eater's reign, he had cut ALL official ties off from the YHCA including the Yokai Side of the YHCA. This organization has gone rogue. The funds that go the YARC are either from black markets, stock investments, or money laundering. Theft from banks and trillionaires would sometimes help, but only a small portion goes into the YARC's savings. The rest of money are used to develop more brutal inventions, while also selling these dangerous instruments. Back and forth investment.",
        },
      ].map((t) => (
        <div key={t.label} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>─────⊰ {t.label}</p>
          <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
        </div>
      ))}

      <p className="text-base text-text-muted leading-relaxed mt-4 mb-2">
        There are also false advertisers who try to rope in innocent yokai to this place to leech off of their money. Con-artists are paid highly to mislead people into joining. There are some cults that worship the YARC.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The YHCA tries every time to shut down this movement ever since that cut, but even the Ninjas from the NYAQ, along with YHCA fear this place.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-6">
        <li>• The YHCA is the Moral Law</li>
        <li>• The NYAQ is the Enforcement</li>
        <li>• The YARC? Well, this whole page says it (Little ARU IS BEING META AGAIN, AREN'T I?!)</li>
      </ul>

      {/* ── Surface Image & Building Specs ── */}
      <SectionHeading>Surface Image &amp; Building Specs</SectionHeading>

      <SubHeading>空の深さ — Sora no Fuka-sa, aka "Skies' Depth."</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        It is located in <em>Sora no Fuka-sa Range</em> of the Sora no Oka's southern Region. The YARC resides on a very high hill in the southern part of Fuka-sa that oversees Okayama and Tottori in the Chugaku Region from the front. Behind this location, this building oversees the vast sceneries of the region.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        There are a lot of interconnecting hills around this area, which makes the terrain a little difficult to navigate. Despite the YARC being at a very high elevation, a road was paved so that transportation can run smoothly and easily. The hills and paths that lead up to this menacing place is less harsh than most other obstacles to drive on. Upon reaching, there will be a escalator-lift that will transport cars up and down.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        At night, the whole scene of this becomes very haunting and ominous. The white sleek metal reflects off the moonlight very well, even when it shines with white and black LEDs. With the moon looming over it, it makes it even more eerily still and quiet. Like an imposing building…<em>waiting—silently.</em>
      </p>

      <SubHeading>─────⊰ YARC Building Itself</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        It's shaped like the top half of a trident, just very wide, clunky, flat, and fat. The middle tine is where the main YARC building is, which is said to have up to 70 floors.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The YARC Building is a very large building that looks very sleek and luxurious. It is built with metal that is painted white, and it has white and black LEDs on the top of it. It slants upwards and the top of it looks like crab pincers.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• There is a huge "Y" like shape on the front that is designed into the main building.</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The two fat tines (also called Tine Pillars) on each side has Defcon Tine Towers (DTTs), next to the main building. These towers act like batteries that supply the inner workings of the UGF and below (and the main building). This section of the build is often referred as "The Triple Tines."
      </p>

      <SubHeading>The Underground Foundation</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The YARC sits on a stone-like pyramidal pillar (circular) making it look like a mountain island as a foundation. Before the pyramidal foundation had stuff on it, it was a natural formation before the construction happened.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        This formation had a very flat top when it was discovered. And shortly after, The YARC was built on it. They call this formation, "The UGF."
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The UGF has up to 100 floors downward, just below the main building. And within those floors, they are used for deep testing, facilities, and cells. These floors ranges from 100 - 1, descending in order. And Below Floor 1 is where the Failed Wing is.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• There aren't any windows on the exterior framework of the UGF. It is just parts that fit well with the sterile, mechanical feeling.</li>
        <li>• White LEDs are embedded horizontally into the UGF, which wraps around the entire circumference in evenly spaced bands, giving the interior a sterile, engineered glow.</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The surface exterior of the UGF, there is an escalator-like lift that can lift up cars to the main building. There are hidden parking lots that reside below the Defcon Tine Pillars.
      </p>

      <SubHeading>The Defcon Tine Towers</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Also known as "Defense Communication Tine Towers," (the long form name) these DTTs not only serve as batteries, but also for communications and defense, hence the name. They get their power from the sunlight and moonlight. UV and UV-ML (Ultraviolet Moonlight) gives the whole build a lot of power.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• A days worth of charge can last up to a month.</li>
        <li>• A weeks worth of charge can last up to three months.</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        When the batteries are off, the power still stays on. The energy is both self-sufficient and renewable. These towers look like huge batteries, with a satellite dish on top and a lot of other technical appliances. There are antennas on each of these towers.
      </p>

      {/* ── Purpose and Creation ── */}
      <SectionHeading>Purpose and Creation</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        The YARC claims to operate as a therapeutic institution. Its true goal, however, is to force yokai into reflection and compliance through artificial trauma cycles. Using specially designed "Telepathy Regulators," the department accesses a yokai's memories and projects them repeatedly into their consciousness. These sessions grow more intense over time.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Overexposure to their own failures, regrets, or violence is intended to create remorse. But in reality, it often leads to:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-6">
        <li>• Catatonia</li>
        <li>• Emotional collapse</li>
        <li>• Sexual Assault on younger Yokai</li>
        <li>• Spirit degradation</li>
        <li>• Memory fragmentation</li>
        <li>• Identity erasure</li>
      </ul>

      <SubHeading>The YARC Staff</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Not all staff in the YARC are just Yokai Officials. Humans are often times roped into this like ex-officers, military, and navy who have been viewed as inferior or have been <em>discarded</em> (kicked out) from their positions. That's what makes it worse. Yokai and Human staff can't even bring themselves to kill each other, because of Death Eater's control.
      </p>
      <p className="text-sm text-text-faint font-semibold mb-2">─────⊰ Non-Yokai (&amp; Non-Human) Staff</p>
      <p className="text-sm text-text-muted mb-2">
        Mutated beings from animals that can talk aren't entirely dangerous. Some are considered "neutral ambiguity" because these creatures live on lines. They can cross it or not if they want. Even monsters that come from this are used as guard dogs and wardens with a given task just to "protect" a certain subject. Some of these include:
      </p>
      <ol className="space-y-1 list-decimal list-inside text-sm text-text-muted mb-6">
        <li>Monsterfied Monkeys &amp; Gorillas</li>
        <li>Monsterfied Cats (black cats specifically)</li>
        <li>Monsterfied Amphibians and Lizards</li>
        <li>Mutated Plants (Like Tsubaki (Tsubaki is free tho))</li>
        <li>Cerberus-like beings.</li>
        <li>Pac-Man characters made sentient and real.</li>
        <li>A weaponized Shiny-matte Bop-It Toy (single one) made sentient. It's a giant one.</li>
      </ol>

      {/* ── Methodology ── */}
      <SectionHeading>Methodology</SectionHeading>

      {[
        {
          num: '1.',
          title: 'Memory Replay Therapy',
          desc: 'Yokai are strapped into cold metal chairs lined with sigils. A psychic imprint of their mind is extracted and looped into a visual replay, forcing them to relive their worst experiences. Telepathy Regulators are used here.',
        },
        {
          num: '2.',
          title: 'Reformation Pods',
          desc: 'These pods are also known as Suppressor Pods. Pods like these can remove external stimulus, leaving the subject alone with their memory echoes. Some pods are set to random sequences, increasing instability when the yokai themselves refuse or struggle.',
        },
        {
          num: '3.',
          title: 'Emotional Purging',
          desc: 'The most dangerous method. Telepaths forcibly enter the yokai\'s mind and "purge" volatile emotions like rage, sorrow, or fear. Many lose their capacity to feel anything at all.',
        },
      ].map((m) => (
        <div key={m.num} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}><strong>{m.num}</strong> {m.title}</p>
          <p className="text-sm text-text-muted leading-relaxed">{m.desc}</p>
        </div>
      ))}

      {/* ── Torture Devices ── */}
      <SectionHeading>Torture Devices</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        There are torture devices that are used on victims to forcibly reform them while stripping away their emotions, or just straight up mess with them.
      </p>

      {[
        {
          label: 'Telepathy Regulators',
          desc: "These devices are worn like helmets. A VR-like visor is hung on the front which has a screen on the inside that projects the victim's memory from their mind which forces them to watch it over and over. Design wise, it looks like a helmet, and there are headphones as hearing mufflers. There's blue-like tubes on the top of the helmet that serve as artificial telepathy linking, which is where the VR-like features get their power from. Those tubes on the top are made with nano-neural pathways which are connected to the head/scalp (like a chip) beneath the helmet. It is able to access the neural pathways within the brain.",
        },
        {
          label: 'Man Made Venom "INVЯ3XE"',
          desc: "A type of artificial venom that doesn't actually poison or is Venomous. It acts as a counter to natural venom and poison in most species. This type of venom negates natural biological venom. Snake Yokai, along with Octoquids are naturally immune to natural venom and poison. A sample of snake blood was taken from Asami's blood to develop this type of anti-agent so that it can be used effectively.",
        },
        {
          label: 'Bio-Genesis Cells',
          desc: 'Artificial sperm cells made from different victimized Yokai to produce an "x" factor mutable cell. This type of cell can be randomized by a nanobot to alter DNA when a baby is formed within a carrier. Random change? Random Outcome. Gacha DNA Gambling.',
        },
        {
          label: 'Suppressor Pods',
          desc: 'These pods are to suppress victims when they lash out. It can remove stimulus and senses, which makes the subject alone with their thoughts. Some of these Pods are set to different schedules or intervals, depending on how harsh or chaotic the subject is. In other cases, these pods can also be used as cryogenic pods to freeze subjects to preserve them for future use. A weird side effect is that these pods can give new abilities to Yokai. Not even the staff know how to turn it off. It might be a systematic glitch or something. Who knows?',
        },
        {
          label: 'Power Dampeners Technology',
          desc: "Dampeners that can negate all supernatural like powers and abilities, which makes subjects powerless. They're typically bind to wrists and ankles, but they are easily adaptable since it has a feature to adapt to any part of the body that needs to be suppressed. These dampeners use nano-bots that detect active Yokai Cells (that enable their powers) and blocks these abilities from further use. These tech are also built within cells. These barely effect Asami to an extent, but her overwhelming powers negate all dampeners used on her (some of hers can be negated, but not all of them).",
        },
      ].map((d) => (
        <div key={d.label} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>─────⊰ {d.label}</p>
          <p className="text-sm text-text-muted leading-relaxed">{d.desc}</p>
        </div>
      ))}

      {/* ── Subjects ── */}
      <SectionHeading>Subjects (Assets / Victims)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        There are at least up to eight assets that the YARC has claimed (albeit more), but these "assets" are the most prominent within their <em>experiments.</em> Trackers are imbued into the arm if these "assets" escape time to time. Only one subject has that tracker. These are some of the subjects known in the facility.
      </p>

      {[
        { id: 'Subject 0', name: '????', desc: 'Had escaped the YARC and is presumed dead. No one knows where they are now.' },
        { id: 'Subject Z', name: '"Kihara Amaru"', desc: "Even when she was still possessed by Shikuibito, he never used her name. If he had damaged her body, he wouldn't be able to possess it. But he did threaten her time to time with displays of her powers if she ever tried to fight back mentally. He just calls her Subject Z out of spite." },
        { id: 'Subject 1', name: '"Tatsuya Ryu"', desc: 'A Half Snake and Dragon Yokai. He was killed by undergoing Telepathy Regulation.' },
        { id: 'Subject 2', name: '"Alice Renforth"', desc: 'A Fairy Yokai from London. Underwent Emotional Purging from the YARC but failed. She walked out free because she was too cute to experiment on (turns out, she had a huge humiliation kink which made the staff cringe).' },
        { id: 'Subject 3', name: '"Xiangxue"', desc: 'A Half Yokai Qilin from China. She died because a staff of the YARC used a giant tranq dart that had poison and meth.' },
        { id: 'Subject 4', name: '"Yokai-X"', desc: "Said to harness the power of healing and illusions. They've been captured before but….the YARC are confused about how this yokai can be here and everywhere at once. Location unknown." },
        { id: 'Subject 5', name: 'Colocasia Tea Plant "Tsubaki"', desc: "Not a Yokai, but it became sentient due to external factors (before the YARC brought it in). The YARC named it Tsubaki since it didn't pose much of a threat….but, it killed a staff once. Now reigns free in Japan." },
        { id: 'Subject 6', name: 'Asami Kurose', desc: "An Octopus yokai that was cursed with snake blood venom. Shikuibito's personal slave. She was chained when she was found. Brutally assaulted and abused by many other powerful Yokai. Was impregnated by a Demon Yokai once and gave birth to a defect. The defect was killed later. Escapes time to time but ends up being captured. She is still alive to this day." },
      ].map((s) => (
        <div key={s.id} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="font-mono text-xs text-text-faint mb-0.5">{s.id}</p>
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>{s.name}</p>
          <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
        </div>
      ))}

      <SubHeading>It's Not Just Yokai</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        It's not just Yokai that the YARC mistreats. They also experiment on animals and humans alike. Innocent animals (like dogs, cats, rabbits…etc) can become a half-mutated Yokai beings, or a full on monster. (anything they can get their hands on). And for humans? They're experimented on. Some are turned into goblins and demi-yokai to do slave work, and even servitude. They're held hostage against their own will and the YARC uses this exploitation to further their unethical research. Demi Human Yokai are made through Yokai infused blood, which acts as a catalyst to trigger new mutations. And these new mutations contain mysterious surrounding Yokai Blood, which is why the YARC finds this substance….<em>very peculiar</em>.
      </p>

      {/* ── Ethical Concerns ── */}
      <SectionHeading>Ethical Concerns</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The YARC's practices have drawn criticism from multiple human and yokai rights groups. While effective in some cases, most who enter the YARC either emerge broken or do not emerge at all.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The department insists that it prevents mass destruction by neutralizing unstable threats. Yet its darkest truth remains: <strong style={{ color: ACCENT }}>the mind is the battlefield.</strong> Some whisper that the most powerful yokai locked inside are no longer themselves, but hollow vessels wandering their own psychic ruins.
      </p>

      {/* ── Unethical Practices ── */}
      <SectionHeading>Unethical Practices &amp; Experimentations</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        There is no line here and there are no sides. This is institutional horror at it's finest. The YARC has a lot of space in their buildings, specifically that backroom like storage that's hidden deep within the mountains. What goes on in here? Well…….
      </p>

      <SubHeading>The Failed Wing</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Failed experiments are imprisoned here for eternity. Unstable and dangerous failed ones also go into this place. There are a lot of cells that hold these "creatures." There's no water, no food, and no source of light. Those who are extremely dangerous are considered a "threat" and are locked in quarantine deep within the mountains at a very low level.
      </p>
      <div
        className="rounded-xl p-4 mb-6"
        style={{ background: 'rgba(255,107,107,0.05)', border: `1px solid ${ACCENT}44` }}
      >
        <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>─────⊰ The Suppressor Cell</p>
        <p className="text-sm text-text-muted leading-relaxed">
          This Cell is underground in the Failed Wing. It dampens and negates all supernatural powers. There is barely air here, little light, with no food or nourishment. This cell here contains nano-bots that self regulates the entire cell. Only drinks are offered, specifically electrolyte drinks. The minerals in these drinks contain a special uniqueness that causes "blood with little air" to flow faster than normal.
        </p>
      </div>

      <SubHeading>Host-"less" Breeding</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        Using allocated DNA, blood samples, cells, and sperm cells, the YARC has utilized this to a degree they can breed even without a carrier. There Yokai that are capable of being a carrier if this so called "cell" requires enormous power. Asami was one of them. The YARC doesn't sell these. Once they figure out more causes to the "yokai blood," they kill of the off-springs to dispose them like evidence.
      </p>

      <SubHeading>Symbiotic Parasitical Nourishment</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        Tape-like parasites are used to feed and transmit stem cells to different experiments so that these "subjects" can eat blood from other yokai, demi-yokai humans, or failed experiments. It is said that even Yokai Blood (man-made infusions (and natural)) contain nutrients that help sustain Yokai Abilities when used, even if it's not regularly active.
      </p>

      {/* ── Rumored Anomalies ── */}
      <SectionHeading>Rumored Anomalies</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The YARC has some funny….events and happenings. It's not just Tsubaki The Plant or Alice Renforth being released victims since they were "<em>too cute</em>" or just being "<em>how did I get here?</em>"
      </p>

      {[
        {
          label: 'The Musical Alarm',
          items: ['Blasts "Never Gonna Give You Up" at victims at 50% volume.', 'Recites "The Bee Movie" over 10x'],
        },
        {
          label: '"Bop it, Twist It, Pull It" Toy',
          items: ['Used as a stress relief for victims. At least the YARC is being lenient!', 'There is around…..250 of these.'],
        },
        {
          label: 'The Sentient Plushie',
          items: ['Once a Snow Rabbit Plushie, became sentient because one of the staff wanted a "cute monster."'],
        },
        {
          label: 'Ditto',
          items: ['Yes. Ditto from Pokemon was made real. Don\'t ask why.'],
        },
      ].map((a) => (
        <div key={a.label} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="text-sm font-semibold mb-2" style={{ color: ACCENT2 }}>─────⊰ {a.label}</p>
          <ul className="space-y-1 list-none ml-2 text-sm text-text-muted">
            {a.items.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      ))}

      {/* ── Cultural Impact ── */}
      <SectionHeading>Cultural Impact</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Yokai across Neo-Japan (and international) fear the YARC more than death. Children are warned about it in folktales. The phrase "You'll end up in YARC" has become a spiritual curse in some regions. Even the entire world knows of this shady organization.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Others, especially young yokai with unstable powers, see it as a place to avoid at all costs. The legacy of this institution is one of silence, whispers, and unresolved trauma.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-8">
        Not even Yokai from around the world dare to step foot in the YARC.
      </p>

      {/* Closing line */}
      <div
        className="rounded-xl p-5 mb-10 text-center"
        style={{ background: 'rgba(255,107,107,0.05)', border: `1px solid ${ACCENT}44` }}
      >
        <p className="italic text-base" style={{ color: ACCENT }}>
          The YARC isn't just evil. They are not just deranged. The YARC is the embodiment of cataclysmic horror (and being an unhinged organization).
        </p>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yhca-yokaihuman-coalition-act" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← YHCA
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" className="btn-neon-purple text-sm px-4 py-2 rounded">
          NYAQ →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}

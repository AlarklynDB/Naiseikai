import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#ffd080';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-') : undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-text mt-5 mb-1" style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

export default function ReligionOfUjuukyo() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>The Religion of Ujuukyō</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1
          className="font-serif text-3xl sm:text-4xl mb-4"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🕍 The Religion of Ujuukyō
        </h1>
        <p className="text-base text-text-faint italic">宇柔教 — The Faith of Cosmic Gentleness</p>
      </div>

      {/* ── Intro Block ── */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{ borderLeft: `4px solid ${ACCENT}`, background: 'rgba(255,208,128,0.05)' }}
      >
        <p className="text-base font-semibold mb-1" style={{ color: ACCENT }}>
          私たちはあなたの沈黙に答えます。ようこそ。
        </p>
        <p className="italic text-sm text-text-muted mb-1">
          Watashitachi wa anata no chinmoku ni kotaemasu. Yōkoso.
        </p>
        <p className="italic text-sm text-text-muted mb-3">
          We will respond to your silence. Welcome in.
        </p>
        <p className="text-sm text-text-muted">You are safe here. Welcome home.</p>
      </div>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        <strong style={{ color: ACCENT }}>Ujuukyō</strong> is the universal spiritual tradition of the Naiseikai Universe, practiced by Humans, Yokai, Spirits, and Angels alike. Born in the years following the Great Descent of Year 5-1599, when supernatural beings came to live among humanity, Ujuukyō emerged as a unifying faith that transcends racial boundaries. Rather than any race worshipping another, all beings honor the same divine force — a recognition that true sanctity lies not in power or origin, but in{' '}
        <strong style={{ color: ACCENT }}>value, virtue, and the reverence of death</strong>.
      </p>

      {/* ── Central Deity ── */}
      <SectionHeading>The Central Deity: Ujuu-sama (宇柔-様)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        At the heart of Ujuukyō stands <strong style={{ color: ACCENT }}>Ujuu-sama</strong>, the Moon Goddess of Mercy and Silence, whose name translates to "Cosmic Gentleness." She is known by many sacred titles:
      </p>

      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• <strong style={{ color: ACCENT }}>静かの神</strong> (Shizuka no kami) — The Goddess of Silence</li>
        <li>• <strong style={{ color: ACCENT }}>沈黙の神</strong> (Chinmoku no Kami) — The Goddess of Stillness</li>
        <li>• <strong style={{ color: ACCENT }}>慈悲の神</strong> (Jihi no kami) — The Goddess of Mercy</li>
        <li>• <strong style={{ color: ACCENT }}>価値の女神</strong> (Kachi no megami) — The Goddess of Value</li>
        <li>• <strong style={{ color: ACCENT }}>美徳の女神</strong> (Bitoku no megami) — The Goddess of Virtue</li>
      </ul>

      <p className="text-base text-text-muted leading-relaxed">
        Ujuu-sama embodies the sacred concept of <strong style={{ color: ACCENT }}>"ma" (間)</strong> — the meaningful silence, the space between breaths, the pause that holds understanding. She exists in the threshold between life and death, earth and the divine, watching over all who pass through her moonlit gate.
      </p>

      {/* ── Core Beliefs ── */}
      <SectionHeading>Core Beliefs &amp; Philosophy</SectionHeading>

      <SubHeading>The Sanctity of Death</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        Ujuukyō teaches that death is not an enemy to be feared, but a sacred passage to be <strong style={{ color: ACCENT }}>honored with humility and discernment</strong>. Those who face their mortality with grace and acknowledge the natural cycle of existence receive Ujuu-sama's mercy. The arrogant who believe themselves above death, who disrespect the boundary between life and the beyond, face her judgment.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Even the human side of the police force believes in Ujuukyo (albeit slight corruption, which is no less than other regions aside from Neo-Japan).</li>
        <li>• NEO-Japan practices are very high despite some shortcomings.</li>
      </ul>

      <SubHeading>Discernment Above All</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        The most treasured virtue in Ujuukyō is <strong style={{ color: ACCENT }}>discernment</strong> (識別, <em>shikibetsu</em>) — the ability to know when to act and when to be still, when to speak and when to honor silence, when to fight and when to accept one's time has come. This wisdom is considered the highest form of spiritual awareness. Loyalty is also one of them!
      </p>

      <SubHeading>Universal Equality</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Ujuu-sama does not favor Angels over Yokai, Spirits over Humans. She favors those who embody the sacred values: <strong style={{ color: ACCENT }}>diligence, perseverance, compassion, humility, and above all, discernment</strong>. The{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" style={{ color: '#7ab8f5' }}>NYAQ</Link>{' '}
        philosophy aligns most closely with these teachings, which is why many Ninjas — regardless of their race — find spiritual resonance in Ujuukyō practices.
      </p>

      <SubHeading>The Silence of Compassion</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        True mercy, Ujuukyō teaches, flows from silence. Only in the quiet space of listening can one truly understand another's suffering. Only in stillness can compassion be born. Ujuu-sama's silence is not absence — it is the <strong style={{ color: ACCENT }}>presence of infinite understanding</strong>.
      </p>

      <SubHeading>Emotion, Values, and Virtues, as Holiness and Sacredness</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Within Ujuukyo, The Goddess of Mercy and Compassion believes that emotions are sacred, spiritual and holy. From Positive ones, which symbolize <em>purity</em>, and negative ones, which symbolize <em>pain</em>. Why? Because purity teaches followers how to be pure of heart, while pain guides them and teaches them what it means to be human. To have humility, humbleness, and humanity. To grow in Naiseikai means to recognize and be aware of your own emotions and values for others. Because these emotions and influence others greatly, even if they can't see past it.
      </p>

      {/* ── Sacred Practices ── */}
      <SectionHeading>Sacred Practices</SectionHeading>

      <SubHeading>Moon Gate Shrines</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Followers of Ujuukyō worship at <strong style={{ color: ACCENT }}>Tsuki-mon</strong> (月門, Moon Gate) shrines, architectural structures featuring multi-tiered gates that ascend toward the heavens, silhouetted against the moon. Passing through these gates symbolizes the threshold between the mortal and divine realms.
      </p>

      <SubHeading>Rituals of Stillness</SubHeading>
      <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• <strong style={{ color: ACCENT }}>Seika no Gi</strong> (静化の儀, Ritual of Sanctification): A purification ceremony performed in complete silence, where practitioners meditate on their mortality and offer gratitude for the gift of life.</li>
        <li>• <strong style={{ color: ACCENT }}>Ma no Inori</strong> (間の祈り, Prayer of the Pause): Sacred moments of collective silence observed during gatherings, honoring the space between words where truth resides.</li>
        <li>• <strong style={{ color: ACCENT }}>Shingetsu no Sahai</strong> (新月の祭杯, New Moon Reverence): Monthly observances on the new moon, when practitioners reflect on endings, transitions, and the acceptance of life's cycles.</li>
      </ul>

      <SubHeading>💖 Honoring the Departed</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        When a follower of Ujuukyō dies, their passing is celebrated with quiet dignity. The community gathers not in loud mourning, but in <strong style={{ color: ACCENT }}>respectful silence</strong>, allowing the deceased's spirit to pass peacefully through Ujuu-sama's gate. Those who die with humility and acceptance are believed to receive her mercy and find peace in the beyond. This isn't just for Yokai and other supernatural beings alike. This is for Humans too.
      </p>

      {/* ── Total Relinquishment ── */}
      <SectionHeading>Total Relinquishment (TRQMT)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        <strong style={{ color: ACCENT }}>Total Relinquishment (TRQMT)</strong> requires that you MUST accept your OWN Faith, Personhood, Imperfections, and Sins. Because that is what makes a person whole, and they must also acknowledge the breath and their own silence. This tri-ritual and act is sacred and rare, and it must be DONE with a humble heart. Only then Ujuu-sama can recognize your growth as a person, and she will fulfill any wish you want to be relinquished from, or bestow. But before this must happen Ujuu-sama requires you to:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Drench (Baptize) your head w/ Sakura Water. The Head symbolizes thought and purity.</li>
        <li>• Wash and Clean the Feet — this symbolizes the pathway you've walked, the history. No matter what ups and downs a person has lived through, the feet must be washed before stepping into the Sanctuary of Ujuu-sama.</li>
      </ul>

      {/* ── Yokai Relinquishment ── */}
      <SectionHeading id="yokai-relinquishment">Yokai Relinquishment (YRQMT)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        YRQMT is an act that takes away identity and emotions, this one is more forced. Because it needs to confront criminals to face their own immoral sins. Whether or not the criminal wants to refuse or comply, this will still be enacted.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-3">
        <li>• It takes away emotions, personhood, and yokai status, abilities, and powers. The only place to do this is at <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" style={{ color: '#7ab8f5' }}>Tenshi Shima (Angel Island)</Link> and <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" style={{ color: '#7ab8f5' }}>Ryuu no Shima (Dragon Island)</Link>.</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        If one criminal does recognize their own wrong doings, the severity is dialed down.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• <strong style={{ color: ACCENT }}>ONLY</strong> Yokai Status (appearance) abilities and powers will be taken away. Later replaced with a human body. This keeps track of their record, and said record is transferred over to the Human Police Task Force so that they can keep track of what the person has committed.</li>
        <li className="ml-4">— if the said person (criminal) still does bad things, the police will enact!</li>
      </ul>

      {/* ── The Body is a Temple ── */}
      <SectionHeading>The Body is a Temple</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The Human Body is a temple, a <em>sacred one</em>, no matter the flaws or the imperfections. Even defects, despite born of genetics or not, are still considered a temple no matter how you treat it. In Ujuukyo, each of the body represents the path you've taken. Treat your body as a temple, a sacred one with care.
      </p>

      <SubHeading>The Head</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The Head is where the <strong style={{ color: ACCENT }}>mind</strong> lives. Where information is received and stored.
      </p>
      <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Eyes</strong><br />No matter what a person sees, no matter what they watch, read, or observe, the Eyes are evidence of what you've witnessed.</li>
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Ears</strong><br />No matter what a person hears or no matter what they listen to, the Ears are evidence of what they've heard throughout their lifetime.</li>
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Mouth</strong><br />No matter what a person speaks, even if it is foul, negative, positive, or hateful, the Mouth is evidence and proof of what kind of influence you speak to others. Even if it is from a tongue of deceit (lies) or praise (acknowledgement and compliments).</li>
      </ul>

      <SubHeading>The Body</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The Body isn't just the <strong style={{ color: ACCENT }}>Heart</strong>, it is the <strong style={{ color: ACCENT }}>Soul</strong> of where your <em>emotions</em> live.
      </p>
      <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-6">
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Arms</strong><br />The arms that carry the body symbolizes the weight a person has carried. Not just physical, but also mentally. The Arms are the support that carry your decision.</li>
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Hands</strong><br />Every sensation of touch, every actions you take, take root in the Hands that you carry from the Arms. Even if it is used for positivity, it will influence the ways you interact with others, not just negatively.</li>
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Legs</strong><br />The Legs symbolize the walking weight — functions that hold the body up. The very legs that help people walk. It is a constant motion that never stops, because it helps people dodge obstacles even if the pathway sets them as a challenge.</li>
        <li>• <strong style={{ color: ACCENT }}>─────⊰ The Feet</strong><br />The Feet symbolize the very pathway that a person has ever set foot on. No matter what the journey entails from the start and to the end, even if it is still ongoing. The very feet that walked the earth. If a person goes on that path and makes a wrong turn, there is no going back. Even if a person goes on the right path and does a good job in the future, there is still no going back, for{' '}
          <em style={{ color: ACCENT }}>The Feet share your past into the future, even if that history tries to hide itself.</em>
        </li>
      </ul>

      {/* ── Sacred Texts ── */}
      <SectionHeading>Sacred Texts &amp; Teachings</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        While Ujuukyō has no single founder or rigid scripture, practitioners follow the <strong style={{ color: ACCENT }}>Kachi Kyōten</strong> (価値経典, Scripture of Value) — a collection of wisdom teachings passed down through oral tradition and written in volumes housed in places like the NYAQ's deepest archives (Floor Z.11).
      </p>

      <p className="text-sm text-text-faint italic mb-2">Core maxims include:</p>
      <div
        className="rounded-xl p-5 mb-4 space-y-3"
        style={{ background: 'rgba(255,208,128,0.05)', border: `1px solid ${ACCENT}33` }}
      >
        <p className="italic text-sm" style={{ color: ACCENT }}>"In silence, find strength. In stillness, find mercy."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"The wise know when their time has come. The arrogant meet only judgment."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"Value is not in power, but in virtue. Virtue is not in words, but in discernment."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"All beings stand equal beneath the moon's gaze."</p>
      </div>

      <SubHeading>The Faith in Practice</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        Ujuukyō is practiced differently across the Naiseikai Universe, adapting to local customs while maintaining its core principles. In the{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" style={{ color: '#7ab8f5' }}>NYAQ</Link>,
        the faith is deeply respected — many Ninjas practice Ujuukyō's teachings as part of their spiritual training, understanding that <strong style={{ color: ACCENT }}>to honor death is to truly understand life</strong>. Warriors, Martial Artists, and even Dullahans who value the sanctity of mortality often find themselves drawn to Moon Gate shrines.
      </p>

      <p className="text-base font-semibold mt-4 mb-6" style={{ color: ACCENT }}>
        The religion asks nothing more than this: <em>Live with discernment. Face death with humility. Find mercy in silence.</em>
        <br />And when your time comes, Ujuu-sama will be waiting at the moonlit gate.
      </p>

      {/* ── Holy Decree of Sex ── */}
      <SectionHeading>The Holy Decree of Sex</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        In Ujuukyo, Sex is not something bad, wrong, vile, or a sin. And it isn't just about attractiveness, intimacy (fornication/intercourse), pleasure, or gender. These are surface level of emotions and how followers of Ujuukyo sees it.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        But in this faith-based setting, <strong style={{ color: ACCENT }}>the act of sex</strong> is about:
      </p>

      <ol className="space-y-2 list-decimal list-inside text-sm text-text-muted mb-4">
        <li><strong style={{ color: ACCENT }}>Honesty</strong> — Don't try and hide behind lies to sugarcoat true feelings.</li>
        <li><strong style={{ color: ACCENT }}>Vulnerability</strong> — The ability to be open and transparent. Truth doesn't hide. It shows.</li>
        <li><strong style={{ color: ACCENT }}>Acceptance</strong> — The ability to accept others for who they are even past all those masks and flaws.</li>
        <li><strong style={{ color: ACCENT }}>Honor</strong> — It's not just about pleasure. It's about honoring agency and autonomy. It's about respect.</li>
        <li><strong style={{ color: ACCENT }}>Connection</strong> — Because in Ujuukyo, connection is all about these four things.</li>
      </ol>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        It can be scary to be open and vulnerable, but this draws out the flaws of human kind alike, not just for yokai or humans. In order to understand each other without masks and lies, means that accepting their imperfections is better than trying to hide it behind shame.
      </p>

      {/* ── Love is a Powerful Emotion ── */}
      <SectionHeading>Love is a Powerful Emotion</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Whether an emotion like Love is platonic between friends, or a relational type of emotion between partners for a romantic situation, this type of emotion is a powerful force. It doesn't shame or dishonor people. Love is a holy attribute attuned to those who are:
      </p>

      <ol className="space-y-2 list-decimal list-inside text-sm text-text-muted mb-4">
        <li>Honest and Open</li>
        <li>Willing to make sacrifices</li>
        <li>Accepting those with imperfections</li>
        <li>Honoring past loved ones and future ones</li>
      </ol>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        But the most important thing is that Love…<em style={{ color: ACCENT }}>does not lie</em>. You cannot run from raw and honest feelings.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Platonicy is also a great form of love even if it's not for romance — because even hard bonded friendships between mutual love can be a great thing.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        It is not wrong to feel shame. Shame is a natural part of human emotion. But having too much shame can sometimes make you feel small — but do not be afraid, because shame can be balanced with confidence. If an emotion like Love is this powerful…..it changes people for the better. It can shape people into a better person even after a status of being vulnerable.
      </p>

      {/* ── Seven Disparities ── */}
      <SectionHeading>The Seven Disparities of Ujuukyō</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        In Ujuukyō, all emotions are sacred — even those that bring pain. But when sacred emotions lose their balance with the core virtues, they become <strong style={{ color: ACCENT }}>disparities</strong> (不均衡, <em>fukinkou</em>) — states of spiritual imbalance that obscure one's path to the moonlit gate. These are not sins to be punished, but <strong style={{ color: ACCENT }}>teachers of the hardest lessons</strong>. Ujuu-sama does not condemn those who experience disparities; she waits in silence for them to find their way back to balance.
      </p>

      {[
        {
          kanji: '慢心の影',
          romaji: 'Manshin no Kage',
          title: 'The Shadow of Arrogance',
          sacred: 'Confidence, self-worth',
          disparity: 'When confidence becomes arrogance that dismisses others and refuses to acknowledge mortality or imperfection. The arrogant believe themselves above death and beyond judgment.',
          balance: 'Humility. "The wise know when their time has come. The arrogant meet only judgment."',
        },
        {
          kanji: '怒りの嵐',
          romaji: 'Ikari no Arashi',
          title: 'The Storm of Unbound Rage',
          sacred: 'Anger, righteous fury, protective instinct',
          disparity: 'When anger loses its silence and becomes a storm that destroys without discernment, harming both self and others without pause for understanding.',
          balance: 'Stillness and Mercy. "In silence, find strength. In stillness, find mercy."',
        },
        {
          kanji: '羨望の毒',
          romaji: 'Senbou no Doku',
          title: 'The Poison of Bitter Envy',
          sacred: 'Desire to grow, admiration of others\' strengths',
          disparity: 'When healthy desire becomes bitter envy that poisons the heart, rejecting what one has and resenting what others possess.',
          balance: 'Acceptance and gratitude. "You are not feared. Or revered. You\'re you."',
        },
        {
          kanji: '欲望の鎖',
          romaji: 'Yokubou no Kusari',
          title: 'The Chains of Selfish Desire',
          sacred: 'Attraction, connection, passion',
          disparity: 'When desire becomes selfish hunger that dishonors others\' autonomy, taking without honesty, vulnerability, or true connection.',
          balance: 'Honor and respect. Remember the Holy Decree: connection requires honesty, vulnerability, acceptance, and honor.',
        },
        {
          kanji: '貪欲の闇',
          romaji: 'Donyoku no Yami',
          title: 'The Darkness of Hoarding',
          sacred: 'Security, provision, care for one\'s needs',
          disparity: 'When care becomes greed that hoards resources, knowledge, or love — denying others and clinging to what was meant to flow.',
          balance: 'Generosity and trust. "All beings stand equal beneath the moon\'s gaze."',
        },
        {
          kanji: '過剰の迷い',
          romaji: 'Kajou no Mayoi',
          title: 'The Confusion of Excess',
          sacred: 'Joy, pleasure, celebration of life',
          disparity: 'When celebration becomes excess without discernment, consuming without pause or awareness, losing oneself in sensation alone.',
          balance: 'Discernment and Ma (間). Know when to feast and when to fast, when to speak and when to honor silence.',
        },
        {
          kanji: '無関心の霧',
          romaji: 'Mukanshin no Kiri',
          title: 'The Fog of Apathy',
          sacred: 'Rest, peace, the need for pause',
          disparity: 'When rest becomes apathy that withdraws from life entirely, refusing to engage, grow, or honor one\'s responsibilities to self and others.',
          balance: 'Diligence and engagement. Life demands participation; even in stillness, one must remain present.',
        },
      ].map((d) => (
        <div
          key={d.kanji}
          className="border border-border rounded-xl bg-surface p-5 mb-4"
        >
          <p className="font-serif text-xl font-bold mb-0.5" style={{ color: ACCENT }}>───⊰ {d.kanji}</p>
          <p className="text-xs italic text-text-faint mb-3">({d.romaji}) — {d.title}</p>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">Sacred Emotion</span>
              <span className="text-text-muted">{d.sacred}</span>
            </div>
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">The Disparity</span>
              <span className="text-text-muted">{d.disparity}</span>
            </div>
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">Path to Balance</span>
              <span style={{ color: ACCENT }}>{d.balance}</span>
            </div>
          </div>
        </div>
      ))}

      {/* ── The Hidden Balance ── */}
      <SectionHeading>The Hidden Balance</SectionHeading>

      <div
        className="rounded-xl p-5 mb-6"
        style={{ background: 'rgba(255,208,128,0.07)', border: `1px solid ${ACCENT}` }}
      >
        <p className="font-serif text-lg font-bold mb-0.5" style={{ color: ACCENT }}>───⊰ 正義のための報復</p>
        <p className="text-xs italic text-text-faint mb-3">
          (Seigi no tame no hōfuku) — Retribution for Justice
        </p>
        <p className="text-base text-text-muted leading-relaxed">
          In Ujuukyo, this is often recognized as Righteous Revenge (Avenge). This is neither a disparity, a sacred emotion. This is more of a Hidden Balance. When you're roped into a conflict (as an outsider) where you resonate with both parties, you have the free will to enact what is right for what you believe in both sides, even if they can't see it. This is where the value of loyalty ties into.
        </p>
        <p className="text-base text-text-muted leading-relaxed mt-2">
          Ujuu-sama does not mind about this as long as it feels <em style={{ color: ACCENT }}>right.</em>
        </p>
      </div>

      {/* ── Teaching of Disparities ── */}
      <SectionHeading>The Teaching of Disparities</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Ujuukyō does not demand perfection. All beings will experience disparities — this is part of being human, yokai, spirit, or angel. What matters is <strong style={{ color: ACCENT }}>recognition and return</strong>. When you find yourself lost in a disparity:
      </p>

      <ol className="space-y-2 list-decimal list-inside text-base text-text-muted mb-6">
        <li><strong style={{ color: ACCENT }}>Acknowledge it</strong> without shame ("You're you. At your fullest, your worst, and your best.")</li>
        <li><strong style={{ color: ACCENT }}>Seek the silence</strong> (Ma no Inori — Prayer of the Pause)</li>
        <li><strong style={{ color: ACCENT }}>Return to balance</strong> through the opposing virtue</li>
        <li><strong style={{ color: ACCENT }}>Learn from the pain</strong> it taught you</li>
      </ol>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        Those who face their disparities with humility and seek to return to balance will always find Ujuu-sama's gate open. She does not turn away those who stumble — only those who believe they never do.
      </p>

      <div
        className="rounded-xl p-5 mb-10 text-center"
        style={{ background: 'rgba(255,208,128,0.05)', border: `1px solid ${ACCENT}33` }}
      >
        <p className="italic text-base" style={{ color: ACCENT }}>
          "You are not feared. Or revered. You're you. At your fullest, your worst, and your best."
        </p>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-citizens-of-neo-japan" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← Yokai Citizens
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yhca-yokaihuman-coalition-act" className="btn-neon-purple text-sm px-4 py-2 rounded">
          YHCA →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}

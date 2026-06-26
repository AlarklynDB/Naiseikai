import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout';

const ACCENT = '#c8a87a';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-') : undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}


interface DoctrineCardProps {
  number: string;
  title: string;
  quote: string;
  body: React.ReactNode;
  controversial?: boolean;
}

function DoctrineCard({ number, title, quote, body, controversial }: DoctrineCardProps) {
  return (
    <div
      className="rounded-xl p-6 mb-5 border"
      style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}07` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className="font-mono text-xs px-2 py-1 rounded shrink-0 mt-0.5"
          style={{ background: `${ACCENT}22`, color: ACCENT }}
        >
          {number}
        </span>
        <div>
          <p className="font-serif text-lg font-bold" style={{ color: ACCENT }}>
            ─────⊰ {title}
            {controversial && (
              <span
                className="ml-2 text-xs font-mono px-2 py-0.5 rounded"
                style={{ background: 'rgba(248,113,113,0.15)', color: '#f87171' }}
              >
                Controversial
              </span>
            )}
          </p>
        </div>
      </div>
      <blockquote
        className="italic text-sm mb-4 pl-4"
        style={{ borderLeft: `3px solid ${ACCENT}88`, color: `${ACCENT}cc` }}
      >
        {quote}
      </blockquote>
      <div className="text-sm text-text-muted leading-relaxed space-y-1">
        {body}
      </div>
    </div>
  );
}

export default function YHCAYokaiHumanCoalitionAct() {
  return (
    <LorePageLayout>
      <div className="page-container">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
          <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
          <span>/</span>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
          <span>/</span>
          <span style={{ color: ACCENT }}>YHCA — Yokai &amp; Human Coalition Act</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1
            className="font-serif text-3xl sm:text-4xl mb-2"
            style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
          >
            🏥 The Yokai &amp; Human Coalition Act
          </h1>
          <p className="text-base text-text-faint italic">
            妖怪と人間の連合法 — Yōkai to Ningen no Rengōhō
          </p>
        </div>

        {/* Image Placeholder */}
        <div
          className="rounded-xl flex items-center justify-center mb-10 border-2 border-dashed"
          style={{ borderColor: `${ACCENT}44`, background: `${ACCENT}05`, minHeight: '200px' }}
        >
          <div className="text-center px-4">
            <p className="text-2xl mb-2">📜</p>
            <p className="text-sm font-mono" style={{ color: ACCENT }}>[ YHCA Image Placeholder ]</p>
            <p className="text-xs text-text-faint mt-1">Image Placeholder</p>
          </div>
        </div>

        {/* ── The Pact ── */}
        <SectionHeading id="the-pact">The Yokai and Human Coalition Act</SectionHeading>

        <div
          className="rounded-xl p-5 mb-6"
          style={{ borderLeft: `4px solid ${ACCENT}`, background: `${ACCENT}07` }}
        >
          <p className="font-semibold mb-3" style={{ color: ACCENT }}>The Y&amp;H Act is a pact between two sides</p>
          <p className="text-base text-text-muted leading-relaxed mb-3">
            Yokai cannot kill or murder humans because it is illegal, even if it's the other way around. It's about moral laws and ambiguity between parties. There are a lot of Yokai when they appeared, which upsets the balance of humans. So together, both outstanding leaders of these parties banded together to form this act.
          </p>
          <p className="text-base text-text-muted leading-relaxed mb-3">
            However, it is NOT illegal for Yokai to kill Yokai. It has been a tradition since the early yokai settlements from Year 5 - 1599, since the first few yokais appeared in Year 5.
          </p>
          <p className="text-base text-text-muted leading-relaxed">
            Ninjas (Shinobi) are not Yokai. They are high classed humans that specialize in Shadow abilities using tomes and runes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Mizumi Card */}
          <div
            className="rounded-xl p-5 border"
            style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}07` }}
          >
            <p className="font-serif text-base font-bold mb-1" style={{ color: ACCENT }}>
              🐢 Mizumi Kamekoryu
            </p>
            <p className="text-xs text-text-faint italic mb-2">Yokai Representative</p>
            <p className="text-sm text-text-muted leading-relaxed">
              The <strong style={{ color: ACCENT }}>oldest yokai</strong> in the Naiseikai World and the representor of all Yokai. A Dragon Turtle — she ages very slowly due to the factors of dragon blood and turtle biology. She ages once every 50 years. As of the year 2100, she is now 2095 years of age, despite looking like she's in her 40s.
            </p>
          </div>
          {/* Hibiki Card */}
          <div
            className="rounded-xl p-5 border"
            style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}07` }}
          >
            <p className="font-serif text-base font-bold mb-1" style={{ color: ACCENT }}>
              👩 Hibiki Aoba
            </p>
            <p className="text-xs text-text-faint italic mb-2">Human Representative</p>
            <p className="text-sm text-text-muted leading-relaxed">
              The Human Representative of the YHCA. She has somehow attained an anti-slow aging product which allowed her to prolong her life. She might be the same age as Mizumi. (AHAHA ARU IS SHIPPING THAT!!!)
            </p>
          </div>
        </div>

        {/* ── Location ── */}
        <SectionHeading id="location">Location — Ninjin Prefecture</SectionHeading>
        <p className="text-base text-text-muted leading-relaxed mb-8">
          The YHCA's Headquarters is located in the{' '}
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" style={{ color: '#7ab8f5' }}>Ninjin Prefecture</Link>{' '}
          alongside the{' '}
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" style={{ color: '#7ab8f5' }}>NYAQ</Link>,
          since these two organizations rely on each other time to time.
        </p>

        {/* ── Five Doctrines ── */}
        <SectionHeading id="five-doctrines">The Five Doctrines of the YHCA</SectionHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          When the act was formed in <strong style={{ color: ACCENT }}>Year 1700</strong>, both human and yokai leaders agreed upon five fundamental doctrines to govern their coexistence. These doctrines are inscribed on five stone pillars located at the YHCA headquarters in Kyoto, Japan. Each pillar is written in both Japanese and the ancient Yokai script.
        </p>

        <DoctrineCard
          number="Doctrine I"
          title="Sanctity of Human Life"
          quote='"No yokai shall take the life of a human, regardless of provocation, transgression, or threat. To do so is to break the foundation of this pact and invite judgment upon oneself."'
          body={
            <p>
              This doctrine establishes the core protection for humanity. Any yokai who kills a human faces severe consequences, including potential execution or permanent imprisonment. However, self-defense clauses exist in extreme cases, though they require extensive tribunal review.
            </p>
          }
        />

        <DoctrineCard
          number="Doctrine II"
          title="Equality Under Consequence"
          quote='"No human shall take the life of a yokai without cause recognized by law. The act of murder knows no species, and justice shall be blind to form."'
          body={
            <p>
              While humans hold less raw power than most yokai, this doctrine ensures that human-on-yokai violence is equally punishable. It was a compromise that granted yokai legal personhood under human law systems.
            </p>
          }
        />

        <DoctrineCard
          number="Doctrine III"
          title="The Old Ways Remain"
          quote='"Conflict between yokai is a matter of their own tradition. The coalition does not extend its hand into yokai-on-yokai affairs, for their laws are ancient and beyond our jurisdiction."'
          controversial
          body={
            <p>
              This controversial doctrine permits yokai to kill other yokai without legal consequence from the YHCA. It acknowledges that yokai have had their own systems of honor, territory, and dominance long before humans were even aware of their existence. Many modern yokai activists challenge this doctrine as outdated and dangerous.
            </p>
          }
        />

        <DoctrineCard
          number="Doctrine IV"
          title="Representation and Voice"
          quote='"The eldest and wisest among yokai shall stand as representative for all yokai kind. Their word shall carry the weight of generations, and their counsel shall guide the path forward."'
          body={
            <p>
              This doctrine officially recognizes <strong style={{ color: ACCENT }}>Setsuna Kamekoryu</strong> (and any future representative) as the voice of all yokai in coalition matters. It grants her authority to negotiate, mediate, and speak on behalf of yokai interests in political and legal arenas.
            </p>
          }
        />

        <DoctrineCard
          number="Doctrine V"
          title="Integration and Coexistence"
          quote='"Let both sides walk the same roads, share the same skies, and build a future where fear gives way to understanding. Isolation breeds only darkness."'
          body={
            <p>
              The final doctrine encourages cultural exchange, education, and peaceful integration between humans and yokai. It's the idealistic heart of the YHCA — though in practice, prejudice and fear still run deep on both sides. This doctrine led to the creation of yokai registration systems, mixed schools, and eventually, organizations like the{' '}
              <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" style={{ color: '#7ab8f5' }}>YARC</Link>
              {' '}(though its methods severely contradict this doctrine's intent).
            </p>
          }
        />

        {/* ── Enforcement ── */}
        <SectionHeading id="enforcement">Enforcement and Violations</SectionHeading>

        <p className="text-base text-text-muted leading-relaxed mb-3">
          Violations of Doctrines I and II are handled by the <strong style={{ color: ACCENT }}>YHCA Tribunal</strong>, a court composed of both human judges and yokai elders. Punishments range from imprisonment to execution, depending on severity and intent.
        </p>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          Violations of Doctrine V (discrimination, hate crimes, etc.) are handled more leniently, often resulting in fines, community service, or mandatory education programs.
        </p>
        <p className="text-base text-text-muted leading-relaxed mb-10">
          Doctrine III remains the most controversial, as it essentially creates a legal gray zone where yokai can settle disputes through violence. Many younger yokai have called for its revision.
        </p>

        {/* ── Bottom Nav ── */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" className="btn-neon-cyan text-sm px-4 py-2 rounded">
            ← Religion of Ujuukyō
          </Link>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" className="btn-neon-purple text-sm px-4 py-2 rounded">
            YARC →
          </Link>
        </div>

      </div>
    </LorePageLayout>
  );
}
